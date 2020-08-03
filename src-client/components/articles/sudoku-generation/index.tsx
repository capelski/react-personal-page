import { ArticleCategory } from '../article-category';
import { Article } from '../article-data';
import { ArticleId } from '../article-id';
import { Language } from '../language';
import { catalan } from './catalan';
import { english } from './english';

export const sudokuGeneration: Article = {
    content: (language: Language) => (language === Language.ca ? catalan : english),
    metadata: {
        category: ArticleCategory.tech,
        date: '2020-04-29',
        duration: 6,
        id: ArticleId.sudokuGeneration,
        languages: [Language.ca, Language.en],
        shareImage: 'sky-tv-hillside.jpg'
    }
};
