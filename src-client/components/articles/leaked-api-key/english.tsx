import React from 'react';
import ReactGist from 'react-gist';
import { ArticleContent } from '../article-data';
import { ArticleId } from '../article-id';
import { ArticleImage } from '../article-image';

export const english: ArticleContent = {
    title: 'The leaked Api key',
    description:
        'Article on how to import the Google Maps API through npm and Webpack instead of requiring it with a script tag',
    introduction: (
        <p>
            Few days ago I received the following email from Google Cloud Platform. Apparently, I
            was publishing my Google Maps API key to a public Github repository (for the
            non-technical audience, I was uploading some kind of password to a social network public
            wall), allowing any smart-ass clever enough to find it to spend my Google Maps quota on
            his behalf.
        </p>
    ),
    body: (
        <React.Fragment>
            <ArticleImage
                articleId={ArticleId.leakedApiKey}
                alt="Google Cloud Platform"
                filename="google-mail.png"
            />
            <p>
                And indeed, I was! Truth to be told, I was aware of that. When I first built my
                website I wanted to get it done as quick as possible and I imported the Google Maps
                code through the lazy way; the good old script tags. Given that almost nobody would
                visit my website and, even less, take a look at the source code, the strategy was
                decent enough and I got the job done. This is what my index.html file look like at
                the time Google sent me the email (note line 26):
            </p>
            <ReactGist id="6b6c6da0006ca9cfc5f28c1f0769f8d0" />
            <p>
                The sharp readers will have realized that I did harcode the API key as a query
                string parameter in the Google Maps script tag. Now, even though I like to think of
                myself as a generous kind person, sharing an API key with an unknown non thanks
                giving anonymous crowd is not how I want to demonstrate it. Also, the fact that
                Google knows that I am doing it makes me feel embarrassed, so let's try to do it
                better!
            </p>
            <p>
                My page is using Vue + Webpack so chances were high that I would find a handy
                library on npm. A{' '}
                <a href="https://www.npmjs.com/search?q=vue%20google%20maps" target="_blank">
                    quick npm search
                </a>{' '}
                returns many potentially interesting results. I gave a chance to the following two:
            </p>
            <ul>
                <li>
                    <b>vue2-google-maps</b>: This one was making Webpack build to fail. I went to
                    the Github repository opened issues (245 at the time of writing) and I found one{' '}
                    <a href="https://github.com/xkjyeah/vue-google-maps/issues/472" target="_blank">
                        reporting the Webpack failure
                    </a>{' '}
                    which had been seating there for almost a year
                </li>
                <li>
                    <b>vue-googlemaps</b>: This one gave me a better start and I could get to make
                    it work on development mode. However, when building and deploying the app on
                    production mode I was getting a "You have included the Google Maps JavaScript
                    API multiple times on this page" error which would make the Map to break
                </li>
            </ul>
            <p>
                Having run out of luck on npm, it was time to do some field research on Google. It
                didn't take me long to find this{' '}
                <a
                    href="https://medium.com/@paw145/using-the-google-maps-api-with-webpack-npm-and-a-handy-promise-returning-helper-19c9312971b0"
                    target="_blank"
                >
                    Medium article
                </a>{' '}
                which explains exactly what I needed; how to use the Google Maps API with Webpack
                and NPM. In short, I had to install the <b>load-google-maps-api</b> module and use
                the function it exports to asynchronously load the Google Maps API, providing the
                API key in the configuration parameter. When the promise returning function gets
                resolved, I can then use the object it returns in the usual fashion:
            </p>
            <ReactGist id="fc1ea8c211a1b585f85c13257e83746f" />
            <p>
                Almost there! The last missing piece was to use <b>dotenv</b> (or any similar tool)
                to define the API key as an environment variable and keep it away from Github. If
                you have never used it before, it allows you to define properties in a <b>.env</b>{' '}
                file (which must be excluded from Github) and then load them to the{' '}
                <b>process.env</b> nodejs global object. Finally, to be sure that I don't break my
                website by forgetting to define the key in the .env file (or more exactly, to create
                the whole .env file), I added the following check to the webpack configuration file:
            </p>
            <ReactGist id="13d92378c503a146d3ca3193a1f9f053" />
            <p>
                And that's how to remove google maps hardcoded API keys from public repositories and
                keep Google happy. Please contact me at <b>capellas.carles@gmail.com</b> or check{' '}
                <a
                    href="https://github.com/capelski/vue-personal-page/commit/fcf068af000ad02b5a38583e44b104edeaeb25cc"
                    target="_blank"
                >
                    this Github commit
                </a>{' '}
                if you have any doubts on specific details (other than how does Google detect that
                their API keys are being uploaded to public repositories... isn't it a bit scary?).
                See you in the next post!
            </p>
        </React.Fragment>
    )
};
