/* eslint-disable no-unused-vars */
import { Footer, FooterCopyright } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsDribbble,
  BsFacebook,
  BsInstagram,
  BsTwitterX,
} from "react-icons/bs";
import logo from "../assets/logo.png";

function FooterCom() {
  return (
    <Footer
      container
      className="bg-[#005963] border border-t-8 border-[#005963]"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <img src={logo} alt="" className="w-28" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https:AJ.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Ajay
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Ajay
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="#t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="w-full sm:flex sm:items-center sm:justify-between py-12 text-white">
          <FooterCopyright
            href="#"
            by="Joyful Smile"
            year={new Date().getFullYear()}
            className="m-auto text-center font-bold text-medium"
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitterX} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterCom;
