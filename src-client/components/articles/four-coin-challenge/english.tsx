import React, { useState } from 'react';
import { ArticleContent } from '../article-data';
import { ArticleId } from '../article-id';
import { ArticleImage } from '../article-image';

export const english: ArticleContent = {
    title: 'Four coin challenge',
    description:
        'Challenge consisting in laying 4 coins in a row, with some restrictions to make it interesting, and how to solve it',
    introduction: (
        <p>
            In contrast to my abstract esoteric last post on the meaning of life, today I bring a
            light and enjoyable post that will make you think in a different manner; you will need
            to find a way to lay four coins in a row. Doesn't sound complicated, does it? Just let
            me add a couple of restrictions so that the word challenge on the title is not used in
            vain and in order for you to feel proud of yourself if you are able to find out a
            solution.
        </p>
    ),
    body: () => {
        const [solutionStep, setSolutionStep] = useState(1);

        return (
            <React.Fragment>
                <ArticleImage
                    articleId={ArticleId.fourCoinChallenge}
                    alt="4-coin challenge initial position"
                    filename="initial-position.jpg"
                    footer="Initial position"
                />
                <p>
                    To start with the coins must placed in the <b>initial position</b> displayed
                    above. I will use the bitcoin logo to cause confusion and get some more views by
                    mistake (catching the attention of the distracted minds), but you can use any
                    kind of coin as long as they have the same size.
                </p>
                <p>
                    The goal of the challenge is to put the coins on a row by moving just one coin
                    at a time, not lifting it from the surface where they are laying. The tricky
                    part that will make you struggle with the challenge is that each time you move a
                    coin, it can only be left in a position where it touches at least two other
                    coins. A picture is worth a thousand words: the first movement is invalid while
                    the second one is perfectly accepted.
                </p>
                <ArticleImage
                    articleId={ArticleId.fourCoinChallenge}
                    alt="4-coin challenge invalid movement"
                    filename="invalid-movement.jpg"
                    footer="Invalid movement"
                />
                <ArticleImage
                    articleId={ArticleId.fourCoinChallenge}
                    alt="4-coin challenge valid movement"
                    filename="valid-movement.jpg"
                    footer="Valid movement"
                />
                <p>
                    That's all you need to know! So go get some coins and don't come back until you
                    have a solution or the closest thing you can get before you get tired of trying.
                    Regardless what happens first, here you will find the solution when the moment
                    arrives:
                </p>
                <ArticleImage
                    articleId={ArticleId.fourCoinChallenge}
                    alt="4-coin challenge solution"
                    filename={`solution-${solutionStep}.jpg`}
                />
                <div className="solution-buttons">
                    <button
                        type="button"
                        className={`button primary big ${
                            solutionStep > 1 ? '' : 'disabled-button'
                        }`}
                        onClick={() => {
                            setSolutionStep(Math.max(solutionStep - 1, 1));
                        }}
                    >
                        Back
                    </button>
                    <button
                        type="button"
                        className={`button primary big ${
                            solutionStep < 13 ? '' : 'disabled-button'
                        }`}
                        onClick={() => {
                            setSolutionStep(Math.min(solutionStep + 1, 13));
                        }}
                    >
                        Next
                    </button>
                </div>
                <p>
                    Hope you enjoy the challenge and you were able to solve it. See you in the next
                    post!
                </p>
            </React.Fragment>
        );
    }
};
