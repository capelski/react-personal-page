import React from 'react';
import { ArticleContent } from '../article-data';
import { ArticleId } from '../article-id';
import { ArticleImage } from '../article-image';

export const english: ArticleContent = {
    title: 'The meaning of life',
    description:
        'Reflection on how the meaning of life is not that relevant and what could we focus on instead',
    introduction: (
        <p>
            From time to time I used to wonder about the meaning of life. Or more exactly which is
            the goal of life. Why are we here for? If you have wondered about it too without getting
            to any satisfactory conclusion, I'm sorry to tell you that I don't have an specific
            answer. However, as the time goes by, I am less worried about finding it.
        </p>
    ),
    body: (
        <React.Fragment>
            <ArticleImage
                alt="You have lost your damn mind gif"
                articleId={ArticleId.meaningOfLife}
                filename="crazy.gif"
            />
            <p>
                In my opinion the fact that we don't know which is the objective of life (or if
                there is one in first place) makes life beautiful. It allows the life of each person
                in the planet to be unique and different. Which sense would make to plant peppers on
                the backyard if the life is meant to, let's say, eat as much chocolate as possible?
                But still, there is beauty in planting the peppers and we can enjoy and learn by
                doing it. In the same line why would we play football, listen to music, cut our
                hair, develop software or dance salsa if that doesn't help us getting more
                chocolate?
            </p>
            <p>
                If life had a goal, it would be simpler and we wouldn't feel so lost sometimes, but
                it would have a drawback too because we wouldn't explore as many possibilities as we
                do now (e.g. to quote an extravagant experiment, we sent a Tesla across the
                universe, can you believe it!?).
            </p>
            <ArticleImage
                alt="Tesla car in space"
                articleId={ArticleId.meaningOfLife}
                filename="tesla-in-space.jpg"
            />
            <p>
                We can discuss whether having a specific goal would make life better or worst, but
                possibly you don't care about it neither I have the reflective skills to come up
                with a comparison. Let's just assume the wide range of possibilities that life
                offers and that sometimes we will feel lost and overwhelmed. If you are still
                reading, at this point you are probably thinking "Where are you going with this,
                Paulo Coelho? All of us have similar thoughts about existence but we don't write
                about it in a blog".
            </p>
            <p>
                My point in the subject is that instead of searching for the meaning of life, we
                should aspire at most to find the best way to make use of our individual time in
                life from within all the available options. "Which are the best things I can
                dedicate my life to?". That's a way easier question to find an answer for. In first
                place because we step out of the philosophy domains to land in the kingdom of
                practicality, but also because it is simpler to think of an answer that gives
                meaning to your single life, from your point of view (who else could judge your own
                answer anyway?), than finding the theory of everything that holds for the rest of
                the humanity, the animals, the planets, the infinite and beyond.
            </p>
            <p>
                The latter question is then easier to answer but the answer becomes subjective, so
                you are again left alone in dark and you will have to find it for yourself. It would
                be unfair however to leave you empty-handed, given that you have read all along this
                post, so I want to leave you with an answer candidate, which might or might not fit
                your expectations: <b>Learning</b>.
            </p>
            <ArticleImage
                alt="String theory representation"
                articleId={ArticleId.meaningOfLife}
                filename="string-theory.jpg"
            />
            <p>
                <b>Learning what?</b> Doesn't matter. Learning anything new or learning more about
                something you already know but you can do better. Specially practical things (e.g.
                martial arts, cooking, salsa, play an instrument, a language, etc.) which can easily
                be practiced on a daily basis and might eventually turn useful. Learning about the
                <a href="https://en.wikipedia.org/wiki/String_theory" target="_blank">
                    {' '}
                    string theory
                </a>{' '}
                might be very interesting for the intricate minds, but is a different kind of
                learning and it doesn't provide the sense of accomplishment that I am trying to
                explain.
            </p>
            <p>
                <b>Why learning?</b> And why is not important the subject to be learnt? Because our
                brain is genetically configured to be good at learning. Natural selection rewards
                the species that learn from their mistakes, and remember the expensive consequences
                of making them, allowing them to survive while the species that do not learn are
                doomed to an eventual extinction due to the unfitness of their behaviors. So, like
                it or not, our brain is good at learning and your neurons are eager to form new
                connections!
            </p>
            <p>
                What to learn will depend on you, but I am sure that you will feel realized during
                the process and you will be proud after having acquired new skills. Also, learning
                gives you a goal. Is not the great goal of life but is a goal you can understand,
                chosen by you, which makes it meaningful, and that will keep you focus and motivated
                for as long as you decide. Finally, the more you learn, the better you understand
                the world that surrounds you and the more connections you will find between
                apparently unrelated things. So don't worry too much about finding the meaning of
                life and go learning something out there! See you in the next post.
            </p>
        </React.Fragment>
    )
};
