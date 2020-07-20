import { RouteChildrenProps } from 'react-router-dom';
import { ArticleLoader, ArticleLoaderAdditionalProps } from './article-loader';
import { Blog, BlogAdditionalProps } from './blog';
import { Error } from './error';
import { Home } from './home';
import { Portfolio } from './portfolio';

export interface ComponentRoute<TAdditional = {}> {
    additionalProps?: TAdditional;
    component: React.FC<RouteChildrenProps & TAdditional>;
    name: string;
    path: string;
    pattern: RegExp;
}

export const articleRoute: ComponentRoute<ArticleLoaderAdditionalProps> = {
    path: '/article/:articleId',
    name: 'article',
    component: ArticleLoader,
    pattern: /^\/article\/[^\/]+\/?$/
};

export const blogRoute: ComponentRoute<BlogAdditionalProps> = {
    path: '/blog',
    name: 'blog',
    component: Blog,
    pattern: /^\/blog\/?$/
};

export const routes: ComponentRoute[] = [
    { path: '/', name: 'home', component: Home, pattern: /^\/$/ },
    articleRoute,
    blogRoute,
    { path: '/error', name: 'error', component: Error, pattern: /^\/error$/ },
    { path: '/portfolio', name: 'portfolio', component: Portfolio, pattern: /^\/portfolio\/?$/ }
];

export const supportedRoutes = routes.map((route) => route.pattern);
