import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
// import AboutUs from "../AboutUs/AboutUs";

const AboutUsMain = () => {
  return (
    <div id="Auth1">
      <Box id="Auth2">
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            // width: "288.5px",
          }}
        >
          Как курица стала KFC
        </Typography>
        <Link to="aboutus">
          <Button
            id="btbtn"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#E4002B",
              width: "283.5px",
              height: "49px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Узнайте о нашей истории
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default AboutUsMain;
