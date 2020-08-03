import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink, RouteChildrenProps } from 'react-router-dom';
import { Project } from '../project';
import { homeRoute } from '../routes';
import { SectionContainer } from '../section-container';

export const Portfolio: React.FC<RouteChildrenProps> = () => (
    <SectionContainer
        links={
            <NavLink to={homeRoute.path} className="link">
                ⬅️ Home
            </NavLink>
        }
        sectionName="portfolio"
    >
        <Helmet>
            <title>Portfolio | Carles Capellas</title>
            <meta
                name="description"
                content="The personal web projects I have developed on my free time"
            />
        </Helmet>
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="projects">
            {/* TODO Include vue-ssr youtube video */}
            {/* TODO Include one skills matrix client */}
            {/* TODO Figure out what to do with the commented descriptions */}

            <Project
                date="2018"
                image="webjack.png"
                repository="webjack"
                title="webjack"
                url="/webjack"
            >
                <p>
                    Cashless online multiplayer black jack game. Play online with strangers,
                    practice offline against the dealer or learn the black jack basic strategy.
                </p>
                {/* <p>
                        After having developed a terrible Visual Basic desktop application in 2011
                        and failed to finish a Java command line utility in 2014, I decided to built
                        it as a web application and close the black jack chapter in my life.
                    </p> */}
            </Project>

            <Project
                date="2020"
                image="jokify.png"
                repository="jokify"
                title="jokify"
                url="/jokify"
            >
                <p>
                    Instead of deleting all those twitter jokes I get over the phone, I decided I
                    had to make them available to the world. Here you will find them (in Spanish).
                </p>
                {/* <p>
                        This web application was also as an excuse to practice with CSS3 animation
                        capabilities. In the first version, 2017, to animate the emojis explosion.
                        After meeting <b>Iker Fernandez</b> in 2020, the rest of the redesigned UX.
                    </p> */}
            </Project>

            <Project
                date="2012"
                image="desdecasa.png"
                repository="desdecasa"
                title="desdecasa"
                url="/desdecasa"
            >
                <p>
                    First attempt to build an online business! Along with <b>Eudald Bover</b> we
                    developed this restaurant discounts (up to 50%!) web app and managed to sell 150
                    membership cards to the website users.
                </p>
                {/* <p>
                        We didn't get any summer job back in 2011 so we started to shape this
                        platform that we would launch the following year, after having signed up
                        enough restaurants. Originally built in PHP, I migrated it to Node.js after
                        we closed the website.
                    </p> */}
            </Project>

            <Project
                date="2020"
                image="sudoku-generator.png"
                repository="sudoku-generator"
                title="sudoku generator"
                url="/sudoku-generator"
            >
                <p>
                    Web application that generates random sudoku puzzles and offers hints on how to
                    solve them. It can also be used to solve existing puzzles (e.g. one from a
                    newspaper), but it is not bulletproof; it might fail to find the solution.
                </p>
                {/* <p>
                        I decided to figure out by myself how to generate sudoku puzzles after
                        having been talking about it with my mom. The resulting application persists
                        the puzzle, so you can refresh page or close the browse without losing the
                        progress.
                    </p> */}
            </Project>

            <Project
                date="2019"
                image="skills-matrix-graphql.png"
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
                {/* <p>
                        The result is a simple Api with the typical features used in any modern Api
                        (filtering, pagination, referenced entities, ordering, etc.), accessible
                        through a GraphiQL interface.
                    </p> */}
            </Project>

            <Project
                date="2017"
                image="fractal-generator.png"
                repository="fractal-generator"
                title="fractal generator"
                url="/fractal-generator"
            >
                <p>
                    Web app that generates fractal pictures by replicating the pattern in a grid.
                    You can try to configure it or just pick a color and hit the reset button until
                    you get something you like!
                </p>
                {/* <p>
                        When I was in college I was asked to write a C++ algorithm to generate
                        fractal patterns. I spent far too many hours coding on it to settle with the
                        miserable command line output; some years later I turned the same algorithm
                        into a visually pleasant web app.
                    </p> */}
            </Project>

            <Project
                date="2018"
                image="michael-page.png"
                repository="michael"
                title="michael.page"
                url="/michael"
            >
                <p>
                    Tribute page to all the Michaels of the world. Who doesn't have a Michael in
                    their life? Joking aside this web was the cover website of a plan to earn a
                    little fortune by reselling a premium domain to <b>Michael Page</b> company.
                </p>
                {/* <p>
                        I was working with a bunch of other tech freaks when the <b>.page</b> top
                        level domains were introduced. We came up with the idea to buy{' '}
                        <b>https://michael.page</b> and resell it to the british recruitment
                        business. We invested 700€ that, of course, we never got back.
                    </p> */}
            </Project>

            <Project
                date="2016"
                image="carniques-ausa.png"
                repository="carniques-ausa"
                title="càrniques ausà"
                url="/carniques-ausa"
            >
                <p>
                    "It must have an interactive pig!". That was the sentence that convinced me to
                    build the <b>Càrniques Ausà</b> pork company website.
                </p>
                {/* <p>
                        Pretty straightforward application providing company information. Built in
                        angular.js, it only presented two challenges: supporting translations
                        without page reloads and filtering the product catalog by the selected part
                        of the SVG pig image.
                    </p> */}
            </Project>

            <Project
                date="2014"
                image="poliester-pelegrina.png"
                repository="poliester-pelegrina"
                title="poliester pelegrina"
                url="/poliester-pelegrina"
            >
                <p>
                    This was the <b>Poliester Pelegrina</b> polyester company official website. My
                    brother was dating the owner's daughter back in the day so I was the most
                    accessible developer. In the right place at the right time!
                </p>
                {/* <p>
                        I hadn't heard about <b>single page applications</b> when I developed this
                        web app, but it turned out that managing the views with simple jQuery
                        animations was the most effective approach. Originally built in PHP and
                        migrated to Node.js later on.
                    </p> */}
            </Project>

            <Project
                date="2013"
                image="dovic.png"
                repository="do-vic"
                title="d.o. vic"
                url="/do-vic"
            >
                <p>
                    This was the <b>D.O. Vic</b> restaurant official website for two years, until
                    they went out of business in 2015. It provided the restaurant menus, contact
                    information, pictures of the establishment and allowed making reservations.
                </p>
                {/* <p>
                        We met the owner of this restaurant while building the <b>Desdecasa</b>{' '}
                        restaurant platform. Later on he had issues with his previous website so he
                        contacted us and ordered a new one. Money bears interests!
                    </p> */}
            </Project>
        </div>

        <h3 className="personal-page-evolution">Personal page evolution</h3>

        <div className="projects">
            <Project
                date="2019"
                image="vue-personal-page.png"
                repository="vue-personal-page"
                title="vue"
                url="/vue-personal-page"
            />

            <Project
                date="2015"
                image="angularjs-personal-page.png"
                repository="angularjs-personal-page"
                title="angular.js"
                url="/angularjs-personal-page"
            />

            <Project
                date="2015"
                image="php-personal-page.png"
                repository="php-personal-page"
                title="php"
                url="/php-personal-page"
            />
        </div>
    </SectionContainer>
);
