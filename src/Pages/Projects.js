import React from 'react';
import "../Styles/projects.css";

export default function Projects() {
    return (
        <div>
            <div className="project-grid animate__animated animate__backInUp">
                <a href="https://github.com/samydev65/portfolio">
                    <img alt="" src="https://gh-card.dev/repos/samydev65/portfolio.svg?fullname=" />
                </a>
            </div>
            <div className="project-grid animate__animated animate__backInUp">
                <a href="https://github.com/samydev65/downloads">
                    <img alt="" src="https://gh-card.dev/repos/samydev65/downloads.svg?fullname=" />
                </a>
            </div>
        </div>
    );
}
