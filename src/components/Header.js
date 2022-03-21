import React from "react";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { AppBar, Typography, Toolbar } from "@mui/material";

function Header() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Logo>
          <Link to="/margaritas">
            <img
              src="/logo.png"
              style={{ height: "100%" }}
              alt="margarita-logo"
            />
          </Link>
        </Logo>
        <div>
          <StyledHeader variant="h2" component="h1" sx={{ flexGrow: 1 }}>
            Margarita Mania
          </StyledHeader>
          <Typography variant="subtitle1" component="span">
            It's five o'clock right here!
          </Typography>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;

const StyledHeader = styled(Typography)(({ theme }) => ({
  color: "#C9DB4A", //theme.palette.primary.main,
  "-webkit-text-stroke": `1px ${theme.palette.primary.dark}`,
  "text-shadow": `-1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000`,
}));

const Logo = styled("div")(({ theme }) => ({
  height: "64px",
  marginRight: "16px",
}));

const StyledAppBar = styled(AppBar)({
  bgcolor: "primary.light",
  marginBottom: "24px",
});
