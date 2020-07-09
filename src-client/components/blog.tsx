import React from 'react';
import { NavLink, RouteChildrenProps } from 'react-router-dom';
import { Article as IArticle } from './articles/article-data';
import { ArticleId } from './articles/article-id';
import { AllLanguages, Language } from './articles/language';
import { Article } from './article';
import { SectionContainer } from './section-container';

export interface BlogAdditionalProps {
    activeArticles: IArticle[];
    selectArticle: (articleId: ArticleId) => void;
    selectedLanguage: Language;
    selectLanguage: (language: Language) => void;
}

export type BlogProps = RouteChildrenProps & BlogAdditionalProps;

export const Blog: React.FC<BlogProps> = (props) => {
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
                                onClick={() => props.selectLanguage(language)}
                            >
                                {props.selectedLanguage === language ? '🌎 ' : null}
                                {language}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="articles">
                    {props.activeArticles.map((article) => (
                        <Article
                            key={article.metadata.id}
                            {...article}
                            preview={true}
                            selectArticle={props.selectArticle}
                            selectedLanguage={props.selectedLanguage}
                        />
                    ))}
                </div>
            </React.Fragment>
        </SectionContainer>
    );
};
