import "./Stories.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const Stories = () => {
    const {currentUser} = useContext(AuthContext);
    const stories = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/3991140/pexels-photo-3991140.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "SafakKocaoglu",
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/3991140/pexels-photo-3991140.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Janell Shrum",
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/3991140/pexels-photo-3991140.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Alex Durden",
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/3991140/pexels-photo-3991140.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Dora Hawks",
        },
        {
            id: 5,
            img: "https://images.pexels.com/photos/3991140/pexels-photo-3991140.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Thomas Holden",
        },
        
        
    ];
  return (
    <div className="stories">
        <div className="story">
            <img src={currentUser.profilePic} alt={currentUser.name} className="img" />
            <span className="name">{currentUser.name}</span>
            <button>+</button>
        </div>
        {stories.map((story) => (
            <div key={story.id} className="story">
                <img src={story.img} alt
                ={story.name} className="img" />
                <span className="name">{story.name}</span>
            </div>
        ))}

    </div>
  )
}

export default Stories