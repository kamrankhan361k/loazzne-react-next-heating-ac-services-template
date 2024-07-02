import React from "react";
import Img from "./img";

const TeamCard = ({ data }) => {
  const { image, name, designation, social } = data;
  return (
    <div className="team_member">
      <Img src={image} alt={name} layout="responsive" />
      <div className="team_details">
        <h3>
          {name} <span className="skills">- {designation}</span>
        </h3>
        <ul className="team_socials">
          {social.map(({ icon, url }, index) => (
            <li key={index}>
              <a href={url}>
                <i className={`fa ${icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamCard;
