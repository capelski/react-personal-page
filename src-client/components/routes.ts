import { RouteChildrenProps } from 'react-router-dom';
import { ArticleLoader, ArticleLoaderProps } from './article-loader';
import { Blog, BlogProps } from './blog';
import { Error } from './error';
import { Home } from './home';
import { Portfolio } from './portfolio';

export interface ComponentRoute<TProps extends RouteChildrenProps = RouteChildrenProps> {
    additionalProps?: Partial<TProps>;
    component: React.FC<TProps>;
    name: string;
    path: string;
    pattern: RegExp;
}

export const blogRoute: ComponentRoute<BlogProps> = {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    pattern: /^\/blog\/?$/
};

export const articleRoute: ComponentRoute<ArticleLoaderProps> = {
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
