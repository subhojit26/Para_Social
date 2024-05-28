import "./leftBar.scss";
import People from "../../assets/people.png"
import Group from "../../assets/multiple-users-silhouette.png"
import Market from "../../assets/delivery.png"
import Watch from "../../assets/wallclock.png"
import Memories from "../../assets/memory.png"
import Events from "../../assets/calendar.png"
import gaming from "../../assets/gaming.png"
import gallery from "../../assets/gallery.png"
import video from "../../assets/video.png"
import message from "../../assets/chat.png"
import fund from "../../assets/funding.png"
import tutorial from "../../assets/video-tutorials.png"
import courses from "../../assets/online-education.png"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";



const LeftBar = () => {
    const {currentUser} = useContext(AuthContext);
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
        <div className="user">
          <img
            src={currentUser.profilePic}
            alt=""
            className="userImg"
          />
          <span>{currentUser.name}</span>
        </div>
        <div className="item">
            <img src={People} alt="" className="icon" />
            <span>Friends</span>
        </div>
        <div className="item">
            <img src={Group} alt="" className="icon" />
            <span>Groups</span>
        </div>
        <div className="item">
            <img src={Market} alt="" className="icon" />
            <span>Marketplace</span>
        </div>
        <div className="item">
            <img src={Watch} alt="" className="icon" />
            <span>Watch</span>
        </div>
        <div className="item">
            <img src={Memories} alt="" className="icon" />
            <span>Memories</span>
        </div>
        </div>
        <hr />
        <div className="menu">
            <span>Your Shortcuts</span>
            <div className="item">
                <img src={Events} alt="" className="icon" />
                <span>Events</span>
            </div>
            <div className="item">
                <img src={gaming} alt="" className="icon" />
                <span>Gaming</span>
            </div>
            <div className="item">
                <img src={gallery} alt="" className="icon" />
                <span>Gallery</span>
            </div>
            <div className="item">
                <img src={video} alt="" className="icon" />
                <span>Video</span>
            </div>
            <div className="item">
                <img src={message} alt="" className="icon" />
                <span>Message</span>
            </div>
        </div>
        <hr/>
        <div className="menu">
            <span>Others</span>
            <div className="item">
                <img src={fund} alt="" className="icon" />
                <span>Fund</span>
            </div>
            <div className="item">
                <img src={tutorial} alt="" className="icon" />
                <span>Tutorial</span>
            </div>
            <div className="item">
                <img src={courses} alt="" className="icon" />
                <span>Courses</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
