import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useAuth } from "../../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";
import { ADMIN, CONTACT } from "../../helpers/consts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../contexts/cartContext";
import CallIcon from "@mui/icons-material/Call";
import { Button } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const page = [
  {
    name: (
      <img
        style={{ width: "155px" }}
        src="https://www.kfc.kg/admin/files/5384.png"
      />
    ),
    link: "/halal",
    id: 1,
  },
];

const pages = [
  { name: "РЕСТОРАНЫ", link: "/contacts", id: 2 },
  { name: "МЕНЮ", link: "/products", id: 3 },
];

export default function Navbar() {
  const navigate = useNavigate();
  const { user, handleLogout } = useAuth();
  const { getCart, cart } = useCart();

  React.useEffect(() => {
    getCart();
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          handleMenuClose();
          navigate("/auth");
        }}
      >
        Профиль
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleLogout();
          handleMenuClose();
        }}
      >
        Выйти из Аккаунта
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box
      id="mainnav"
      sx={{
        flexGrow: 1,
        width: "100%",
      }}
    >
      <AppBar id="padd" sx={{ position: "fixed" }}>
        <Toolbar className="toolb">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          ></IconButton>
          <Link to="/">
            <Typography
              className="men"
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <img
                style={{ width: "80px", justifyContent: "center" }}
                src="https://nambafood.kg/image_by_id/75651"
              />
            </Typography>
          </Link>
          <Search></Search>
          {user.email == ADMIN ? (
            <Link
              style={{
                color: "black",
                justifyContent: "center",
                margin: "0 18px",
                textDecoration: "none",
              }}
              to="/admin"
            >
              ADMIN
            </Link>
          ) : null}
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              margin: "30px",
              paddingLeft: "450px",
            }}
          >
            {pages.map((item) => (
              <Link to={item.link} key={item.id}>
                <Typography
                  sx={{
                    color: "white",
                    backgroundColor: "#e4002b",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}
                >
                  <Button id="btn1">{item.name}</Button>
                </Typography>
              </Link>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              marginLeft: "0",
              marginTop: "6px",
            }}
          >
            {page.map((item) => (
              <Link to={item.link} key={item.id}>
                <Typography
                  sx={{
                    borderRadius: "3px",
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </Typography>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <img
              style={{ width: "20px" }}
              src="https://parspng.com/wp-content/uploads/2022/03/telephonepng.parspng.com-2-600x643.png"
              alt=""
            />
          </Box>
          <a style={{ marginBottom: "2px" }} href="tel:+996703783830">
            +996 (703) 78-38-30
          </a>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => navigate("/cart")}
            >
              <Badge badgeContent={cart?.products.length} color="error">
                <img
                  style={{ width: "20px" }}
                  src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
                  alt=""
                />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <img
                style={{ width: "30px" }}
                src="https://logodix.com/logo/1707088.png"
                alt=""
              />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
