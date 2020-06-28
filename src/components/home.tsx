import React from 'react';
import homeImage from './home-image.jpg';

export const Home = () => (
    <React.Fragment>
        <div className="home">
            <div className="home-content">
                <div className="home-header">
                    <h1>
                        Hi there! This is Carles Capellas. I enjoy developing web apps and writing
                        blog posts so in this page you can and explore my web app portfolio and read
                        my blog
                    </h1>
                </div>
                <div className="home-image">
                    <img src={homeImage} />
                </div>
            </div>
            <div className="home-links">
                <div className="home-link">⬅️ Blog</div>
                <div className="home-link">Portfolio ➡️</div>
            </div>
        </div>
    </React.Fragment>
);
