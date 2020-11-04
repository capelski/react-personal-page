import React from 'react';
import ReactGist from 'react-gist';
import { ArticleContent } from '../article-data';
import { ArticleId } from '../article-id';
import { ArticleImage } from '../article-image';

export const english: ArticleContent = {
    title: 'Create your own npm package',
    description: 'How to create your own JavaScript library and publish it to npm',
    shareSentence: 'Wait no more to create your own JavaScript library and publish it to npm!',
    introduction: (
        <p>
            Web developers owe a great deal to npm JavaScript libraries. npm packages resolve common
            web problems in elegant ways, are free to use, rock solid (potentially tested by
            thousands of users) and save development efforts. No doubt npm makes our lives easier
            but... who are those anonymous open source heroes? Well, you can be the next one!
        </p>
    ),
    body: (
        <React.Fragment>
            <ArticleImage
                articleId={ArticleId.npmPackagesDevelopment}
                alt="Angry birds hero animation"
                className="image-600"
                filename="hero.gif"
            />
            <h3>Why creating a Javascript library?</h3>
            <ul>
                <li>
                    <b>To help yourself</b>: How many times did you start implementing a feature in
                    a project and suddenly remember about a time you did something similar in
                    another project? Instead of copy and pasting the code from one repository to the
                    other you can create a new repository to hold contain piece of code in a single
                    place. It will be easier to for you to maintain it and you can add some usage
                    examples so that next time you want to use it, you will easily remember how to
                    do so.
                </li>
                <li>
                    <b>To become a better developer</b>: Writing code for others is much more
                    demanding than writing it for yourself or your team. When creating a library,
                    you must focus on the library behavior, making the Api as simple and intuitive
                    as possible. When turning your killer code into a library you will end up
                    understanding better it's intention and you might be surprised to discover
                    design flaws or unnoticed dependencies.
                </li>
                <li>
                    <b>To make the world a better place</b>: In the same way you can reuse that
                    brilliant utilities others might also find them useful. Aren't you grateful when
                    you find an npm package that does exactly what you need? Then wait no more to
                    start contributing back to the community. Plus the more people there is running
                    your code the more your library will evolve and become better.{' '}
                    <a href="https://www.npmjs.com/package/redux" target="_blank">
                        redux
                    </a>{' '}
                    is an excellent example of a library that was started by a single developer and
                    is now used by millions, having received contributions from over 800 developers.
                </li>
                <li>
                    <b>To feed your ego</b>: Last but not least! Nothing can make a developer more
                    proud of himself than having conceived and developed a library that people use
                    😎 Even if the only user of the library is the developer himself (I can tell
                    from personal experience).
                </li>
            </ul>
            <ArticleImage
                articleId={ArticleId.npmPackagesDevelopment}
                alt="Macaulay culkin celebrating"
                className="image-600"
                filename="yes.gif"
            />
            <h3>How to publish a Javascript library to npm</h3>
            <p>
                Publishing a package to npm is rather easy; you just need to{' '}
                <a href="https://www.npmjs.com/signup" target="_blank">
                    create an account
                </a>{' '}
                and upload the package by running the following command within your project
                directory. In fact, you can upload any type of file inside an npm package; from your
                parents wedding video to a pdf version of the bible. The tricky part of publishing a
                package is actually to make it easy to use and understand, while keeping it
                small-sized, functioning and properly versioned.
            </p>
            <div className="article-code-snippet">npm publish</div>
            <p>Here is a checklist you want to cover in order to build a great library:</p>
            <ul>
                <li>
                    <b>README.md</b>: Help potential users of your library understanding what it
                    does and how it works through this markdown introduction file. It typically
                    contains a description of the library goal, usage examples and eventually some
                    links to relevant content (e.g. official documentation page). npm will display
                    the information in this file in the npm package page, just as Github does when
                    accessing a repository (no wonder they encourage you to add a README file to all
                    your repositories):
                    <ArticleImage
                        articleId={ArticleId.npmPackagesDevelopment}
                        alt="Add readme file Github banner"
                        filename="github-add-readme.png"
                    />
                </li>
                <li>
                    <b>Versioning</b>: both npm and users identify different releases of your
                    library by the <b>version</b> field of your package.json file. If you try to
                    publish a new release of your package without changing the version number, npm
                    will throw an error. Get familiar with{' '}
                    <a href="https://semver.org/" target="_blank">
                        semantic versioning
                    </a>{' '}
                    and make sure you properly update the version depending on the type of your
                    release:
                    <div className="article-code-snippet">npm version [major|minor|patch]</div>
                </li>
                <li>
                    <b>.npmignore</b>: Web developers are sensitive to libraries size so it's in
                    your interest to keep yours small. Plus, uploading useless files to npm only
                    consumes network bandwidth and storage space in npm servers; be a good samaritan
                    and keep your garbage away. This file tells npm which files to exclude when
                    publishing a package. Typical files you will want to exclude are the tests,
                    reports and the source files if you are using a transpiler.
                </li>
                <li>
                    <b>Testing</b>: Prevent breaking old features while developing new ones by
                    writing tests and running them before every publish. Nothing bothers developers
                    more than a broken feature due to a library update. Plus, users will find out
                    about the issues hours later of your release; you will find yourself rushing to
                    revert the changes or fix the issues and publishing a new version. Great open
                    source libraries always come with great testing.
                </li>
                <li>
                    <b>Types declaration</b>: Help users understanding how to use your library by
                    providing types declaration. You do that by exporting your library types from a{' '}
                    <b>.d.ts</b> typescript file (automatically generated by the typescript compiler
                    when enabling the <b>declaration</b> option) and referencing that file from the{' '}
                    <b>types</b> field of your package.json. If don't use Typescript in your
                    library, you can manually generate the file. You will get visual studio code to
                    display all the available properties in your components:
                    <ArticleImage
                        articleId={ArticleId.npmPackagesDevelopment}
                        alt="Visual studio code intellisense dropdown"
                        className="image-600"
                        filename="intellisense.png"
                    />
                </li>
                <li>
                    <b>Transpiling:</b> A common error when using transpilers (e.g. Typescript,
                    babel, etc.) is to publish a new version of the library without transpiling the
                    code first. Force npm to build your project before each release by adding a{' '}
                    <b>prepublishOnly</b> script in your package.json. Typically it will just run
                    the build command. I also like to remove the entire distribution folder to
                    prevent publishing old files.
                </li>
            </ul>
            <ArticleImage
                articleId={ArticleId.npmPackagesDevelopment}
                alt="Man making explicit he is ready"
                className="image-600"
                filename="ready.gif"
            />
            <h3>Some examples</h3>
            <p>
                Need some inspiration to get you started? Here are some examples which, what a
                coincidence, happen to be developed by me. Luckily, they will help preventing you
                from making the same mistakes:
            </p>
            <ul>
                <li>
                    <a href="https://www.npmjs.com/package/cucumber-steps-parser" target="_blank">
                        cucumber-steps-parser
                    </a>
                    : Simple library I developed while working at Sage that searches for all the
                    cucumber.js sentence definitions in a Javascript/Typescript project. The first
                    version was not very intuitive, so the second had a slightly more descriptive
                    api. Accepting config options in an optional argument (v2) is always more
                    descriptive having many optional arguments (v1):
                    <ReactGist id="315b047c3e1209aaf03a0b330e2f913d" />
                    <ReactGist id="f4a511af5f858641d7dcd3c437deebe3" />
                </li>
                <li>
                    <a href="https://www.npmjs.com/package/react-redux-link" target="_blank">
                        react-redux-link
                    </a>
                    : Monkey patching of the{' '}
                    <a href="https://www.npmjs.com/package/react-redux" target="_blank">
                        react-redux
                    </a>{' '}
                    package. I wrote the code (145 lines in total) as a part of another project and
                    realized it was generic enough to exist on its own. The proof that there is no
                    minimal functionality level a library must provide.
                    <br />
                    <br />
                    It provides type safety when connecting the react components to the redux store,
                    highlighting missing properties and bad types. It requires to declare the
                    component properties interface using <b>ReduxComposedProps</b> and replace the
                    react-redux <b>connect</b> with <b>link</b>:
                    <ReactGist id="cb93ecd355a621990623169446f5ff78" />
                    <ReactGist id="88f20d0b0a4c1b003824789b9426b4a9" />
                    <ArticleImage
                        articleId={ArticleId.npmPackagesDevelopment}
                        alt="Man making explicit he is ready"
                        className="image-600"
                        filename="react-redux-link.png"
                    />
                </li>
                <li>
                    <a href="https://www.npmjs.com/package/modena" target="_blank">
                        modena
                    </a>
                    : Web server that allows exposing multiple express apps on a single domain
                    isolated from each other. The{' '}
                    <a href="https://github.com/capelski/modena-v1" target="_blank">
                        first version
                    </a>{' '}
                    was meant to make the hosted apps code as light as possible, but it turned out
                    to be a total mess.
                    <br />
                    <br />
                    It imposed restrictions on the hosted apps (e.g. EJS template language,
                    passport.js for authentication, the route of the static assets, etc.) and forced
                    them to install modena as a dependency and use it to define the express routes
                    (making it hard to run the app as standalone). It also included non related
                    functionalities (such as dynamic SASS compilation) which made the library
                    heavier for features that most times wouldn't be used.
                    <ReactGist id="f07609653bc05ec07f56d4953f43aa0b" />
                    <br />A library that provides features on top of other libraries must respect
                    those libraries conventions. I had no other option to re-write the library from
                    scratch, removing the non-related features and keeping in mind that hosted apps
                    existed in their own. Making a library too rigid will only result in nobody
                    using it.
                </li>
            </ul>
            <p>
                And that's all there is! Go publishing your brand new library, let me know if you
                get stuck and see you in the next post 💪
            </p>
        </React.Fragment>
    )
};
