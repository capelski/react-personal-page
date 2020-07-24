import React from 'react';
import { ArticleContent } from '../article-data';
import { ArticleId } from '../article-id';
import { ArticleImage } from '../article-image';

export const english: ArticleContent = {
    title: 'Writing a sudoku algorithm',
    description: 'All you need to know in order to build a sudoku generator',
    introduction: (
        <p>
            My mother has always been a fervent newspaper reader and, throughout the years, she
            developed the habit of solving the puzzles that come in the last pages. Between those
            puzzles you can always find a game called{' '}
            <a href="https://en.wikipedia.org/wiki/Sudoku" target="_blank">
                sudoku
            </a>
            . Two actually; a reasonably difficult one and an evil one. So she was in the middle of
            filling the first sudoku when I interrupted her. I don't remember what for but I do
            remember that we talked about sudoku and it was the difference between the two sudoku
            levels that caught my attention.
        </p>
    ),
    body: (
        <React.Fragment>
            <div className="screen-splitter">
                <ArticleImage
                    articleId={ArticleId.sudokuGeneration}
                    alt="Easy sudoku"
                    filename="easy-sudoku.png"
                    footer="Easy sudoku"
                />
                <ArticleImage
                    articleId={ArticleId.sudokuGeneration}
                    alt="Hard sudoku"
                    filename="hard-sudoku.png"
                    footer="Hard sudoku"
                />
            </div>
            <p>
                In the particular newspaper my mom was reading that day, the easy sudoku had 28
                filled boxes out of the 81 total whereas the difficult sudoku had 29 filled boxes.{' '}
                <b>How come the more difficult puzzle had more filled boxes!?</b> Or, in other
                words, isn't the difficulty of a sudoku based on the number of filled boxes? At
                least, that was the feeling I had back then. The truth is that I had never taken the
                time to think about how sudoku are generated. I had solved a few of them sure, but I
                had never tried to figure out how to generate one.
            </p>
            <p>
                In fact, it turns out is not easy at all. An important property of a well-composed
                sudoku is that it has only one possible solution. It might sound obvious but,
                depending on how many and which boxes are filled, there can be multiple valid
                combinations that solve the puzzle. The most famous example is the sudoku that UK
                Sky TV draw in a hillside offering a £5000 prize for the solution; it turned out to
                have{' '}
                <a
                    href="https://www.sudokuwiki.org/Sudoku_Creation_and_Grading.pdf"
                    target="_blank"
                >
                    1905 possible solutions
                </a>
                . That anecdote aroused my curiosity.
            </p>
            <ArticleImage
                articleId={ArticleId.sudokuGeneration}
                alt="Sky TV hillside sudoku"
                filename="sky-tv-hillside.jpg"
            />
            <p>
                <b>Usually I would have thought about it for a while</b>, realize it is a
                mathematically complex task, conclude that the amount of spare time required to find
                a solution was much bigger than the curiosity I had on the subject{' '}
                <b>and finally gave up</b>. Nevertheless I had just started a sabbatical leave at my
                company and, due to COVID-19 prevention measures, the one way flight I was supposed
                to catch on March 31st to go living in Australia got cancelled.{' '}
                <b>
                    Given I found myself unemployed, locked at home and provided with the biggest
                    amount of free hours I had ever had in my life
                </b>{' '}
                (in Spain the coronavirus lock down started March 15th and it was meant to last at
                least for one month), I decided to figure out how to generate sudoku 💪
            </p>
            <p>
                What followed next was a much longer journey that I had expected in the beginning. I
                was about to quit the project many times but, by chance, I watched{' '}
                <a href="https://www.imdb.com/title/tt4276820/" target="_blank">
                    The Founder
                </a>{' '}
                in the meanwhile, the movie that explains how Ray Kroc turned McDonald's into the
                biggest restaurant business in the world thanks to his bulletproof persistence,
                which helped me resisting until the end. This odyssey had four stages:
            </p>
            <p>
                <b>1. Results, results, results</b>: I couldn't fight the urge of wanting to see
                something done whithout thinking much. I assumed that the process of generating a
                9x9 sudoku would be the same as generating a 4x4 one and I went for a quick command
                line algorithm.
            </p>
            <ArticleImage
                articleId={ArticleId.sudokuGeneration}
                alt="Command line generated sudoku"
                className="image-600"
                filename="command-line.png"
            />
            <p>
                <b>2. Damn! I need a graphical tool</b>: In theory, I just needed to adapt the
                algorithm to generate 9x9 sudoku and that would be the end of story. At practice,
                turns out that 9x9 sudokus have little to do with 4x4 sudokus. I couldn't figure out
                what I was doing wrong just by reading the command line output, so I was compelled
                to built a graphical tool.
            </p>
            <ArticleImage
                articleId={ArticleId.sudokuGeneration}
                alt="Command line generation error"
                className="image-600"
                filename="command-line-error.png"
            />
            <p>
                <b>3. Frog... this is complicated</b>: It didn't take me much time to create a web
                application that could display 9x9 sudoku. With the visual representation of the
                sudoku and the ability to fill boxes back and forth I began to understand what I was
                missing out. The sudoku basic rules (e.g., a number can't be placed in a box if the
                same number is already placed in the column, region or row of that box) contain a
                set of derived rules, which are not easy to see at first glance.
            </p>
            <ArticleImage
                articleId={ArticleId.sudokuGeneration}
                alt="Web app first approach"
                className="image-600"
                filename="web-app-first-approach.png"
            />
            <p>
                <b>4. The light at the end of the tunnel</b>: After sitting down and thinking about
                it, as I should have done from the beginning, I figured out some of those derived
                rules that help discarding possible numbers from boxes. Having found out about those
                little bastards, it was just a matter of rewriting the algorithm to consider them.
                It took me a number of hours, but I could finally get a working generator.
            </p>
            <ArticleImage
                articleId={ArticleId.sudokuGeneration}
                alt="Web app final approach"
                className="image-600"
                filename="web-app-final-approach.png"
            />
            <p>
                Hey look ma, I made it! In my case I didn't build a massive hamburger empire but
                this humble{' '}
                <a href="/sudoku-generator" target="_blank">
                    sudoku generator
                </a>
                . I must admit that it sometimes reaches dead ends during generation, having to drop
                the work and start again from scratch, but it always ends up generating valid single
                solution puzzles. If you are wondering, these are the rules the algorithm uses to
                generate sudoku. In fact, these are probably the rules you use when you are solving
                those puzzles too.
            </p>
            <ul>
                <li>
                    If a box has only one possible number left, the number must be placed in that
                    box and it's not valid in any peer box:
                    <ArticleImage
                        articleId={ArticleId.sudokuGeneration}
                        alt="Sudoku box single candidate example"
                        className="image-600"
                        filename="box-only-left-candidate.png"
                    />
                </li>
                <li>
                    If a number can only be placed in one box for a given group (column, region or
                    row), the number must be placed in that box and it's not valid in any peer box:
                    <ArticleImage
                        articleId={ArticleId.sudokuGeneration}
                        alt="Sudoku group single candidate example"
                        className="image-600"
                        filename="group-single-candidate.png"
                    />
                </li>
                <li>
                    If 2-3 boxes in a group have only the same 2-3 numbers available, those numbers
                    are not valid in the rest of boxes in the group:
                    <ArticleImage
                        articleId={ArticleId.sudokuGeneration}
                        alt="Sudoku owned candidates rule example"
                        className="image-600"
                        filename="owned-candidates.png"
                    />
                </li>
                <li>
                    If the only boxes where a number is available for a given region are in the same
                    row or column, that number is not valid in the rest of boxes of that row or
                    column:
                    <ArticleImage
                        articleId={ArticleId.sudokuGeneration}
                        alt="Sudoku region subset rule example"
                        className="image-600"
                        filename="region-subset.png"
                    />
                </li>
            </ul>

            <p>
                That's pretty much it. I had to work on it around 75 hours to get some kind of
                acceptable sudoku generator. It is finally less complete than what I wanted it to
                be, but things never turn out the way you expect them to. Feel free to use the
                generator, but there two things you must know: it isn't specially mobile friendly
                and I didn't work on configuring the difficulty, which makes the generated puzzles
                pretty hardcore. Good luck and see you in the next post!
            </p>
        </React.Fragment>
    )
};
