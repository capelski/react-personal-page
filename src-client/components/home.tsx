import React from 'react';
import { NavLink, RouteChildrenProps } from 'react-router-dom';
import { blogRoute, portfolioRoute } from './routes';
import { SectionContainer } from './section-container';

export const Home: React.FC<RouteChildrenProps> = () => (
    <SectionContainer
        links={
            <React.Fragment>
                <NavLink to={blogRoute.path} className="link">
                    ⬅️ Blog
                </NavLink>
                <NavLink to={portfolioRoute.path} className="link">
                    Portfolio ➡️
                </NavLink>
            </React.Fragment>
        }
        sectionName="home"
    >
        <React.Fragment>
            <div className="home-image">
                <img src="/images/home-image.jpg?$modena=react-personal-page" />
            </div>
            <div className="home-header">
                <h1>
                    Hi, this is Carles Capellas. I develop web apps and write a blog. If you must
                    reach me, <b>capellas.carles@gmail.com</b> is a good way to start
                </h1>
            </div>
        </React.Fragment>
    </SectionContainer>
);
