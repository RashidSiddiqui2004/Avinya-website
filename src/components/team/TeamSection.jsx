// TeamSection.js

import React from "react";

const TeamSection = ({ title, children }) => {
  return (
    <div className=" py-10 ">
      <div className=" section-title text-3xl lg:text-5xl text-center sm:text-2xl p-0">
        {title}
      </div>
      <div className=" flex  team-members-container ">
        <div className=" flex p-0 flex-container ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
