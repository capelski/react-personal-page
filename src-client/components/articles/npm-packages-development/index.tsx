import { ArticleCategory } from '../article-category';
import { Article } from '../article-data';
import { ArticleId } from '../article-id';
import { Language } from '../language';
import { english } from './english';

export const npmPackagesDevelopment: Article = {
    content: () => english,
    metadata: {
        category: ArticleCategory.tech,
        date: '2020-11-04',
        duration: 5,
        id: ArticleId.npmPackagesDevelopment,
        languages: [Language.en],
        shareImage: 'yes.gif'
    }
};
