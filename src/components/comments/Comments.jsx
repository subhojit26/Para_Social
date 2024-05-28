import "./Comments.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const Comments = () => {
    const {currentUser} = useContext(AuthContext);
    const comments = [
        {
            id: 1,
            desc: "Never give up",
            userId: 1,
            name: "Safak Kocaoglu",
            profilePicture: "https://images.pexels.com/photos/3991140/pexels-photo-3991140.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 2,
            desc: "Never give up",
            userId: 2,
            name: "Janell Shrum",
            profilePicture: "https://images.pexels.com/photos/3991140/pexels-photo-3991140.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];
  return (
    <div className="comments">
        <div className="write">
        <img src={currentUser.profilePic} alt={currentUser.name} className="img" />
        <input type="text" placeholder="Write a comment..." />
        <button>Post</button>
        </div>
        {comments.map((comment)=>(
            <div className="comment">
                <img src={comment.profilePicture} alt={comment.name} className="img" />
                <div className="info">
                    <span className="name">{comment.name}</span>
                    <p className="desc">{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
        ))}
        
    </div>
  )
}

export default Comments