// TeamSection.js

import React from "react";

const TeamSection = ({ title, children }) => {
  return (
    <div className="py-10">
      <div className="section-title text-3xl lg:text-5xl text-center p-0">
        {title}
      </div>
      <div className="team-members-container">
        <div className="flex-container mb-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
