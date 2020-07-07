import React from 'react';

export interface SectionContainerProps {
    // TODO Should be able to remove contentClasses
    contentClasses?: string;
    links: JSX.Element;
    linksClasses?: string;
    sectionName: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = (props) => (
    <div className={props.sectionName}>
        <div className={`section-content ${props.contentClasses ? props.contentClasses : ''}`}>
            {props.children ? props.children : null}
        </div>
        <div className={`section-links ${props.linksClasses ? props.linksClasses : ''}`}>
            {props.links}
        </div>
    </div>
);
