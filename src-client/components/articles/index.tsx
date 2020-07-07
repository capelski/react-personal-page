import { agilityRocks } from './agility-rocks';
import { existentialInjustice } from './existential-injustice';
import { subscribersList } from './subscribers-list';

const articlesCollection = [agilityRocks, existentialInjustice, subscribersList];

articlesCollection.forEach((article, index) => {
    article.following =
        index < articlesCollection.length - 1
            ? articlesCollection[index + 1].metadata.id
            : undefined;
    article.previous = index > 0 ? articlesCollection[index - 1].metadata.id : undefined;
});

export const articles = articlesCollection.reverse();
