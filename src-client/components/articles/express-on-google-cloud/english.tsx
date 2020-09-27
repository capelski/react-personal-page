import React from 'react';
// import ReactGist from 'react-gist';
import { ArticleContent } from '../article-data';
// import { ArticleId } from '../article-id';
// import { ArticleImage } from '../article-image';

export const english: ArticleContent = {
    title: 'Running express on Google Cloud',
    description: 'TODO',
    shareSentence: 'TODO',
    introduction: (
        <p>
            So you have just finished your splendid new node.js express app, it runs smoothly in
            your local environment and you are ready to make it available to the users who are
            eagerly awaiting for the release. The question now is... where to deploy it? Search no
            more! Google Cloud Platform is the place you've been looking for. Seamlessly deploy your
            app with a single command and let Google handle the scaling your app needs according to
            the users traffic.
        </p>
    ),
    body: (
        <React.Fragment>
            <p></p>
        </React.Fragment>
    )
};
