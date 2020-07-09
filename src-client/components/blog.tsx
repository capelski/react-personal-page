import React, { useEffect, useState } from 'react';
import { NavLink, RouteChildrenProps } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Article as IArticle } from './articles/article-data';
import { ArticleId } from './articles/article-id';
import { AllLanguages, Language } from './articles/language';
import { Article } from './article';
import { SectionContainer } from './section-container';
import { transitionsDuration } from './variables';

export interface BlogAdditionalProps {
    activeArticles: IArticle[];
    selectArticle: (articleId: ArticleId) => void;
    selectedLanguage: Language;
    selectLanguage: (language: Language) => void;
}

export type BlogProps = RouteChildrenProps & BlogAdditionalProps;

export const Blog: React.FC<BlogProps> = (props) => {
    // We need to keep an owned copy of props.selectedLanguage value to control css exit transitions
    const [currentLanguage, setCurrentLanguage] = useState(props.selectedLanguage);

    useEffect(() => {
        setCurrentLanguage(props.selectedLanguage);
    }, [props.selectedLanguage]);

    const selectLanguage = (language: Language) => () => {
        setCurrentLanguage(language);

        // Setting a timeout so the articles list exit animation completes
        setTimeout(() => {
            props.selectLanguage(language);
        }, transitionsDuration);
    };

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
                                onClick={selectLanguage(language)}
                            >
                                {props.selectedLanguage === language ? '🌎 ' : null}
                                {language}
                            </span>
                        ))}
                    </div>
                </div>
                {AllLanguages.map((language) => (
                    <CSSTransition
                        in={language === currentLanguage}
                        timeout={transitionsDuration}
                        classNames="articles"
                        unmountOnExit={true}
                    >
                        <div className="articles">
                            {props.activeArticles
                                .filter(
                                    (article) => article.metadata.languages.indexOf(language) > -1
                                )
                                .map((article) => (
                                    <Article
                                        key={article.metadata.id + language}
                                        {...article}
                                        preview={true}
                                        selectArticle={props.selectArticle}
                                        selectedLanguage={language}
                                    />
                                ))}
                        </div>
                    </CSSTransition>
                ))}
            </React.Fragment>
        </SectionContainer>
    );
};
