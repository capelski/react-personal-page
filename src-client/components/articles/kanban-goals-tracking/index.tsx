import { Article } from '../article-data';
import { ArticleId } from '../article-id';
import { Language } from '../language';
import { english } from './english';

export const kanbanGoalsTracking: Article = {
    content: () => english,
    metadata: {
        date: '2019-10-21',
        duration: 3,
        id: ArticleId.kanbanGoalsTracking,
        languages: [Language.en]
    }
};
