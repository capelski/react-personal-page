import { ArticleCategory } from '../article-category';
import { Article } from '../article-data';
import { ArticleId } from '../article-id';
import { Language } from '../language';
import { english } from './english';

export const trecember: Article = {
    content: () => english,
    metadata: {
        category: ArticleCategory.offTopic,
        date: '2019-12-01',
        duration: 4,
        id: ArticleId.trecember,
        languages: [Language.en]
    }
};
