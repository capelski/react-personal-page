import React from 'react';
import { NavLink, RouteChildrenProps } from 'react-router-dom';

export const Error: React.FC<RouteChildrenProps | {}> = () => (
    <div className="error-page">
        <h1 className="error-title">Something went wrong</h1>
        <p className="error-body">
            <img
                className="error-image"
                src="/images/shrug.png?$modena=vue-personal-page"
                alt="Shrug meme"
            />
            Try going back to <NavLink to="/">home</NavLink>
        </p>
    </div>
);
