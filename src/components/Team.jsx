import React from 'react';
import TeamCard from './TeamCard';

const Team = () => {
    return (
        <div className="section" id="team">
            <h2 className="section-header">TEAM</h2>

            <div className="leadership-section">
                <div className="leadership-block">
                    <h3 className="sub-section-header">Mentor</h3>
                    <div className="team-grid">
                        <TeamCard name="Mentor Name" role="Faculty Mentor" quote={`"Guiding the next generation of innovators."`} />
                    </div>
                </div>
            </div>

            <div className="section-separator"></div>

            <div className="leadership-section">
                <div className="leadership-block">
                    <h3 className="sub-section-header">President</h3>
                    <div className="team-grid">
                        <TeamCard name="Member Name" role="President" quote={`"Insert catchphrase here"`} />
                    </div>
                </div>

                <div className="leadership-block">
                    <h3 className="sub-section-header">Vice President</h3>
                    <div className="team-grid">
                        <TeamCard name="Member Name" role="Vice President" quote={`"Insert catchphrase here"`} />
                    </div>
                </div>

                <div className="leadership-block">
                    <h3 className="sub-section-header">General Secretary</h3>
                    <div className="team-grid">
                        <TeamCard name="Member Name" role="General Secretary" quote={`"Insert catchphrase here"`} />
                    </div>
                </div>
            </div>

            <div className="section-separator"></div>

            <h3 className="sub-section-header">Core Members</h3>
            <div className="team-grid">
                <TeamCard name="Member Name" role="Core Member" quote={`"Insert catchphrase here"`} />
                <TeamCard name="Member Name" role="Core Member" quote={`"Insert catchphrase here"`} />
                <TeamCard name="Member Name" role="Core Member" quote={`"Insert catchphrase here"`} />
                <TeamCard name="Member Name" role="Core Member" quote={`"Insert catchphrase here"`} />
            </div>

            <div className="section-separator"></div>

            <h3 className="sub-section-header">Executives</h3>
            <div className="team-grid exec-row">
                <TeamCard name="Member Name" role="Executive" quote={`"Insert catchphrase here"`} />
                <TeamCard name="Member Name" role="Executive" quote={`"Insert catchphrase here"`} />
                <TeamCard name="Member Name" role="Executive" quote={`"Insert catchphrase here"`} />
                <TeamCard name="Member Name" role="Executive" quote={`"Insert catchphrase here"`} />
            </div>
        </div>
    );
};

export default Team;
