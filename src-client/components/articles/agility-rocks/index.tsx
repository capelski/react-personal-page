import { Article } from '../article-data';
import { ArticleId } from '../article-id';
import { Language } from '../language';
import { english } from './english';

export const agilityRocks: Article = {
    content: () => english,
    metadata: {
        date: '2019-06-17',
        duration: 2,
        id: ArticleId.agilityRocks,
        languages: [Language.en]
    }
};
