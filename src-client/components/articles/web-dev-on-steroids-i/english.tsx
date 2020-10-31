import React from 'react';
import ReactGist from 'react-gist';
import { ArticleContent } from '../article-data';
import { ArticleId } from '../article-id';
import { ArticleImage } from '../article-image';

export const english: ArticleContent = {
    title: 'Web development on steroids: Vol. 1',
    description:
        'Some techniques to make web development more efficient and how to put them into practice',
    introduction: (
        <p>
            Perhaps steroids is too much saying, but you can definitely get more out of web
            development. In this post I will explain some of the techniques we use at Sage to
            develop our web platforms, both front end and back end, which I've later on exported to
            my personal projects too. Keep reading to streamline your own development experience!
        </p>
    ),
    body: (
        <React.Fragment>
            <ArticleImage
                articleId={ArticleId.webDevOnSteroidsI}
                alt="Enthusiastic men shouting"
                filename="lets-go.gif"
            />
            <p>
                If you are reading this I will understand that you have made your homework and you
                already have a Git based version control solution, a dependency manager and a module
                bundler in place. Having the basics covered we can move into more challenging stuff.
                Be aware that I am using <b>Visual Studio Code</b>, so the solutions I provide are
                based on that particular IDE. If you prefer other choices, you will have to
                investigate the available tools out there, but the concepts are still applicable.
                That being said, let's rock and roll 🤩
            </p>
            <h3>Type safety</h3>
            <p>
                JavaScript was designed in 10 days. There are some things that make it a great
                language but it also has some flaws: e.g. not being able to detect certain common
                errors before runtime. Given that you already have to transpile your code, adding a
                build process to your development pipeline, why not investing a bit more effort and
                enjoy the safeness only a statically typed language can provide?
            </p>
            <p>
                Regardless your project size and complexity, having meta data about your code will
                help it being more descriptive and will allow you to run some compilation checks,
                using awesome libraries such as{' '}
                <a href="https://palantir.github.io/tslint/" target="_blank">
                    Typescript
                </a>
                . A very cool aspect of using Typescript with an appropriate IDE is that you get a
                list of all the attributes and methods available in an object when you type, a
                feature also known as Intellisense. Once you try it, you will never be able to
                develop without it again!
            </p>
            <ArticleImage
                articleId={ArticleId.webDevOnSteroidsI}
                alt="Typescript autocomplete example"
                className="image-600"
                filename="intellisense.png"
            />
            <h5>Steps</h5>
            <ul>
                <li>
                    Install typescript and a module loader as development dependencies
                    <div className="article-code-snippet">
                        npm install --save-dev typescript awesome-typescript-loader
                    </div>
                </li>
                <li>
                    Add a <b>tsconfig.json</b> configuration file. If you are migrating an existing
                    project to typescript, you will probably want to use the <b>allowJs</b> option
                    to make the transition gradually, as well as waiting until the transition is
                    complete to enable <b>noImplicitAny</b>, <b>strictNullChecks</b>, etc.
                    <ReactGist id="40a0c73d4ae63b73596c381b293ed580" />
                </li>
                <li>
                    Configure your module bundler to resolve typescript files. In my case I use
                    webpack, so this is how the story goes <b>(webpack.config.js)</b>:
                    <ReactGist id="dba8ea564d3baf06e325d4317a0d8163" />
                </li>
                <li>
                    Rename at least your entry point file from <b>*.js to *.ts</b> and surrender to
                    typescript awesomeness
                </li>
            </ul>
            <h3>Formatting</h3>
            <p>
                Don't lose a single minute more writing semicolons, replacing double quotes with
                single quotes or arguing with your colleagues about how to format ternary
                expressions and lines maximum length. Put a formatter that integrates with your IDE
                in place and it will save you priceless amounts of time while enforcing a standard
                code guideline.
            </p>
            <p>
                <a href="https://prettier.io/" target="_blank">
                    Prettier
                </a>{' '}
                is a popular opinionated code formatter that will take care of formatting for you.
                It allows you to configure a few parameters (e.g. maximum line length) but, as it is
                opinionated, cannot be very customized (which will save you stupid discussion with
                your teammates). You can either run it from the command line or use the VSCode
                extension to automatically format every file each time the file is saved.
            </p>
            <h5>Steps</h5>
            <ul>
                <li>
                    Install prettier as a development dependency
                    <div className="article-code-snippet">npm install --save-dev prettier</div>
                </li>
                <li>
                    Add a <b>prettier.rc</b> json configuration file with your favorite settings or
                    skip this step if you are fine with prettier default settings
                    <ReactGist id="ed3455ba86ac1124e4bf512154c70da8" />
                </li>
                <li>
                    Add npm scripts to run prettier
                    <ReactGist id="ab7ebecc7f7d52499aa8132630c5d3c5" />
                </li>
                <li>
                    Install the VSCode prettier extension <b>(esbenp.prettier-vscode)</b> and add it
                    to <b>.vscode/extensions.json</b>
                    <ReactGist id="e2cf90b97c66464a5f93084855d59193" />
                </li>
                <li>
                    Configure VSCode to enable the <b>Format On Save</b> option by adding the
                    following property to <b>.vscode/settings.json</b>. I also recommend you to set
                    the prettier <b>Require Config</b> property to true so prettier formatting will
                    only be applied to projects that contain a prettier configuration file
                    <ReactGist id="03d288d753e5fc55e547edff9097c85f" />
                </li>
            </ul>
            <h3>Linting</h3>
            <p>
                Static code analysis that will catch suspicious code (e.g. floating promises) and
                will enforce the best practices (e.g. functions maximum number of lines).{' '}
                <a href="https://eslint.org/" target="_blank">
                    eslint
                </a>{' '}
                is a great linting tool, which can be highly customized and manages to automatically
                fix certain types of issues. With a bit of additional configuration it also supports
                Typescript language, which makes it an ideal candidate to replace the deprecated{' '}
                <a href="https://palantir.github.io/tslint/" target="_blank">
                    tslint
                </a>
                .
            </p>
            <h5>Steps</h5>
            <ul>
                <li>
                    Install eslint as a development dependency
                    <div className="article-code-snippet">npm install --save-dev eslint</div>
                </li>
                <li>
                    Create a .eslintrc.js configuration file. You can either copy an existing one
                    (remember to install the required dependencies) or create a new one with the
                    eslint command line utility
                    <div className="article-code-snippet">npx eslint --init</div>
                </li>
                <li>
                    Add npm scripts to run eslint
                    <ReactGist id="bfbfbae07b49b1d0dcc5d2090633c998" />
                </li>
                <li>
                    If you are using or want to use prettier, you will need to configure eslint to
                    respect prettier rules
                    <div className="article-code-snippet">
                        npm install --save-dev eslint-config-prettier eslint-plugin-prettier
                    </div>
                    <ReactGist id="eaa383ca7b2ddcb07f9a404324535711" />
                </li>
                <li>
                    Install the VSCode eslint extension <b>(dbaeumer.vscode-eslint)</b> and add it
                    to <b>.vscode/extensions.json</b>
                    <ReactGist id="8e060f2d34c0963248882ff918177e21" />
                </li>
                <li>
                    Configure VSCode to enable the <b>Format On Save</b> option as well as the{' '}
                    <b>Format: Enable</b> eslint option by adding the following properties to{' '}
                    <b>.vscode/settings.json</b>
                    <ReactGist id="a907011d3708c3bd582ba3e89d79b450" />
                </li>
                <li>
                    Optionally some more plugins can be installed on top of eslint. For example, I
                    like to enforce the import statements to be alphabetically sorted. We can use{' '}
                    <b>eslint-plugin-import</b> for such purpose
                    <div className="article-code-snippet">
                        npm install --save-dev eslint-plugin-import
                    </div>
                    <ReactGist id="5540afca4d6afce91e00c48b97e5724c" />
                </li>
                <li>
                    Finally, you might need to <b>tweak .eslintrc.js</b> file to meet your needs,
                    specially if you are using Typescript and/or React
                </li>
            </ul>
            <h3>Spell checking</h3>
            <p>
                So far, words are the most useful concept when it comes to communication between
                humans. If you want your code to be descriptive, you must avoid variable names such
                as
                <i>el</i>,<i>doc</i>,<i>i</i> and use words with actual meaning:
                <i>element</i>,<i>document</i>,<i>index</i>. And in case you are already paying
                extreme attention to variable names, even the most literate software engineer
                introduce typos when they code.
            </p>
            <p>
                To help us being consistent in the practice of typing meaningful names, we have the
                amazing <b>Code Spell Checker</b> tool. It will point out invalid words and typos,
                and it also recognizes the camel case convention so it will understand
                <i>aNameLikeThis</i>. In addition, it allows defining a white list of words that
                will not be considered in <b>.vscode/settings.json</b>, for specific
                software/project words that cannot be found in an english dictionary.
            </p>
            <h5>Steps</h5>
            <ul>
                <li>
                    Install the VSCode Code Spell Check extension{' '}
                    <b>(streetsidesoftware.code-spell-checker)</b> and add it to{' '}
                    <b>.vscode/extensions.json</b>
                    <ReactGist id="c20cfb8668421c3aedc7722dc5fbdb4e" />
                </li>
            </ul>
            <h3>Conclusions</h3>
            <p>
                That's it for now! The concepts are not rocket science, but they greatly help me
                feeling comfortable when working on a project. Bring them in and forget about
                styling code, writing typos, and searching in the docs for the available members in
                objects. Discover how to make your development experience even better in the second
                chapter of this series 🍾🚀 (coming soon to the best theatres). See you in the next
                post!
            </p>
        </React.Fragment>
    )
};
