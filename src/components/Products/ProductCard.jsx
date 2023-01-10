import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAuth } from "../../contexts/authContext";
import { ADMIN } from "../../helpers/consts";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useProducts } from "../../contexts/productsContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ProductCard({ item }) {
  const navigate = useNavigate();

  const { addProductToCart, checkProductInCart } = useCart();
  const { deleteProduct } = useProducts();

  const {
    user: { email },
  } = useAuth();

  return (
    <Card
      sx={{
        width: 250,
        marginTop: "20px",
        marginLeft: "15px",
        marginBottom: "40px",
      }}
    >
      <CardMedia
        sx={{ height: "250px", cursor: "pointer" }}
        image={item.picture}
        title="green iguana"
        onClick={() => navigate(`/products/${item.id}`)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography
          sx={{ color: "green", fontWeight: "700" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {item.price} сом
        </Typography>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
          }}
          variant="body2"
          color="text.secondary"
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        {email == ADMIN ? (
          <>
            <button
              style={{
                border: "none",
                backgroundColor: "#e4002b",
                width: "70px",
                height: "30px",
                color: "white",
                borderRadius: "5px",
              }}
              onClick={() => deleteProduct(item.id)}
            >
              Delete
            </button>
            <button
              style={{
                border: "none",
                backgroundColor: "blue",
                width: "70px",
                height: "30px",
                color: "white",
                borderRadius: "5px",
              }}
              onClick={() => navigate(`/edit/${item.id}`)}
            >
              Edit
            </button>
          </>
        ) : (
          <button
            style={{ backgroundColor: "white", border: "none" }}
            utton
            onClick={() => addProductToCart(item)}
          >
            {checkProductInCart(item.id) ? (
              <>
                <ShoppingCartIcon sx={{ color: "brown" }} />
              </>
            ) : (
              <>
                <AddShoppingCartIcon />
              </>
            )}
          </button>
        )}
      </CardActions>
    </Card>
  );
}
