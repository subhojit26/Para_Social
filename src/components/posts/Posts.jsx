import "./Posts.scss"
import Post from "../post/Post"

const Posts = () => {
  const posts = [
    {
        id: 1,
        name: "Safak Kocaoglu",
        userId: 1,
        profilePic: "https://images.pexels.com/photos/3991140/pexels-photo-3991140.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Never give up",
        img:"https://images.pexels.com/photos/3991140/pexels-photo-3991140.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 2,
        name: "Janell Shrum",
        userId: 2,
        profilePic: "https://images.pexels.com/photos/3991140/pexels-photo-3991140.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Never give up",
        img:"https://images.pexels.com/photos/3991140/pexels-photo-3991140.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 3,
        name: "Alex Durden",
        userId: 3,
        profilePic: "https://images.pexels.com/photos/3991140/pexels-photo-3991140.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Never give up",
        img:"https://images.pexels.com/photos/3991140/pexels-photo-3991140.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 4,
        name: "Dora Hawks",
        userId: 4,
        profilePic: "https://images.pexels.com/photos/3991140/pexels-photo-3991140.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Never give up",
        img:"https://images.pexels.com/photos/3991140/pexels-photo-3991140.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 5,
        name: "Thomas Holden",
        userId: 5,
        profilePic: "https://images.pexels.com/photos/3991140/pexels-photo-3991140.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Never give up",
        img:"https://images.pexels.com/photos/3991140/pexels-photo-3991140.jpeg?auto=compress&cs=tinysrgb&w=600",
    }

  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id}/>
        ))}
    </div>
  )
}

export default Posts