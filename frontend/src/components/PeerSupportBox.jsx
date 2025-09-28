import React, { useState } from "react";

function PeerSupportBox() {
  const [posts, setPosts] = useState([
    { type: "Anonymous User", content: "Struggling with exam stress, anyone have tips?" },
    { type: "Volunteer Moderator", content: "Deep breathing exercises have helped me, let's discuss!" },
  ]);

  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (newPost.trim() !== "") {
      setPosts([...posts, { type: "Anonymous User", content: newPost }]);
      setNewPost("");
    }
  };

  return (
    <div className="peer-box">
      <div className="post-form mb-4">
        <textarea
          className="w-full border p-2 rounded"
          placeholder="How are you feeling today?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handlePost}>
          Post
        </button>
      </div>

      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post border-b py-2">
            <strong>{post.type}:</strong> {post.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PeerSupportBox;