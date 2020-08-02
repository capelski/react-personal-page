import { ArticleCategory } from '../article-category';
import { Article } from '../article-data';
import { ArticleId } from '../article-id';
import { Language } from '../language';
import { english } from './english';

export const webBadDecisions: Article = {
    content: () => english,
    metadata: {
        category: ArticleCategory.tech,
        date: '2020-07-29',
        duration: 3,
        id: ArticleId.webBadDecisions,
        languages: [Language.en],
        shareImage: 'page-animations-vue.gif'
    }
};
