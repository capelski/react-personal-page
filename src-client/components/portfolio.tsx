import React from 'react';
import { NavLink, RouteChildrenProps } from 'react-router-dom';
import { Project } from './project';
import { SectionContainer } from './section-container';

export const Portfolio: React.FC<RouteChildrenProps> = () => (
    <SectionContainer
        contentClasses="portfolio-content"
        links={
            <NavLink to="/" className="link">
                ⬅️ Home
            </NavLink>
        }
        sectionName="portfolio"
    >
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="projects">
            {/* TODO Include vue-ssr youtube video */}
            {/* TODO Include one skills matrix client */}

            <Project date="2018" repository="webjack" title="webjack" url="/webjack">
                <p>
                    Cashless online multiplayer black jack game. Play online with strangers,
                    practice offline against the dealer or learn the black jack basic strategy.
                </p>
                <img src="/images/portfolio/webjack.png?$modena=react-personal-page" />
                {/* <p>
                        After having developed a terrible Visual Basic desktop application in 2011
                        and failed to finish a Java command line utility in 2014, I decided to built
                        it as a web application and close the black jack chapter in my life.
                    </p> */}
            </Project>

            <Project date="2020" repository="jokify" title="jokify" url="/jokify">
                <p>
                    Instead of deleting all those twitter jokes I get over the phone, I decided I
                    had to make them available to the world. Here you will find them (in Spanish).
                </p>
                <img src="/images/portfolio/jokify.png?$modena=react-personal-page" />
                {/* <p>
                        This web application was also as an excuse to practice with CSS3 animation
                        capabilities. In the first version, 2017, to animate the emojis explosion.
                        After meeting <b>Iker Fernandez</b> in 2020, the rest of the redesigned UX.
                    </p> */}
            </Project>

            <Project date="2012" repository="desdecasa" title="desdecasa" url="/desdecasa">
                <p>
                    First attempt to build an online business! Along with <b>Eudald Bover</b> we
                    developed this restaurant discounts (up to 50%!) web app and managed to sell 150
                    membership cards to the website users.
                </p>
                <img src="/images/portfolio/desdecasa.png?$modena=react-personal-page" />
                {/* <p>
                        We didn't get any summer job back in 2011 so we started to shape this
                        platform that we would launch the following year, after having signed up
                        enough restaurants. Originally built in PHP, I migrated it to Node.js after
                        we closed the website.
                    </p> */}
            </Project>

            <Project
                date="2020"
                repository="sudoku-generator"
                title="sudoku generator"
                url="/sudoku-generator"
            >
                <p>
                    Web application that generates random sudoku puzzles and offers hints on how to
                    solve them. It can also be used to solve existing puzzles (e.g. one from a
                    newspaper), but it is not bulletproof; it might fail to find the solution.
                </p>
                <img src="/images/portfolio/sudoku-generator.png?$modena=react-personal-page" />
                {/* TODO Include link to the blog article */}
                {/* <p>
                        I decided to figure out by myself how to generate sudoku puzzles after
                        having been talking about it with my mom. The resulting application persists
                        the puzzle, so you can refresh page or close the browse without losing the
                        progress.
                    </p> */}
            </Project>

            <Project
                date="2019"
                repository="skills-matrix-api-graphql"
                title="skills matrix"
                url="/skills-matrix-api-graphql"
            >
                <p>
                    I was developing a front end application at work and we interacted with a{' '}
                    <b>GraphQL Api</b>. I loved the standard, but I felt I wasn't learning enough
                    about the server side so I decided to built my own Api and get a better
                    understanding on how it works.
                </p>
                <img src="/images/portfolio/skills-matrix-graphql.png?$modena=react-personal-page" />
                {/* <p>
                        The result is a simple Api with the typical features used in any modern Api
                        (filtering, pagination, referenced entities, ordering, etc.), accessible
                        through a GraphiQL interface.
                    </p> */}
            </Project>

            <Project
                date="2017"
                repository="fractal-generator"
                title="fractal generator"
                url="/fractal-generator"
            >
                <p>
                    Web app that generates fractal pictures by replicating the pattern in a grid.
                    You can try to configure it or just pick a color and hit the reset button until
                    you get something you like!
                </p>
                <img src="/images/portfolio/fractal-generator.png?$modena=react-personal-page" />
                {/* <p>
                        When I was in college I was asked to write a C++ algorithm to generate
                        fractal patterns. I spent far too many hours coding on it to settle with the
                        miserable command line output; some years later I turned the same algorithm
                        into a visually pleasant web app.
                    </p> */}
            </Project>

            <Project date="2018" repository="michael" title="michael.page" url="/michael">
                <p>
                    Tribute page to all the Michaels of the world. Who doesn't have a Michael in
                    their life? Joking aside this web was the cover website of a plan to earn a
                    little fortune by reselling a premium domain to <b>Michael Page</b> company.
                </p>
                <img src="/images/portfolio/michael-page.png?$modena=react-personal-page" />
                {/* <p>
                        I was working with a bunch of other tech freaks when the <b>.page</b> top
                        level domains were introduced. We came up with the idea to buy{' '}
                        <b>https://michael.page</b> and resell it to the british recruitment
                        business. We invested 700€ that, of course, we never got back.
                    </p> */}
            </Project>

            <Project
                date="2016"
                repository="carniques-ausa"
                title="càrniques ausà"
                url="/carniques-ausa"
            >
                <p>
                    "It must have an interactive pig!". That was the sentence that convinced me to
                    build the <b>Càrniques Ausà</b> pork company website.
                </p>
                <img src="/images/portfolio/carniques-ausa.png?$modena=react-personal-page" />
                {/* <p>
                        Pretty straightforward application providing company information. Built in
                        angular.js, it only presented two challenges: supporting translations
                        without page reloads and filtering the product catalog by the selected part
                        of the SVG pig image.
                    </p> */}
            </Project>

            <Project
                date="2014"
                repository="poliester-pelegrina"
                title="poliester pelegrina"
                url="/poliester-pelegrina"
            >
                <p>
                    This was the <b>Poliester Pelegrina</b> polyester company official website. My
                    brother was dating the owner's daughter back in the day so I was the most
                    accessible developer. In the right place at the right time!
                </p>
                <img src="/images/portfolio/poliester-pelegrina.png?$modena=react-personal-page" />
                {/* <p>
                        I hadn't heard about <b>single page applications</b> when I developed this
                        web app, but it turned out that managing the views with simple jQuery
                        animations was the most effective approach. Originally built in PHP and
                        migrated to Node.js later on.
                    </p> */}
            </Project>

            <Project date="2013" repository="do-vic" title="d.o. vic" url="/do-vic">
                <p>
                    This was the <b>D.O. Vic</b> restaurant official website for two years, until
                    they went out of business in 2015. It provided the restaurant menus, contact
                    information, pictures of the establishment and allowed making reservations.
                </p>
                <img src="/images/portfolio/dovic.png?$modena=react-personal-page" />
                {/* <p>
                        We met the owner of this restaurant while building the <b>Desdecasa</b>{' '}
                        restaurant platform. Later on he had issues with his previous website so he
                        contacted us and ordered a new one. Money bears interests!
                    </p> */}
            </Project>
        </div>

        <h3>Personal page evolution</h3>

        <div className="projects">
            <Project
                date="2019"
                repository="vue-personal-page"
                title="vue"
                url="/vue-personal-page"
            >
                <img src="/images/portfolio/vue-personal-page.png?$modena=react-personal-page" />
            </Project>

            <Project
                date="2015"
                repository="angularjs-personal-page"
                title="angular.js"
                url="/angularjs-personal-page"
            >
                <img src="/images/portfolio/angularjs-personal-page.png?$modena=react-personal-page" />
            </Project>

            <Project
                date="2015"
                repository="php-personal-page"
                title="php"
                url="/php-personal-page"
            >
                <img src="/images/portfolio/php-personal-page.png?$modena=react-personal-page" />
            </Project>
        </div>
    </SectionContainer>
);
