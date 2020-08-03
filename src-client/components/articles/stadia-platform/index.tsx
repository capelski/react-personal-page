import { ArticleCategory } from '../article-category';
import { Article } from '../article-data';
import { ArticleId } from '../article-id';
import { Language } from '../language';
import { english } from './english';

export const stadiaPlatform: Article = {
    content: () => english,
    metadata: {
        category: ArticleCategory.offTopic,
        date: '2020-06-20',
        duration: 3,
        id: ArticleId.stadiaPlatform,
        languages: [Language.en],
        shareImage: 'destiny-graphics-1.jpg'
    }
};
