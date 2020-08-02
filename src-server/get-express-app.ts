import express from 'express';
import { readFile } from 'fs';
import { join } from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
import { App } from '../src-client/components/app';

const staticPath = join(__dirname, '..');
const indexPath = join(staticPath, 'index.html');

const serverRenderer: express.Handler = (req, res) => {
    readFile(indexPath, 'utf8', (fileError, fileContents) => {
        if (fileError) {
            console.error(fileError);
            return res.sendFile(indexPath);
        }

        try {
            const context: { url: string | undefined } = { url: undefined };
            process.env.PRODUCTION_URL_BASE = 'https://carlescapellas.xyz/react-personal-page';

            const serverApp = React.createElement(
                StaticRouter,
                { basename: '/react-personal-page', context, location: req.url },
                React.createElement(App, { isServerRendered: true })
            );
            const serializedApp = ReactDOMServer.renderToString(serverApp);
            const headTags = Helmet.renderStatic();

            if (context.url) {
                res.redirect(301, context.url);
            } else {
                const serverRenderedApp = fileContents
                    .replace(
                        '<div id="app-placeholder"/>',
                        `<div id="app-placeholder">${serializedApp}</div>`
                    )
                    .replace(
                        '<meta name="head-placeholder"/>',
                        headTags.title.toString() + headTags.meta.toString()
                    );

                return res.send(serverRenderedApp);
            }
        } catch (renderError) {
            console.error(renderError);
            return res.sendFile(indexPath);
        }
    });
};

export default () => {
    const app = express();

    app.get(/^\/$/, serverRenderer);

    app.use(express.static(staticPath));

    app.get('*', serverRenderer);

    return app;
};
