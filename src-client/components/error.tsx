import React from 'react';
import { NavLink, RouteChildrenProps } from 'react-router-dom';
import { SectionContainer } from './section-container';

export const Error: React.FC<RouteChildrenProps | {}> = () => (
    <SectionContainer
        contentClasses="error-content"
        links={
            <NavLink to="/" className="link">
                ⬅️ Home
            </NavLink>
        }
        linksClasses="error-links"
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
