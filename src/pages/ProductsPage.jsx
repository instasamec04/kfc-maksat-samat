import { Box, Grid } from "@mui/material";
import React from "react";
import ProductsList from "../components/Products/ProductsList";
import SideBar from "../components/Products/SideBar";

const ProductsPage = () => {
  return (
    <Box id="ss" className="aa" p={5}>
      <Grid container>
        <SideBar />
        <ProductsList />
      </Grid>
    </Box>
  );
};

export default ProductsPage;
