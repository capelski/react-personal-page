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

export const blogRoute: ComponentRoute<BlogAdditionalProps> = {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    pattern: /^\/blog\/?$/
};

export const articleRoute: ComponentRoute<ArticleLoaderAdditionalProps> = {
    path: '/blog/:articleId',
    name: 'Article',
    component: ArticleLoader,
    pattern: /^\/blog\/([^\/]+)\/?$/
};

export const routes: ComponentRoute[] = [
    { path: '/', name: 'Home', component: Home, pattern: /^\/$/ },
    articleRoute,
    blogRoute,
    { path: '/error', name: 'Error', component: Error, pattern: /^\/error$/ },
    { path: '/portfolio', name: 'Portfolio', component: Portfolio, pattern: /^\/portfolio\/?$/ }
];

export const supportedRoutes = routes.map((route) => route.pattern);
