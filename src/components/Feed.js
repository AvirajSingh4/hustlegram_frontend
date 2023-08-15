import React, {useState} from 'react';
import  "./Home.css";
import Sugesstions from './Sugesstions';
import Post from './Post';

function Feed() {
  const [posts, setPosts] = useState([
    {
        user: "vicky",
        postImage: "https://imageio.forbes.com/specials-images/imageserve/601c20336927340c1d155f1f/0x0.jpg?format=jpg&width=1200",
        likes:108,
        timestamp:"just now",
    },
    {
        user: "fitgirl",
        postImage: "https://www.aboutbiography.com/wp-content/uploads/2021/07/156636504_463615174765501_6813695810209144297_n1-768x960.jpg",
        likes:122,
        timestamp:"2h ago",
    },
    {
        user: "s1_official",
        postImage: "https://th.bing.com/th/id/OIP.e1vSzaTtO2ZTKjXIzfCaRQHaE8?w=237&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        likes:58,
        timestamp:"1d ago",
    },
    {
        user: "badBoiii",
        postImage: "https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863",
        likes:98,
        timestamp:"17min ago",
    },
  ]);

  return (
    <div className="feed">
      <div className="feed_left">
        <div className="feed_post">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="feed_right">
        <Sugesstions />
      </div>
    </div>
  )
}

export default Feed;