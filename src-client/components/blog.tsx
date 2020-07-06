import React, { useState } from 'react';
import { NavLink, RouteChildrenProps } from 'react-router-dom';
import { articles } from './articles';
import { Language } from './articles/language';
import { Article } from './article';

const allLanguages: string[] = [];
for (let language in Language) {
    allLanguages.push(language);
}

export const Blog: React.FC<RouteChildrenProps> = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(Language.en);
    const activeArticles = articles.filter(
        (article) => article.metadata.languages.indexOf(selectedLanguage) > -1
    );

    return (
        <div className="blog">
            <div className="section-content blog-content">
                <div className="blog-header">
                    <h1 className="blog-title">Blog</h1>
                    <div className="blog-languages">
                        {allLanguages.map((language) => (
                            <span
                                key={language}
                                className={`language${
                                    selectedLanguage === language ? ' selected-language' : ''
                                }`}
                                onClick={() => setSelectedLanguage(language as Language)}
                            >
                                {selectedLanguage === language ? '🌎 ' : null}
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
                            selectedLanguage={selectedLanguage}
                        />
                    ))}
                </div>
            </div>
            <div className="section-links blog-links">
                <NavLink to="/" className="link">
                    ➡️ Back
                </NavLink>
            </div>
        </div>
    );
};
