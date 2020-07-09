export enum Language {
    ca = 'ca',
    en = 'en'
    // es = 'es'
}

export const AllLanguages: Language[] = Object.keys(Language).map(
    (languageKey) => Language[languageKey as Language]
);
