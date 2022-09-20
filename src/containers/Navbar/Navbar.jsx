import React from "react";
import { Box, Logo, NavbarWrapper, ProfileItems } from "./Navbar.style";
import { FaYoutube, FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo>
        <FaYoutube />
        <p>YouTube</p>
      </Logo>
      <ProfileItems>
        <FaSearch />
        <Box></Box>
      </ProfileItems>
    </NavbarWrapper>
  );
};

export default Navbar;
