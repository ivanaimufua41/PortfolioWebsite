import React from "react";
import Picture from "../../assets/profilepic.JPG";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import "./Landingpage.css";

const landingPage = props => (
  <div className="card-wrapper">
    <div className="card">
      <div className="front side">
        <h1 className="logo">Ivan Aimufua</h1>
        <div>
          <h2 className="title">
            {" "}
            Full Stack Developer || Technology Enthusiast || Wrestling Lover || Fitness Fanatic 
          </h2>
        </div>
      </div>
      <div className="back side">
        <div className="card-picture">
          <img
            src={Picture}
            alt="profilepicture"
            style={{
              width: "95 %",
              height: "300px",
              borderRadius: '10px',
            }}
          />
        </div>
        <div className="info">
          <p><span className="property">Name:</span>Ivan Aimufua</p>
          <p>
            <span className="property">Email:</span>
            ivanaimufua41@gmail.com
          </p>
          <p>
            <span className="property">Phone Number:</span>
            (780)995-0025
          </p>
          <div>
              <SocialIcons />
          </div>
        </div>
    
      </div>
    </div>
  </div>
);

export default landingPage;
