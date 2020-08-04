import { ArticleCategory } from '../article-category';
import { Article } from '../article-data';
import { ArticleId } from '../article-id';
import { Language } from '../language';
import { english } from './english';

export const meaningOfLife: Article = {
    content: () => english,
    metadata: {
        category: ArticleCategory.offTopic,
        date: '2019-07-08',
        duration: 4,
        id: ArticleId.meaningOfLife,
        languages: [Language.en]
    }
};
