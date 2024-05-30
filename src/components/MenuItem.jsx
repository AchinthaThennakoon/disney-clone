import React from "react";

const MenuItem = ({ name, Icon }) => {
  return (
    <div className="flex flex-row items-center gap-3 cursor-pointer hover:underline underline-offset-8">
      <Icon />
      <span>{name}</span>
    </div>
  );
};

export default MenuItem;
