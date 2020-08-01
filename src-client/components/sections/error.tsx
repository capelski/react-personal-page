import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink, RouteChildrenProps } from 'react-router-dom';
import { homeRoute } from '../routes';
import { SectionContainer } from '../section-container';

export const Error: React.FC<RouteChildrenProps | {}> = () => (
    <SectionContainer
        links={
            <NavLink to={homeRoute.path} className="link">
                ⬅️ Home
            </NavLink>
        }
        sectionName="error"
    >
        <Helmet>
            <title>Carles Capellas</title>
            <meta name="description" content="Something went wrong... You are not supposed to be here" />
        </Helmet>
        <h1 className="error-title">Something went wrong</h1>
        <img
            className="error-image"
            src="/images/shrug.png?$modena=react-personal-page"
            alt="Shrug meme"
        />
    </SectionContainer>
);
