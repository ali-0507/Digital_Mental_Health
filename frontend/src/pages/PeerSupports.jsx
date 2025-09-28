import React from "react";
import PeerSupportBox from "../components/PeerSupportBox"; // adjust path if needed
import "./Home.css";

function PeerSupports() {
  return (
    <div className="peersupports">
      <h2 className="mb-4 text-center">Peer Support Forum</h2>
      <p className="text-muted text-center mb-4">
        Share your thoughts and experiences with the community.
        <br />
        This forum is moderated but not a substitute for professional help.
      </p>

      <div className="card p-4 shadow-sm">
        <PeerSupportBox />
      </div>
    </div>
  );
}

export default PeerSupports;