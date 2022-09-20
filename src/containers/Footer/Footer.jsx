import React from "react";
import { FooterWrapper } from "./Footer.style";
import { MdOutlineSubscriptions,MdOutlineVideoLibrary } from "react-icons/md";
import { AiOutlineHome, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
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
