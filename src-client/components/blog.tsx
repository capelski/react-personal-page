import React from 'react';
import { NavLink, RouteChildrenProps } from 'react-router-dom';
import { articles } from './articles';
import { AllLanguages, Language } from './articles/language';
import { Article } from './article';
import { SectionContainer } from './section-container';

export interface BlogProps extends RouteChildrenProps {
    selectedLanguage: Language;
    setSelectedLanguage: (language: Language) => void;
}

export const Blog: React.FC<BlogProps> = (props) => {
    const activeArticles = articles.filter(
        (article) => article.metadata.languages.indexOf(props.selectedLanguage) > -1
    );

    return (
        <SectionContainer
            links={
                <NavLink to="/" className="link">
                    Home ➡️
                </NavLink>
            }
            sectionName="blog"
        >
            <React.Fragment>
                <div className="blog-header">
                    <h1 className="blog-title">Blog</h1>
                    <div className="blog-languages">
                        {AllLanguages.map((language) => (
                            <span
                                key={language}
                                className={`language${
                                    props.selectedLanguage === language ? ' selected-language' : ''
                                }`}
                                onClick={() => props.setSelectedLanguage(language)}
                            >
                                {props.selectedLanguage === language ? '🌎 ' : null}
                                {language}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="articles">
                    {activeArticles.map((article) => (
                        <Article
                            key={article.metadata.id}
                            {...article}
                            preview={true}
                            selectedLanguage={props.selectedLanguage}
                        />
                    ))}
                </div>
            </React.Fragment>
        </SectionContainer>
    );
};
