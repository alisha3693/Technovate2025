import React from 'react';
import './TeamSection.css';
import teamData from '../../data/Team'; // Adjust the import path as needed

export default function TeamSection() {
  return (
    <div className="team-component">
      <div className="team-container">
        {teamData.map((group, index) => (
          <div key={index} className="team-group" id={`${group.groupName}`}>
            <h2 className="group-name">{group.groupName}</h2>

            {/* Heads Section */}
            {group.heads && group.heads.length > 0 && (
              <>
                <h2 className="group-name">Heads</h2>
                <div className="row" style={{ marginBottom: "20px" }}>
                  {group.heads.map((head, index) => (
                    <div
                      key={index}
                      className="team-member"
                    >
                      <div className="box">
                        <img src={head.image} alt={head.name} className="box-image" />
                      </div>
                      <div className="box-name">{head.name}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Senior Team Section */}
            {group.seniormembers && group.seniormembers.length > 0 && (
              <>
                <h2 className="group-name">Senior Team</h2>
                <div className="row">
                  {group.seniormembers.map((member,index) => (
                    <div
                      key={index}
                      className="team-member"
                    >
                      {/* <div className="box">
                        <img src={member.image} alt={member.name} className="box-image" />
                      </div> */}
                      <div className="box-name">{member.name}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Junior Team Section */}
            {group.members && group.members.length > 0 && (
              <>
                <h2 className="group-name">Junior Team</h2>
                <div className="row">
                  {group.members.map((member, index) => (
                    <div
                      key={index}
                      className="team-member"
                    >
                      {/* <div className="box">
                        <img src={member.image} alt={member.name} className="box-image" />
                      </div> */}
                      <div className="box-name">{member.name}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
