import { Article } from '../article-data';
import { ArticleId } from '../article-id';
import { Language } from '../language';
import { english } from './english';

export const persuasionInPictures: Article = {
    content: () => english,
    metadata: {
        date: '2020-06-14',
        duration: 4,
        id: ArticleId.persuasionInPictures,
        languages: [Language.en]
    }
};
