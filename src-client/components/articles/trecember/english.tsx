import React, { useState } from 'react';
import { ArticleContent } from '../article-data';
import { ArticleId } from '../article-id';
import { ArticleImage } from '../article-image';
import { ConventionalYear, TrecemberYear } from './helpers';

export const english: ArticleContent = {
    title: 'Trecember',
    description: 'How a 13 months calendar would make our life easier',
    introduction: (
        <p>
            At this point in your life there might be a few things you are not familiar with:
            wasabi, free falling or David Lynch's movies for instance. The gregorian calendar
            however is not one of them. You learned it in school when you were a child, got used to
            it and never question it again. Brace yourselves because today the questioning day has
            arrived. What would a calendar with thirteen months look like?
        </p>
    ),
    body: () => {
        const [selectedDay, setSelectedDay] = useState(-1);

        return (
            <React.Fragment>
                <p>
                    So you probably have already realized that the our calendar system is not
                    perfect. "yeah, there a few things that could be improved, but... who cares?".
                    Well, I do! When you suffer a bit of OCD (Obsessive Compulsive Disorder) as I
                    do, there are certain types of untidiness that make you nervous. These are the
                    main aspects of the gregorian calendar I find profoundly troubling:
                </p>
                <ul className="numbered">
                    <li>
                        <b>Different number of days in every month</b>. It makes the month an
                        unreliable time unit. Who in his god damned mind creates a measurement
                        system with non-constant units? Imagine than on odd weeks a meter would
                        equal 100cm but on even weeks a meter would only equal 98cm. Good luck
                        managing distances my friend!
                    </li>
                    <li>
                        <b>Unpredictable week day for a day in a month</b>. This happens because
                        months don't contain an entire number of weeks and because each month starts
                        the week day immediately after the previous month ends. It leads to
                        situations like: "Are you up for skiing next month 14th to 16th?", "I don't
                        know. Let me check the calendar first".
                    </li>
                    <li>
                        <b>Unpredictable week day for a day in a year</b>. This happens because
                        years don't contain an entire number of weeks and because each year starts
                        the week day immediately after the previous year ends. It leads to public
                        holidays taking place in a different week day every year (e.g. wasted
                        holidays when Christmas takes place on a Sunday).
                    </li>
                </ul>
                <ArticleImage
                    articleId={ArticleId.trecember}
                    alt="Person claiming not to be crazy GIF"
                    filename="not-crazy.gif"
                />
                <p>
                    We could create a thousand different calendar systems that would track the time
                    in a similar way the current system does, but adding some advantages (e.g.
                    having 52 single-week months). The only restriction the systems must respect is
                    that, at the long run, the year must contain the number of days the Earth takes
                    to complete an orbit around the sun (365.26 days). Some random examples:
                </p>
                <ul className="numbered">
                    <li>Each month could have 30 days, except December with 35</li>
                    <li>
                        Odd months could have 28 days and even months 35 days, except December with
                        22
                    </li>
                    <li>
                        The year could have 364 days and add an extra week to December every seven
                        years
                    </li>
                </ul>
                <p>
                    No matter which system you choose the only requirement to make it work is that
                    people around the planet accepts it. So, without further ado, here I am
                    presenting mine in a visual manner 🚀🍾 The idea is very simple: adding a 13th
                    month to make all of them 28 days long, except the last one that will contain
                    29.
                </p>
                <div className="screen-splitter">
                    <div>
                        <h4>Conventional year</h4>
                        <ConventionalYear onDayClick={setSelectedDay} selectedDay={selectedDay} />
                    </div>
                    <div>
                        <h4>Trecember year</h4>
                        <TrecemberYear onDayClick={setSelectedDay} selectedDay={selectedDay} />
                    </div>
                </div>
                <p>
                    This approach resolves the problems 1 and 2 but keeps the problem 3. A very
                    sophisticated strategy similar to the gregorian calendar leap year would consist
                    in make the year 364 days and add an extra week every now and then. Precisely,
                    we would need to add 5 weeks every 28 years (in mathematical terms,
                    <i>(4·365 + 1)x = (4·364)x + 7y</i>), which makes it a bit hard to distribute.
                </p>
                <p>
                    Instead of wrapping our heads around it, we can take the much easier approach of
                    keeping the leap years and forcing the year to start on Monday, no matter what
                    the previous year last day was. At practice this would mean having two mondays
                    on a row (29th of Trecember and 1st of January) once a year, but given the
                    second one is always a public holiday I think we will survive.
                </p>
                <p>
                    And that is the end of it! In case you like the Trecember system and if you
                    think the pros outweight the cons you should then start changing the memorable
                    dates of your life's history, because your birthday will no longer be November
                    10th, but December 6th. See you in the next post!
                </p>
            </React.Fragment>
        );
    }
};
