import React from 'react';
import { NavLink, RouteChildrenProps } from 'react-router-dom';

export const Home: React.FC<RouteChildrenProps> = () => (
    <React.Fragment>
        <div className="home">
            <div className="section-content home-content">
                <div className="home-header">
                    <h1>
                        Hi, this is Carles Capellas. I develop web apps and write a blog. If you
                        must reach me, mail is a good way to start: <i>capellas.carles@gmail.com</i>
                    </h1>
                </div>
                <div className="home-image">
                    <img src="/images/home-image.jpg?$modena=react-personal-page" />
                </div>
            </div>
            <div className="section-links home-links">
                <NavLink to="/blog" className="link">
                    ⬅️ Blog
                </NavLink>
                <NavLink to="/portfolio" className="link">
                    Portfolio ➡️
                </NavLink>
            </div>
        </div>
    </React.Fragment>
);
