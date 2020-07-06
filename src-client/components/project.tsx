import React from 'react';

// TODO Include the image in this component
interface ProjectProps {
    date?: string;
    repository?: string;
    title: string;
    url?: string;
}

export const Project: React.FC<ProjectProps> = (props) => (
    <div className="project">
        <div className="project-info">
            <h3 className="project-title">{props.title}</h3>
            <div className="project-details">
                {props.date ? <span className="project-date">📅 {props.date}</span> : null}
                {props.url ? (
                    <span className="project-demo">
                        <a target="_blank" href={props.url}>
                            🌐
                        </a>
                    </span>
                ) : null}
                {props.repository ? (
                    <span className="project-source">
                        <a target="_blank" href={`https://github.com/capelski/${props.repository}`}>
                            🖥️
                        </a>
                    </span>
                ) : null}
            </div>
        </div>
        {props.children ? props.children : null}
    </div>
);
