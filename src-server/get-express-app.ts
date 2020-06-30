import express from 'express';
import { readFile } from 'fs';
import { join } from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { App } from '../src-client/components/app';

const staticPath = join(__dirname, '..');
const indexPath = join(staticPath, 'index.html');

export default () => {
    const app = express();

    app.get([/^\/$/, '/blog', '/portfolio'], (req, res) => {
        readFile(indexPath, 'utf8', (fileError, fileContents) => {
            if (fileError) {
                console.error(fileError);
                return res.sendFile(indexPath);
            }

            try {
                const serverApp = React.createElement(
                    StaticRouter,
                    { location: req.url },
                    React.createElement(App)
                );
                const serializedApp = ReactDOMServer.renderToString(serverApp);
                const serverRenderedApp = fileContents.replace(
                    '<div id="app-placeholder"/>',
                    `<div id="app-placeholder">${serializedApp}</div>`
                );
                return res.send(serverRenderedApp);
            } catch (renderError) {
                console.error(renderError);
                return res.sendFile(indexPath);
            }
        });
    });

    app.use(express.static(staticPath));

    return app;
};
