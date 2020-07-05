import React from 'react';
import { NavLink } from 'react-router-dom';
import { articles } from './articles';
import { Article } from './article';

export const Blog: React.FC = () => (
    <div className="blog">
        <div className="section-content blog-content">
            <h1 className="blog-title">Blog</h1>
            <div className="articles">
                {articles.map((article) => (
                    <Article
                        {...article}
                        preview={true}
                        // TODO Sort out how to select the language
                        selectedLanguage={article.metadata.languages[0]}
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
