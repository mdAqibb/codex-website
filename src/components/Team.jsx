import React from 'react';
import TeamCard from './TeamCard';

const Team = () => {
    return (
        <div className="section" id="team">
            <h2 className="section-header">TEAM</h2>

            <div className="leadership-section">
                <div className="leadership-block">
                    <h3 className="sub-section-header">President</h3>
                    <div className="team-grid">
                        <TeamCard name="Member Name" role="Role / Position" quote={`"Insert catchphrase here"`} />
                    </div>
                </div>

                <div className="leadership-block">
                    <h3 className="sub-section-header">Vice President</h3>
                    <div className="team-grid">
                        <TeamCard name="Member Name" role="Role / Position" quote={`"Insert catchphrase here"`} />
                    </div>
                </div>
            </div>

            <div className="section-separator"></div>

            <h3 className="sub-section-header">Research</h3>
            <div className="team-grid">
                <TeamCard name="Member Name" role="Chairperson" quote={`"Insert catchphrase here"`} />
                <TeamCard name="Member Name" role="Vice Chairperson" quote={`"Insert catchphrase here"`} />
            </div>
            <div className="team-grid exec-row">
                <TeamCard name="Member Name" role="Executive" quote={`"Insert catchphrase here"`} />
                <TeamCard name="Member Name" role="Executive" quote={`"Insert catchphrase here"`} />
            </div>

            <div className="section-separator"></div>

            <h3 className="sub-section-header">Events</h3>
            <div className="team-grid">
                <TeamCard name="Member Name" role="Chairperson" quote={`"Insert catchphrase here"`} />
                <TeamCard name="Member Name" role="Vice Chairperson" quote={`"Insert catchphrase here"`} />
            </div>
            <div className="team-grid exec-row">
                <TeamCard name="Member Name" role="Executive" quote={`"Insert catchphrase here"`} />
                <TeamCard name="Member Name" role="Executive" quote={`"Insert catchphrase here"`} />
            </div>

            <div className="section-separator"></div>

            <h3 className="sub-section-header">Outreach</h3>
            <div className="team-grid">
                <TeamCard name="Member Name" role="Chairperson" quote={`"Insert catchphrase here"`} />
                <TeamCard name="Member Name" role="Vice Chairperson" quote={`"Insert catchphrase here"`} />
            </div>
            <div className="team-grid exec-row">
                <TeamCard name="Member Name" role="Executive" quote={`"Insert catchphrase here"`} />
                <TeamCard name="Member Name" role="Executive" quote={`"Insert catchphrase here"`} />
            </div>

            <div className="section-separator"></div>

            <h3 className="sub-section-header">Social Media</h3>
            <div className="team-grid">
                <TeamCard name="Member Name" role="Chairperson" quote={`"Insert catchphrase here"`} />
                <TeamCard name="Member Name" role="Vice Chairperson" quote={`"Insert catchphrase here"`} />
            </div>
            <div className="team-grid exec-row">
                <TeamCard name="Member Name" role="Executive" quote={`"Insert catchphrase here"`} />
                <TeamCard name="Member Name" role="Executive" quote={`"Insert catchphrase here"`} />
            </div>
        </div>
    );
};

export default Team;
