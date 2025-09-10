// import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="text-center py-5">
        <h1 className="fw-bold mb-3">Welcome to MindWell</h1>
        <p className="lead mb-4">
          Your Digital Mental Health & Psychological Support System for Students
        </p>
        <Link to="/screening" className="btn btn-primary btn-lg">
          Start Screening
        </Link>
      </section>

      {/* Features Section */}
      <section className="row g-4 my-5">
        <div className="col-md-4">
          <div className="card h-100 p-3 text-center">
            <span className="material-icons fs-1 text-primary">psychology</span>
            <h5 className="mt-3">AI First-Aid Support</h5>
            <p>Interactive chatbot for instant mental health support.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 p-3 text-center">
            <span className="material-icons fs-1 text-success">event</span>
            <h5 className="mt-3">Confidential Booking</h5>
            <p>Book private sessions with campus counselors securely.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 p-3 text-center">
            <span className="material-icons fs-1 text-info">menu_book</span>
            <h5 className="mt-3">Resource Hub</h5>
            <p>Access relaxation audios, guides, and educational content.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center my-5">
        <h3 className="fw-bold mb-3">Need Immediate Help?</h3>
        <p>
          Reach out to your college counselor or national mental health
          helpline.
        </p>
        <a href="tel:1800-599-0019" className="btn btn-danger btn-lg">
          Call Helpline
        </a>
      </section>
    </div>
  );
}

export default Home;
