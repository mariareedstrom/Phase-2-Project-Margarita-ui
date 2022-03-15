import React from "react";
import styled from "styled-components";
import { AppBar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="static">
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Margarita Mania
      </Typography>

      <h3>It's five o'clock right here!</h3>
    </AppBar>
  );
}

export default Header;
