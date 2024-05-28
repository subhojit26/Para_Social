import "./Post.scss"
import { FavoriteBorderOutlined } from "@mui/icons-material"
import { FavoriteOutlined } from "@mui/icons-material"
import { TextsmsOutlined } from "@mui/icons-material"
import { ShareOutlined } from "@mui/icons-material"
import { MoreHoriz } from "@mui/icons-material"
import { Link } from "react-router-dom"
import Comments from "../comments/Comments"
import { useState } from "react"

const Post = ({post}) => {
    const [commentOpen, setCommentOpen] = useState(false)
    const liked=false;
  return (
    <div className='post'>
        <div className="container">
        <div className="user">
            <div className="userInfo">
                <img src={post.img} alt="" className="userImg" />
                <div className="details">
                    <Link to={`/profile/${post.userId}`} className="name" style={{textDecoration:"none", color:"inherit"}}>{post.name}</Link>
                    <span className="date">1 hour ago</span>
                </div>
            </div>

        </div>
        <div className="content">
            <span className="desc">{post.desc}</span>
            <img src={post.img} alt="" className="postImg" />
        </div>
        <div className="info">
            <div className="item">
                {liked ? <FavoriteOutlined className="icon like"/> : <FavoriteBorderOutlined className="icon like"/>}
                 12 Likes
            </div>
            <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                <TextsmsOutlined className="icon comment"/>
                    2 Comments
            </div>
            <div className="item">
                <ShareOutlined className="icon share"/>
                    Share
                
            </div>
        </div>
        {commentOpen && <Comments />}

        </div>
    </div>
  )
}

export default Post