import React from "react";

const Header = ({ course }) => {
  return (
    <div>
      <h3>{course.name}</h3>
    </div>
  );
};

export default Header;
