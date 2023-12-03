import "./ExploreContainer.css";

import HomePage from "./HomePage";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <HomePage></HomePage>
    </div>
  );
};

export default ExploreContainer;
