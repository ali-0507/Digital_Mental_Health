// import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0">
          &copy; {new Date().getFullYear()} MindWell. All rights reserved.
        </p>
        <ul className="list-unstyled d-flex gap-3 mb-0">
          <li>
            <Link to="/resources" className="text-white">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/peer-support" className="text-white">
              Peer Support
            </Link>
          </li>
          <li>
            <Link to="/booking" className="text-white">
              Book a Session
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
