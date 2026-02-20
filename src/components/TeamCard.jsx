import React from 'react';

const TeamCard = ({ name, role, quote, image = "/assets/codex_dark_theme.png", objectPosition = "center", showSocial = true, linkedin = "https://linkedin.com", github = "https://github.com" }) => {
    return (
        <div className="team-card">
            <div className="card-image">
                <img src={image} alt={name} style={{ objectPosition }} />
            </div>
            <h3>{name}</h3>
            <p className="member-quote"><b><i>"{quote}"</i></b></p>
            {showSocial && (
                <div className="social-links">
                    <a href={linkedin} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square"></i></a>
                    <a href={github} target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                </div>
            )}
        </div>
    );
};

export default TeamCard;
