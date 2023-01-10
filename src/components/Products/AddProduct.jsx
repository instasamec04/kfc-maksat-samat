import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/productsContext";

const AddProduct = () => {
  const navigate = useNavigate();
  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    type: "",
  });

  console.log(product);

  return (
    <Box
      sx={{
        width: "60vw",
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "150px",
        paddingLeft: "500px",
      }}
    >
      <TextField
        fullWidth
        id="outlined-basic"
        label="Название"
        variant="outlined"
        name="name"
        value={product.name}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Описание"
        variant="outlined"
        name="description"
        value={product.description}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, description: e.target.value }))
        }
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Цена"
        variant="outlined"
        name="price"
        value={product.price}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, price: e.target.value }))
        }
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Фото"
        variant="outlined"
        name="picture"
        value={product.picture}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, picture: e.target.value }))
        }
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Тип"
        variant="outlined"
        name="type"
        value={product.type}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, type: e.target.value }))
        }
      />
      <Button
        onClick={() => {
          addProduct(product);
          navigate("/products");
        }}
        variant="outlined"
        fullWidth
        size="large"
      >
        CREATE PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
