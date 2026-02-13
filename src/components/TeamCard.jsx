import React from 'react';

const TeamCard = ({ name, role, quote, showSocial = true }) => {
    return (
        <div className="team-card">
            <div className="card-image">
                <img src="/assets/codex_dark_theme.png" alt="Team Member" />
            </div>
            <h3>{name}</h3>
            <p>{role}</p>
            <p className="member-quote">{quote}</p>
            {showSocial && (
                <div className="social-links">
                    <a href="#"><i className="fa fa-linkedin-square"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>
                </div>
            )}
        </div>
    );
};

export default TeamCard;
