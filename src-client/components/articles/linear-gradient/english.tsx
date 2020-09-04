import React from 'react';
import ReactGist from 'react-gist';
import { ArticleContent } from '../article-data';
import { Wheel } from './wheel';
import { WheelPocFour } from './wheel-poc-four';
import { WheelPocEight } from './wheel-poc-eight';

export const english: ArticleContent = {
    title: 'Linear gradient is the new black',
    description: 'How to implement a wheel of fortune using nothing but CSS3 and HTML',
    shareSentence: 'Learn how to build a wheel of fortune using CSS and HTML ☸️🎉',
    introduction: (
        <p>
            Build a wheel of fortune in CSS... is that even possible!? I had never thought about it
            until I met a group of entrepreneurs who were building a savings application based on
            video games. They were using React Native and a couple of graphics libraries which, in
            my opinion, seemed to be too much overhead for just a roulette. I immediately started to
            dig in the internet and I found a way to implement it in pure CSS3 and HTML. The CSS
            property that makes it possible? Meet your new best friend: linear-gradient 🕶️
        </p>
    ),
    body: (
        <React.Fragment>
            <p>
                So the problem is simple; a wheel with some triangular tiles which is able to spin
                on its center. Ideally the wheel could display any number of tiles but we have to
                start somewhere so let's say we are happy with 8. We are aiming for a wheel like the
                following one:
            </p>
            <Wheel tiles={['250', '750', '500', '1000', 'x2', '2000', '500', '%2']} />
            <p>
                Now, for the sake of simplicity, let's see first how a 4-tile wheel can be
                implemented with some absolute positioning and css transformations. We will have one
                300x300px "wheel" div container and four 150x150px "tile" div elements inside. Each
                of the "tile" elements will have absolute positioning and will be rotated based on
                the wheel container center, so they are distributed along the entire "wheel" area:
            </p>
            <WheelPocFour isSkeleton={true} />
            <p>
                Not bad! We next need to give the container some border radius in order to achieve
                the circular shape and to hide the overflowing contents so the absolute "tile"
                elements don't break the circle. By adding some more rotation to the tiles content
                and painting the tiles background color, we get a pretty decent 4-tile roulette:
            </p>
            <WheelPocFour isSkeleton={false} />
            <ReactGist id="6a997482cd36eb55553a8087c5e552e3" />
            <p>
                <i>
                    "So! What's the fuzz with linear-gradient? It looks like the wheel is ready to
                    spin."
                </i>{' '}
                Easy soldier. This approach works for 4-tile wheels, but let's see what happens when
                we try to double up the number of tiles. For the sake of clarity, I'll remove the
                border radius from the wheel, so it's easier to understand what is going on:
            </p>
            <WheelPocEight isSkeleton={true} />
            <p>
                Aha! A wild couple of problems appears. The more important one is the fact that the
                last tile (number 8) is displayed on top the first one (number 1). We could try to
                fix this by giving the first tile a greater <i>z-index</i>, but we will end up with
                the first tile covering the second and so on... Here is where <b>linear-gradient</b>{' '}
                comes into play 😁 Instead of having a plain <i>background-color</i>, each of the
                tiles will get half of the background colored with the value we want and the other
                half will be transparent.
            </p>
            <WheelPocEight isSkeleton={false} />
            <div className="article-code-snippet">
                background: linear-gradient(135deg, #0082ff 50%, transparent 50%);
            </div>
            <p>
                This is how linear-gradient makes its magic. The first argument is optional and it
                can be used to apply a rotation to the background. The rest of arguments are a set
                of colors which will be used to fill the background. If no percentages are provided,
                the background will be filled with a gradient, in this case from #0082ff to
                transparent. By adding the percentages, we can make the gradient sharp (e.g. no
                shadow effect).
            </p>{' '}
            <p>
                The second problem is the tiles content is misaligned. This happens because now the
                tiles can only use half of their total area (the other half is transparent and, at
                practice, it belongs to another tile) and it can easily be fixed by giving the tile
                contents div half the width of the tile itself. The only thing that is now missing
                is to bring back the border radius and to improve the styling a little bit. Put that
                in place and you will get the same wheel you saw in the beginning of the post 👌
            </p>
            <ReactGist id="fe698c685117f804b80ded68a5b95ca5" />
            <p>
                And that's all there is! Feeling up for a bit of challenge? Try to fit four more
                tiles to the wheel 🏆 See you in the next post!
            </p>
            <Wheel
                tiles={[
                    '250',
                    '750',
                    '500',
                    '1000',
                    'x2',
                    '2000',
                    '500',
                    '%2',
                    '0',
                    '1500',
                    '350',
                    '900'
                ]}
            />
        </React.Fragment>
    )
};
