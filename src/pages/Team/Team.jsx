import React from "react";
import "./Team.css";
import BG from '../../assets/Images/Bg/TeamPageBG.png';
import teamData from "../../data/Team";
import ResponsiveDrawer from "../../components/Team/Sidebar";
import TeamSection from "../../components/Team/TeamSection";

export default function Team() {
  return (
    <div className="team-page">
      <img src={BG} alt="Background" />
      <ResponsiveDrawer/>
      <div className="team-content">
        <TeamSection/>
      </div>
    </div>
  );
}
