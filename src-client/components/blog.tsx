import React from 'react';
import { NavLink } from 'react-router-dom';

export const Blog: React.FC = () => (
    <div className="blog">
        <div className="section-content blog-content">
            <h1 className="blog-title">Blog</h1>
            <div className="blog-entry">Blog entry</div>
        </div>
        <div className="section-links blog-links">
            <NavLink to="/" className="link">
                ➡️ Back
            </NavLink>
        </div>
    </div>
);
