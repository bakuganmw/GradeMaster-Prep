import NavbarElement from "../components/Navbar";
import "./MainPage.css";
import Video from "../videos/background.mp4";

const MainPage = () => {
  return (
    <div className="App">
      <NavbarElement />
      <div className="mainLook">
        <video
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
          className="videoLook"
        ></video>
      </div>
      <div className="headerContent">
        <h1>value</h1>
        <p></p>
        <div>
          <button>value</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
