import React from "react";

const Part = ({ name, exercises }) => {
  console.log(name, exercises);
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  );
};

const Content = ({ course }) => {
  console.log(course);
  return (
    <div>
      {course.parts.map((elem) => (
        <Part key={elem.id} name={elem.name} exercises={elem.exercises} />
      ))}
    </div>
  );
};

export default Content;
