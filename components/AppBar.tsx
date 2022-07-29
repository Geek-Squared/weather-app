import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Nav = () => {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#2196f3",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Weather Showcast
          </Typography>

          <Box sx={{ flexGrow: 0, ml: "auto" }}>
            <Typography variant="caption">
              A change in the weather is sufficient to recreate the world and
              ourselves.
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
