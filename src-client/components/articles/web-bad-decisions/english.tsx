import React from 'react';
import { ArticleContent } from '../article-data';
import { ArticleId } from '../article-id';
import { ArticleImage } from '../article-image';

export const english: ArticleContent = {
    title: 'Web development bad decisions',
    description: 'Some bad decisions I made while developing my old website',
    introduction: (
        <p>
            When building a web on my own, I face two challenges: what to put on it and how to put
            it. Usually the urge of getting the job done pushes me to start developing after
            visualizing the global picture, and I don't spent enough time trying to solve those
            challenges properly. As a consequence of this haste, I sometimes feel my web sites are
            lacking something... but what exactly? Here are the bad decisions I made while
            developing my{' '}
            <a href="https://carlescapellas.xyz/vue-personal-page" target="_blank">
                old website
            </a>{' '}
            and how I approached them on this new version of my web page.
        </p>
    ),
    body: (
        <React.Fragment>
            <h4>Web format</h4>
            <p>
                I created my web page because I wanted to have a stronger online presence. Given
                that web was about to become the official public online version of me, I built it as
                a descriptive website, a formal presentation on how I'd like to be introduced. It
                was more or less aesthetic, but it was designed for the general public; it provided
                information in a reasonably nice user interface.
            </p>
            <p>
                My audience are not recruiters or fans though. No one visits my website to check out
                my CV neither to see the list of places I've travelled to. When it comes to building
                software, the main point is always the same. Who are the users of the app? My
                audience are friends, family and co-workers: they visit my website out of curiosity.
                Is not the information they can find there but the user experience that they will
                remember.
            </p>
            <p>
                Having understood what my visitors expect to find in my website I designed this new
                version of the page to have less information and to be more enjoyable; although
                there are no page loads between sections navigation I still animated the
                transitions.
            </p>
            <div className="screen-splitter">
                <ArticleImage
                    articleId={ArticleId.webBadDecisions}
                    alt="Old website transitions"
                    filename="page-animations-vue.gif"
                    footer="Old website transitions"
                />
                <ArticleImage
                    articleId={ArticleId.webBadDecisions}
                    alt="New website transitions"
                    filename="page-animations-react.gif"
                    footer="New website transitions"
                />
            </div>

            <h4>Information indigestion</h4>
            <p>
                I am proud of the websites I've developed and I could spend hours talking about why
                I built them and how I did it. There is a purpose behind each of them and I lived
                the whole ideation and development history. The visitors of my web don't share this
                enthusiasm though. Not only they don't know about the projects context; they are not
                even aware about their existence. Why would they waste their time reading about
                something they can't relate to?
            </p>
            <p>
                In my old website I tackled this issue by adding a link to the actual websites, so
                visitors could access them. I later learned this is to much to ask for; visitors
                need a preview of what they will find there in order to click the links. I did keep
                the links in the new version of the page, but I also added an image of each website
                and I cut down the descriptions.
            </p>
            <div className="screen-splitter">
                <ArticleImage
                    articleId={ArticleId.webBadDecisions}
                    alt="Old website portfolio"
                    filename="portfolio-vue.png"
                    footer="Old website portfolio"
                />
                <ArticleImage
                    articleId={ArticleId.webBadDecisions}
                    alt="New website portfolio"
                    filename="portfolio-react.png"
                    footer="New website portfolio"
                />
            </div>
            <h4>Perfectionism</h4>
            <p>
                Being a software developer makes me want to write about code on my blog and
                sometimes I like to provide code snippets to help illustrating concepts. The most
                popular solution when it comes to displaying code snippets on a website are{' '}
                <a href="https://en.wikipedia.org/wiki/Pastebin" target="_blank">
                    pastebin
                </a>{' '}
                services (i.e.{' '}
                <a href="https://medium.com/" target="_blank">
                    medium
                </a>{' '}
                uses Gist, the Github pastebin service).
            </p>
            <p>
                Gist code snippets have a minor drawback however; they are meant to be inserted
                during page loads. Given my website doesn't reload the page when navigating across
                sections, the code snippets fail to calculate the appropriate height. It's not a
                critical issue because the snippets will have a scrollbar to move the content, but
                when I was building my old website I wanted the snippets to have the proper height.
            </p>
            <p>
                Instead of abiding the pastebin solution, I chose to integrate{' '}
                <a href="https://microsoft.github.io/monaco-editor/" target="_blank">
                    Monaco
                </a>{' '}
                editor to my page, a text editor with a bunch of features specially designed for
                coding. Because it's written in JavaScript, it can be easily integrated in a web
                page, resulting in nicely colored code snippets. It's not only more customizable but
                it gives code snippets the proper height 🤩
            </p>
            <p>
                While I think it's admirable not to settle with the standard solution and go for
                higher standards, I must admit that in this case I went too far. Monaco editor is a
                complex library; it's meant to write code, not to display code snippets. It can be
                used for that purpose but it heavily increases the website load time for very little
                gain. In the new version of the website I lowered my perfectionist demands, accepted
                the Gist limitations and achieve a similar solution to the problem while keeping the
                web light.
            </p>
            <div className="screen-splitter">
                <ArticleImage
                    articleId={ArticleId.webBadDecisions}
                    alt="Old website code snippet"
                    filename="code-snippet-monaco.png"
                    footer="Old website code snippet"
                />
                <ArticleImage
                    articleId={ArticleId.webBadDecisions}
                    alt="New website code snippet"
                    filename="code-snippet-gist.png"
                    footer="New website code snippet"
                />
            </div>
            <h4>Worsening features</h4>
            <p>
                After having written a number of blog posts I thought it would be cool to have a
                calendar view of the blog entries, so I could check how often I was posting on my
                blog. I quickly found a compatible library, managed to display a calendar
                highlighting the dates in which I posted to the blog and rearranged the blog layout
                to include the calendar view. Because the calendar took to much space to always be
                visible, I created a collapsible section, moved the blog filters in it and proudly
                deploy my latest feature.
            </p>
            <ArticleImage
                articleId={ArticleId.webBadDecisions}
                alt="Blog filters before the calendar view"
                className="image-600"
                filename="blog-filters-vue.png"
                footer="Blog filters before the calendar view"
            />
            <div className="screen-splitter">
                <ArticleImage
                    articleId={ArticleId.webBadDecisions}
                    alt="Collapsed blog filters after the calendar view"
                    filename="blog-calendar-view-collapsed.png"
                    footer="Blog filters after the calendar view (collapsed)"
                />
                <ArticleImage
                    articleId={ArticleId.webBadDecisions}
                    alt="Visible blog filters after the calendar view"
                    filename="blog-calendar-view.png"
                    footer="Blog filters after the calendar view (visible)"
                />
            </div>
            <p>
                What I unfortunately ended up doing though was making the blog page less intuitive,
                as I made the blog filters less accessible while adding little value with the
                calendar view itself 😔 Yes, I could have solved this issues by changing the way to
                access the calendar view while keeping the blog filters always visible. My point
                here is that sometimes is better not to have a feature than to force the web to
                accommodate it. In my new web page I decided to omit the calendar view, both for
                better filters access and because I felt it wasn't worth spending time on
                integrating it given the minor improvement it adds to the web.
            </p>
            <h4>Opinionated categories</h4>
            <p>
                I enjoying writing my blog because I write about any topic I feel like writing in a
                given moment. As a result the blog is a mix of entries; from articles on the meaning
                of life to technical descriptions on how to turn your website into a progressive web
                app. Knowing those topics are too diverse to target a single audience I decided to
                segment the blog into different categories, so web visitors could filter the blog
                entries based on their interests.
            </p>
            <p>
                The segmentation system I came up with was simple: labels. Each of the blog entries
                has a category label and visitors of the blog can select the labels they want to
                read about. So far so good. What I missed in this approach was defining upfront
                standard labels that could be easily understood by the visitors of the site: not
                everyone will expect to find the same thing in a category named 'Dissemination'.
            </p>
            <p>
                In the new version of the page I solved this issue by reducing the number of
                categories to two. It's a less refined system but it's easier to understand.
                Hopefully, it will also force me to select more relevant topics in future blog
                entries 🤞
            </p>
            <div className="screen-splitter">
                <ArticleImage
                    articleId={ArticleId.webBadDecisions}
                    alt="Old website blog filters"
                    filename="blog-filters-vue.png"
                    footer="Old website blog filters"
                />
                <ArticleImage
                    articleId={ArticleId.webBadDecisions}
                    alt="New website blog filters"
                    filename="blog-filters-react.png"
                    footer="New website blog filters"
                />
            </div>
            <h4>Conclusion</h4>
            <p>
                Did I really need to make a new version of the page to fix the issues I mentioned?
                Probably not. But don't forget that I'm a developer! We take every opportunity we
                can to rebuild a project from scratch using a whole different bunch of technologies
                (in this case I was tired of Vue.js and I wanted to play around with React
                transitions and add type safety to the equation).
            </p>
            <p>
                It's your turn now! Can you identify any of the issues above in your web page? It
                can be hard to understand that this awesome website you are so proud of it's being
                perceived in a different manner by your visitors. Best test? Watch your mother
                browsing the page without explaining her how it works. See you in the next post!
            </p>
        </React.Fragment>
    )
};
