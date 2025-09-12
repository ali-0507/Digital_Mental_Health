// import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0">
          &copy; {new Date().getFullYear()} Connect&Evolve. All rights reserved.
        </p>
        <ul className="list-unstyled d-flex gap-4 mb-0 mr-2 socialm">
         
          <li className="fs-3">
            <Link className="text-white">
              <i class="fa-brands fa-instagram social-i"></i>
            </Link>
            <p className="fs-6 text-white">Instagram</p>
          </li>

          <li className="fs-3">
            <Link to="/peer-support" className="text-white">
              <i class="fa-brands fa-linkedin-in social-i"></i>
            </Link>
            <p className="fs-6 text-white">LinkedIn</p>
          </li>

          <li className="fs-3">
            <Link to="/booking" className="text-white">
              <i class="fa-regular fa-envelope social-i"></i>
            </Link>
            <p className="fs-6 text-white">Email</p>
          </li>

        </ul>
      </div>
    </footer>
  );
}

export default Footer;
