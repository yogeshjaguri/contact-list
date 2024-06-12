import React from "react";
import { Link } from "react-router-dom";
import { MdContactPhone } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning py-2">
      <div className="container-fluid justify-content-center">
        <Link to="/" className="navbar-brand font-weight-bold ">
          <MdContactPhone /> contact list app
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
