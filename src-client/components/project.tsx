import React from 'react';

interface ProjectProps {
    title: string;
}

/* TODO Include projects year, live link and github link */

export const Project: React.FC<ProjectProps> = (props) => (
    <div className="project">
        <h4 className="project-title">{props.title}</h4>
        {props.children ? props.children : null}
    </div>
);
