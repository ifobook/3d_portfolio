import React from 'react';

const SkillBar = ({ skill, percent }) => (
  <div className="mb-4 ">
    <div className="flex justify-between text-sm font-bold text-black dark:text-white mb-1">
      <span>{skill}</span>
      <span>{percent}%</span>
    </div>
    <div className="w-full h-3 bg-gray-300 rounded-full">
      <div
        className="h-full rounded-full bg-gradient-to-tr from-[#17EAD9] to-[#6078EA] "
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);

export default SkillBar;
