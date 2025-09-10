import React, { useState } from "react";

function PeerSupport() {
  const [posts, setPosts] = useState([
    { user: "Student A", text: "Feeling stressed about exams 😓" },
    { user: "Student B", text: "Meditation helped me a lot!" },
  ]);
  const [newPost, setNewPost] = useState("");

  const handlePost = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    setPosts([...posts, { user: "Anonymous", text: newPost }]);
    setNewPost("");
  };

  return (
    <div className="peer-support">
      <h2 className="mb-4 text-center">Peer Support Forum</h2>
      <p className="text-muted text-center mb-4">
        Share your thoughts and experiences. Be respectful and supportive.
      </p>

      <div className="mb-4">
        <form onSubmit={handlePost} className="d-flex gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Share something..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </form>
      </div>

      <div className="list-group">
        {posts.map((post, i) => (
          <div key={i} className="list-group-item">
            <strong>{post.user}:</strong> {post.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PeerSupport;
