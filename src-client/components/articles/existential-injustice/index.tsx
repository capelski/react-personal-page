import { Article } from '../article-data';
import { ArticleId } from '../article-id';
import { Language } from '../language';
import { catalan } from './catalan';
import { english } from './english';

export const existentialInjustice: Article = {
    content: (language: Language) => (language === Language.ca ? catalan : english),
    metadata: {
        date: '2019-08-28',
        duration: 5,
        id: ArticleId.existentialInjustice,
        languages: [Language.ca, Language.en]
    }
};
