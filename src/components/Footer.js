import React from "react";
import { Link } from "react-router-dom";
import { MdContactPhone } from "react-icons/md";

const Footer = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning py-2 footer">
      <div className="container-fluid justify-content-center">
        <Link to="/" className="navbar-brand font-weight-bold">
          <MdContactPhone /> contact list app yj@2024
        </Link>
      </div>
    </nav>
  );
};

export default Footer;
