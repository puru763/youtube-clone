import React from "react";
import { Stack } from "@mui/material";
import { Link, link } from "react-router-dom";
import { logo } from "../utils/constants.js";
import SearchBar from "./SearchBar.jsx";

const Navbar = () => (
  <Stack direction="row" alignItems="center"p={2}  sz={{position: "sticky", background: "#000", top: 0,justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItem: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <SearchBar />
    </Link>
  </Stack>
);

export default Navbar;
