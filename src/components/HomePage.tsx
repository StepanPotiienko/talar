import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
} from "@ionic/react";
import React, { Children, ReactNode } from "react";

import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <h2>Welcome to Talar</h2>
      <h4>Master the languages as it is a walk in the park.</h4>
      <div id="languages">
        <LanguagesList>
          <LanguageSelector title="English" />
        </LanguagesList>
      </div>
    </div>
  );
};

const LanguagesList: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <IonList>{children}</IonList>;
};

const LanguageSelector: React.FC<{ title?: string }> = (props) => {
  return <div className="language-selector">{props.title}</div>;
};

export default HomePage;
