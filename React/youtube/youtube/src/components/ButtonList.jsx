import React from "react";
import Button from "./Button";
const List = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "News",
  "Movies",
  "Cooking",
  "Technology",
  "News",
  "Cricket",
  "News",
  "Movies",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {List.map((item, index) => (
        <Button key={index} name={item}></Button>
      ))}
    </div>
  );
};

export default ButtonList;
