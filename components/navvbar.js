"use client";
import Link from "next/link";
import styles from "../styles/style.css";
import { useState } from "react";
import "typeface-montserrat";
import 'fontsource-raleway';


function Navbar() {


  return (
    <>
      <div className="navbar" style={{ fontFamily: "Raleway, sans-serif" }}>
        <img src="/images/l11.png" />
        <h1 style={{ fontFamily: "Raleway, sans-serif" }}>Vision Vault</h1>
        <div className="nav-elemnts">
          <Link className="navbar-link" href={"/"}>
            Home
          </Link>
          <Link className="navbar-link" href={"/"}>
            Profile
          </Link>

          <div>
            <Link className="navbar-link" href={"/"}>
              Categories
            </Link>
          </div>

          <Link className="navbar-link" href={"/"}>
            Projects
          </Link>
          <Link className="navbar-link" href={"/"}>
            about
          </Link>
        </div>
        <div className="profilein">
          <Link href={"/"}>
                   <img id="userhome" src="/images/user.png" />

          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
