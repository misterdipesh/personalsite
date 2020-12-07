import React from "react";
import { Timeline, Events, ImageEvent } from "@merc/react-timeline";


import L_team1 from "../../assets/img/projects/team.webp";
import L_team2 from "../../assets/img/projects/team1.webp";
import L_team3 from "../../assets/img/projects/team2.webp";
import L_team4 from "../../assets/img/projects/team3.webp";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">OUR TEAM</h1>
      <Timeline>
        <Events>

          <ImageEvent date="CODE CAMP 2019" className="text-center" text="My team" src={L_team4}>
           
           
          </ImageEvent>


          <ImageEvent date="CODE CAMP 2019" className="text-center" text="Jayu and Lokraj"src={L_team1}>
           
          </ImageEvent>



          <ImageEvent date="CODE CAMP 2019" className="text-center" text="Me and Lokraj" src={L_team2}>
            
          </ImageEvent>

       

          <ImageEvent date="CODE CAMP 2019" className="text-center" text="My team" src={L_team3}>
            
          </ImageEvent>

        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
