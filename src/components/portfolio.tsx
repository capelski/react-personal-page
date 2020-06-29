import React from 'react';
import { NavLink } from 'react-router-dom';

export const Portfolio = () => (
    <div className="portfolio">
        <div className="section-content portfolio-content">
            <h1>Portfolio</h1>
            <div className="project">Project</div>
        </div>
        <div className="section-links portfolio-links">
            <NavLink to="/" className="link">
                ⬅️ Back
            </NavLink>
        </div>
    </div>
);
