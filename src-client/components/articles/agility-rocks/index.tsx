import { ArticleCategory } from '../article-category';
import { Article } from '../article-data';
import { ArticleId } from '../article-id';
import { Language } from '../language';
import { english } from './english';

export const agilityRocks: Article = {
    content: () => english,
    metadata: {
        category: ArticleCategory.offTopic,
        date: '2019-06-17',
        duration: 2,
        id: ArticleId.agilityRocks,
        languages: [Language.en],
        shareImage: 'agile-exercise.png'
    }
};
