import React from 'react';
import { Language } from './articles/language';

const formContent: { [key: string]: { [Language.ca]: string; [Language.en]: string } } = {
    title: {
        ca: 'Vols rebre notícies meves?',
        en: 'Wanna hear back from me?'
    },
    body: {
        ca:
            "Subscriu-te a la meva llista de correu i rebràs un mail quan publiqui una entrada nova (al voltant d'un cop al més, lliure de spam). Cancela la subscripció en qualsevol moment",
        en:
            'Subscribe to my newsletter and you will get a mail when I post a new entry (about once a month, spam free). Cancel the subscription at any time'
    },
    placeholder: { ca: 'Adreça electrònica', en: 'Email address' },
    button: {
        ca: 'Subscriure',
        en: 'Subscribe'
    }
};

export interface NewsletterProps {
    selectedLanguage: Language;
}

export const Newsletter: React.FC<NewsletterProps> = (props) => (
    <div id="mc_embed_signup" className="article-newsletter">
        <form
            action="https://gmail.us4.list-manage.com/subscribe/post?u=1268a6ca6cbf3464a492cbc92&amp;id=06423c24b8"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
        >
            <div id="mc_embed_signup_scroll">
                <p className="newsletter-title">{formContent.title[props.selectedLanguage]}</p>
                <p>{formContent.body[props.selectedLanguage]}</p>
                <div className="inputs-wrapper">
                    <input
                        type="email"
                        name="EMAIL"
                        className="email"
                        id="mce-EMAIL"
                        placeholder={formContent.placeholder[props.selectedLanguage]}
                        required
                    />
                    <input
                        className="newsletter-submit button primary"
                        type="submit"
                        value={formContent.button[props.selectedLanguage]}
                        name="subscribe"
                        id="mc-embedded-subscribe"
                    />
                </div>
                <div style={{ display: 'none' }} aria-hidden="true">
                    <input
                        type="text"
                        name="b_1268a6ca6cbf3464a492cbc92_06423c24b8"
                        tabIndex={-1}
                    />
                </div>
            </div>
        </form>
    </div>
);
