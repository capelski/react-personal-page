import React from 'react';

export interface SectionContainerProps {
    links: JSX.Element;
    sectionName: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = (props) => (
    <div className={props.sectionName}>
        <div className="section-viewport">
            <div className="section-content">{props.children ? props.children : null}</div>
        </div>
        <div className="section-links">{props.links}</div>
    </div>
);
