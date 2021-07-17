import React from "react";

const Total = ({ course }) => {
  const exercis = course.parts.map((gat) => {
    console.log(gat);
    return gat.exercises;
  });

  const result = exercis.reduce((a, b) => {
    console.log(a, b);
    return a + b;
  });

  return <p>Number of exercises {result}</p>;
};

export default Total;
