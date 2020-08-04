import React from 'react';
import ReactGist from 'react-gist';
import { ArticleContent } from '../article-data';
import { ArticleId } from '../article-id';
import { ArticleImage } from '../article-image';

export const english: ArticleContent = {
    title: 'PWA: Make your website available offline',
    description: 'Quick guide on how to turn a single page application into a progressive web app',
    introduction: (
        <p>
            If you are visiting this website from a mobile device, you might have seen the following
            message at the bottom of the screen. No, I am not trying to hack you. I have made my
            website a{' '}
            <a href="https://developers.google.com/web/progressive-web-apps/" target="_blank">
                progressive web app
            </a>{' '}
            and, as such, it can be accessed offline and it can be installed in Android and iOS
            devices. Keep reading and turn your website into a PWA in less than 15 minutes!
        </p>
    ),
    body: (
        <React.Fragment>
            <ArticleImage
                alt="Add PWA to home screen prompt"
                articleId={ArticleId.progressiveWebApps}
                className="image-300"
                filename="add-home.png"
                footer="Add PWA to home screen prompt"
            />
            <p>
                The magic behind the progressive web apps are the{' '}
                <a
                    href="https://developers.google.com/web/fundamentals/primers/service-workers/"
                    target="_blank"
                >
                    service workers
                </a>
                . To cut a long story short, a service worker is a script that the browser runs in
                the background, in a separate thread from the UI, providing additional features such
                as the ability to intercept and handle network requests as well as managing a cache
                of responses. In fact, this is the only feature we will need to make our website
                available offline.
            </p>
            <p>
                A service worker lifecycle is completely separate from the web application so,
                first, it must be registered through the browser <b>navigator API</b>. You will want
                to register the service worker as soon as possible so all the application requests
                are intercepted and handled (including the application Javascript files themselves).
                For that reason, I place the service worker registration in a script tag inside the
                head tag of the HTML page:
            </p>
            <ReactGist id="86e97f458a65a9171ec7e825438516b7" />
            <p>
                he register method tells the browser to search for a service worker in the{' '}
                <b>sw.js</b> file and will start the install step in the background. Thus the next
                thing to be done is to tell the service worker what to do during the install step
                which, typically, will consist in caching some static assets.
            </p>
            <p>
                There are multiple caching strategies to choose from when it comes to service
                workers and they are all very well explained in{' '}
                <a
                    href="https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#serving-suggestions"
                    target="_blank"
                >
                    the offline cookbook
                </a>
                . Take a look at them to know which patterns there are and which ones suit better
                your application needs (you might apply different strategies depending on the type
                of resource being cached and how often they get updated). I chose the{' '}
                <b>network falling back to cache</b> strategy for my webpage for the following
                reasons:
            </p>
            <ul>
                <li>
                    <b>Simplicity</b>. There are better performing strategies (e.g.{' '}
                    <b>Cache then network</b> or <b>Cache & network race</b>) but they add more
                    complexity to the service worker implementation. Let's keep in mind that the
                    only goal of this exercise is to make the website available offline, not to
                    optimize the time to content
                </li>
                <li>
                    I first started with <b>cache falling back to network</b> for better performance
                    but, given I frequently update the application, I was getting errors due to old
                    versions of static assets being cached. Feel free to dedicate some time to solve
                    those errors but, again, the purpose of this tutorial is just to make the
                    website available offline
                </li>
            </ul>
            <p>
                So, without further ado, let's implement the service worker. First we need to add a
                specific set of files to the cache during installation. If all the files are cached
                successfully, then the service worker becomes installed and we get those static
                assets available in the cache. If any of the files fail to download and cache, then
                the install step will fail and the service worker won't activate (not the end of the
                world though, it will try to install again the next time the page is loaded).
            </p>
            <p>
                The shorter the list is the least chances the installation has to fail (and the rest
                of assets can be cached later on anyway). In my case, I am only caching the landing
                page of my site. The{' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/self">
                    self property
                </a>{' '}
                is a reference to the WorkerGlobalScope (available only in service worker threads):
            </p>
            <ReactGist id="2771714847be79eb7340de48988f5d5f" />
            <p>
                Now let's get the work done! The most important part of our service worker is the{' '}
                <b>fetch</b> listener. This handler will intercept every network request and will
                allow us to serve a cached version of a given resource, which, due to the{' '}
                <b>Network falling back to cache</b> strategy, will happen only if the corresponding
                network request fails (lines 35-37). Don't forget to add the asset to the cache on a
                successful network response in order to keep the cache content updated (line 31).
                The <b>clone</b> method is required because the responses can only be consumed once.
            </p>
            <p>
                Optionally, an <b>activate</b> listener can also be defined in order to run some
                tasks each time the service worker is successfully installed. This feature comes
                handy to clear the application cache every time the service worker is updated. You
                don't need to do this but remember the universe tends to disorder and is our duty to
                keep the application clean and tidy; remove the files you are no longer going to
                need and make the users happier by freeing space up in their devices.
            </p>
            <p>
                Once the server worker is put into place the browser will start caching every
                network request. You can have a look at the contents of your application cache in
                the <b>Application</b> tab of the Chrome <b>Developer Tools</b>. Once all the
                content you need has been cached, you can also test the application offline behavior
                by checking the <b>Offline</b> box and refreshing the page. Notice how the network
                requests fail and the assets are served from the service worker:
            </p>
            <ArticleImage
                alt="Service worker cache files"
                articleId={ArticleId.progressiveWebApps}
                filename="cache-content.png"
                footer="Service worker cache files"
            />
            <ArticleImage
                alt="Files being served from service worker cache"
                articleId={ArticleId.progressiveWebApps}
                filename="offline-desktop.png"
                footer="Files being served from service worker cache"
            />
            <p>
                Congratulations 🎉 Your application just turned offline friendly! You are free to go
                playing now... but I still have something cool to show you. See that{' '}
                <a
                    href="https://developers.google.com/web/fundamentals/web-app-manifest/"
                    target="_blank"
                >
                    manifest.json file
                </a>{' '}
                inside the head tag of the HTML page? It has certainly nothing to do with the
                service worker. That file is what will make your application ready to be installed
                in mobile devices for free and it only takes a few minutes to add it. It's content
                is self-explanatory and here are some screenshots of how professional your web will
                look like when installed in a mobile device:
            </p>
            <ReactGist id="e545792349b5ab52acb67e0d0a65215b" />
            <div className="screen-splitter">
                <ArticleImage
                    alt="PWA install notification"
                    articleId={ArticleId.progressiveWebApps}
                    className="image-300"
                    filename="pwa-install-notification.png"
                />
                <ArticleImage
                    alt="PWA starting"
                    articleId={ArticleId.progressiveWebApps}
                    className="image-300"
                    filename="pwa-starting.png"
                />
                <ArticleImage
                    alt="Offline PWA in mobile device"
                    articleId={ArticleId.progressiveWebApps}
                    className="image-300"
                    filename="offline-mobile.png"
                />
            </div>
            <p>
                That's the end of it! As promised, you can turn your website into an offline
                available progressive web app in less than 15 minutes. Reach me at{' '}
                <b>capellas.carles@gmail.com</b> if I haven't been clear enough about any aspect and
                see you in the next post!
            </p>
        </React.Fragment>
    )
};
