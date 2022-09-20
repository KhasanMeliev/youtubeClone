import React from "react";
import { FooterWrapper } from "./Footer.style";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
const Footer = () => {
  return (
    <FooterWrapper>
      <AiOutlineHome />
      <AiOutlineSearch />
      <MdOutlineSubscriptions />
      <MdOutlineVideoLibrary />
    </FooterWrapper>
  );
};

export default Footer;
