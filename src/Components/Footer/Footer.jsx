import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/himu-kitechen.png";

const Footer = () => {
  return (
    <>
      <footer className="footer p-6 mt-4 bg-base-200 text-base-content">
        <div>
          <img src={logo} alt="Himu Kitchen" style={{ width: "5rem" }} />
          <p>
            Himu Kitchen
            <br />
            Himu kitchen providing reliable food service for you
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
