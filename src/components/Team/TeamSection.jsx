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

            {/* Display Heads if present */}
            {group.heads && (
              <div className="row" style={{marginBottom:"20px"}}>
                {group.heads.map((head, headIndex) => (
                  <div key={headIndex} style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                  <div  className="box">
                    <img src={head.image} alt={head.name} className="box-image" />
                  </div>
                   <div className="box-name">{head.name}</div>
                   </div>
                ))}
              </div>
            )}

            {/* Display Members */}
            <div className="row">
              {group.members.map((member, memberIndex) => (
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                <div key={memberIndex} className="box">
                  <img src={member.image} alt={member.name} className="box-image" />
                </div>
                  <div className="box-name">{member.name}</div>
                  </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
