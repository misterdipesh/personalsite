import React from "react";
import { Timeline, Events, ImageEvent } from "@merc/react-timeline";


import L_GetGitHubInfo from "../../assets/img/projects/team.webp";
import L_SmartBrain from "../../assets/img/projects/team1.webp";
import L_RoboFriends from "../../assets/img/projects/team2.webp";
import L_ProductHuntClone from "../../assets/img/projects/team3.webp";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">OUR TEAM</h1>
      <Timeline>
        <Events>

          <ImageEvent date="My team" className="text-center" text="" src={L_GetGitHubInfo} alt="Get GitHub Info">
           
           
          </ImageEvent>


          <ImageEvent date="Jayu and Lokraj" className="text-center" text="" src={L_SmartBrain} alt="Smart Brain Face Detect">
           
          </ImageEvent>



          <ImageEvent date="Me and Lokraj" className="text-center" text="" src={L_RoboFriends} alt="Robo Friends">
            
          </ImageEvent>

       

          <ImageEvent date="My team" className="text-center" text="" src={L_ProductHuntClone} alt="Product Hunt Clone">
            
          </ImageEvent>

        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
