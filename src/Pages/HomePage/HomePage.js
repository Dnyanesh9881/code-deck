import LeftContainer from "../../Components/Home/LeftContainer";
import RightContainer from "../../Components/Home/RightContainer";
import Modal from "../../Components/Modals/Modal";
import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="home-container">
      <LeftContainer />
      <RightContainer />
      <Modal />
    </div>
  );
};
export default HomePage;
