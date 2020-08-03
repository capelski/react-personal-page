import { ArticleCategory } from '../article-category';
import { Article } from '../article-data';
import { ArticleId } from '../article-id';
import { Language } from '../language';
import { english } from './english';

export const fourCoinChallenge: Article = {
    content: () => english,
    metadata: {
        category: ArticleCategory.offTopic,
        date: '2019-07-22',
        duration: 2,
        id: ArticleId.fourCoinChallenge,
        languages: [Language.en],
        shareImage: 'initial-position.jpg'
    }
};
