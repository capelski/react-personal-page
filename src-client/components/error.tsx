import React from 'react';
import { NavLink, RouteChildrenProps } from 'react-router-dom';
import { homeRoute } from './routes';
import { SectionContainer } from './section-container';

export const Error: React.FC<RouteChildrenProps | {}> = () => (
    <SectionContainer
        links={
            <NavLink to={homeRoute.path} className="link">
                ⬅️ Home
            </NavLink>
        }
        sectionName="error"
    >
        <h1 className="error-title">Something went wrong</h1>
        <img
            className="error-image"
            src="/images/shrug.png?$modena=react-personal-page"
            alt="Shrug meme"
        />
    </SectionContainer>
);
