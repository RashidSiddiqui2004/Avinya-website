// TeamSection.js

import React from "react";

const TeamSection = ({ title, children }) => {
  return (
    <div className=" py-10 ">
      <div className=" section-title text-3xl lg:text-5xl text-center sm:text-2xl p-5">
        {title}
      </div>
      <div >
      <div className=" flex  team-members-container p-0 ">
        <div className=" flex p-0 flex-container ">
          {children}
        </div>
      </div>
      </div>
    </div>
  );
};

export default TeamSection;
