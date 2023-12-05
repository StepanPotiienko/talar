import React from "react";

import "./HomePage.css";

export const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const HomePage: React.FC = () => {
  return (
    <>
      <Greetings />
      <div id="scrollable-languages">
        <div style={{ overflowY: "visible", maxHeight: "30vh", padding: "3%" }}>
          <h4>Please choose a language you desire to learn: </h4>
          <LanguageSelector title="English" level="advanced" />
          <LanguageSelector title="Spanish" level="intermedia" />
          <LanguageSelector title="Finnish" level="beginner" />
          <LanguageSelector title="Estonian" level="business" />
        </div>
      </div>
    </>
  );
};

const Greetings: React.FC = () => {
  return (
    <div className="container">
      <h2>Welcome to Talar</h2>
      <h3>Master the languages as it is a walk in the park.</h3>
    </div>
  );
};

const LanguageSelector: React.FC<{
  title?: string;
  level?: string;
  linkToCource?: string;
}> = (props) => {
  const randomColor = getRandomColor();

  return (
    <div className="language-selector" style={{ backgroundColor: randomColor }}>
      <h3>{props.title}</h3>
      <h5>
        <i>
          For <b>{props.level}</b> learners.
        </i>
      </h5>
      <a href={props.linkToCource}>Click here to start learning!</a>
    </div>
  );
};

export default HomePage;
