import "./Navbar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
    const { toggle,darkMode } = useContext(DarkModeContext);
    const {currentUser, login} = useContext(AuthContext);
  return (
    <div className='navbar'>
        <div className="left">
            <Link to="/" style={{textDecoration:"none"}}>
                <span>ParaSocial</span>
            </Link>
            <HomeOutlinedIcon className="icon" />
            {darkMode ? (
                    <WbSunnyOutlinedIcon onClick={toggle} />
                ) : (
                    <DarkModeOutlinedIcon onClick={toggle} />
                )}
            <GridViewOutlinedIcon className="icon" />
            <div className="search">
                <SearchOutlinedIcon className="icon" />
                <input type="text" placeholder="Search for friends" />
            </div>

        </div>
        <div className="right">
            <PersonOutlineOutlinedIcon className="icon" />
            <EmailOutlinedIcon className="icon" />
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="user">
                <img src={currentUser.profilePic} alt="" className="userImg" />
                <span>{currentUser.name}</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar