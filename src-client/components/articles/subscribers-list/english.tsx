import React from 'react';
import ReactGist from 'react-gist';
import { ArticleContent } from '../article-data';
import { ArticleId } from '../article-id';
import { ArticleImage } from '../article-image';

export const english: ArticleContent = {
    title: 'Building a subscribers list',
    description: 'Why and how to build a subscribers list for your website',
    introduction: (
        <p>
            As a content writer you owe a great deal to your readers. No matter whether you are a
            blogger, a writer, a coach or an author, being able to reach your audience will help you
            get them more engaged with your activity and provides a good way to start selling your
            products or services in some point in the future. In addition it will keep you motivated
            to keep writing. Is there anything more pleasant than knowing that someone cares about
            your ideas?
        </p>
    ),
    body: (
        <React.Fragment>
            <p>
                Most social networks provide great tools to interact with the users and they might
                have your needs covered. But even if all of your activity is taking place inside a
                social network, you might want to divorce from it in the future. Remember MySpace?.
                Having a simple web page doesn't hurt, will allow you to start building your own
                list of subscribers and can be created for free if you still don't have it, using
                platforms such as <a href="https://wordpress.com/">Wordpress</a>.
            </p>
            <p>
                See that form in the bottom of this page? Bingo! This is exactly what I am talking
                about. A simple form where readers can provide an email address to which I will send
                an email every time I post new content to my web. In case you are wondering, no, I
                am not selling anything at the moment. You won't get annoying dick enlarger ads if
                you subscribe to the newsletter.
            </p>
            <p>
                There are a bunch of services you can use to take care of all the stuff related to
                the mailing list. The one I like the most and, to be fair, the only one I have tried
                is <a href="https://mailchimp.com/">Mailchimp</a>. They have a great visual editor
                to compose mails (see the screenshot below), they allow you to export the contacts
                list and is free to use under 2000 subscribers.
            </p>
            <p>
                <b>
                    Integrating it with your website is as easy as creating an embedded form and
                    copying the generated code into your web
                </b>
                . The form editor includes a preview area for you to know what the form will look
                like on your web. The generated code will vary depending on the options you choose
                but you should end up getting something similar to the code below.
            </p>
            <ArticleImage
                articleId={ArticleId.subscribersList}
                alt="Mailchimp signup form builder"
                filename="signup-form.png"
            />
            <ReactGist id="b23dea8cac1e579a1ff5622b9d4aa54d" />
            <p>
                We humans are lazy creatures so I'd suggest that you require as few information as
                possible to maximize the number of people that subscribes. After fine tunning the
                form, paste the code to your site and you are ready to start collecting emails
                &#127881; Optionally, you can add some CSS rules to align the look and feel of the
                form with the rest of your website.
            </p>
            <p>
                Next thing you might want to do once you have collected a few email addresses is
                sending a newsletter mail. You can either create a new campaign or define a template
                to be used later when creating a campaign. In both cases Mailchimp provides a visual
                WYSIWYG editor to help you building the mail and you can test it at any point by
                sending a copy to your own address.
            </p>
            <ArticleImage
                articleId={ArticleId.subscribersList}
                alt="Mailchimp email editor"
                filename="email-editor.png"
            />
            <ArticleImage
                articleId={ArticleId.subscribersList}
                alt="Mailchimp campaign creator"
                filename="campaign.png"
            />
            <p>
                And that's how easy mail marketing can be! There are much more things that you can
                do with Mailchimp (e.g. sending welcome emails after subscriptions, segment your
                audience, schedule recurring emails, etc.) but don't worry about this now. Stop
                looking for excuses, go creating your Mailchimp account and start collecting emails
                from your readers &#128170; See you in the next post!
            </p>
        </React.Fragment>
    )
};
