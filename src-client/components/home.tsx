import React from 'react';
import { NavLink, RouteChildrenProps } from 'react-router-dom';
import { Language } from './articles/language';
import { SectionContainer } from './section-container';

export interface HomeAdditionalProps {
    selectedLanguage: Language;
}

export type HomeProps = RouteChildrenProps & HomeAdditionalProps;

export const Home: React.FC<HomeProps> = (props) => (
    <SectionContainer
        links={
            <React.Fragment>
                <NavLink to={`/blog/${props.selectedLanguage}`} className="link">
                    ⬅️ Blog
                </NavLink>
                <NavLink to="/portfolio" className="link">
                    Portfolio ➡️
                </NavLink>
            </React.Fragment>
        }
        sectionName="home"
    >
        <React.Fragment>
            <div className="home-header">
                <h1>
                    Hi, this is Carles Capellas. I develop web apps and write a blog. If you must
                    reach me, mail is a good way to start: <i>capellas.carles@gmail.com</i>
                </h1>
            </div>
            <div className="home-image">
                <img src="/images/home-image.jpg?$modena=react-personal-page" />
            </div>
        </React.Fragment>
    </SectionContainer>
);
