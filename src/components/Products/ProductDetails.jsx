import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/productsContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useProducts();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  return (
    <Paper xs={{ m: 3 }} elevation={24}>
      <Grid sx={{ marginTop: "100px" }} container spacing={2}>
        <Grid item xs={6}>
          <img src={oneProduct.picture} style={{ width: "600px" }} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3">{oneProduct.name}</Typography>
          <Typography variant="subtitle1">{oneProduct.type}</Typography>
          <Typography variant="caption">{oneProduct.price}сом </Typography>
          <Typography variant="caption">{oneProduct.description}</Typography>
          <Box>
            <Button variant="outlined">Заказать</Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductDetails;
