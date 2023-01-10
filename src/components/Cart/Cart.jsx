import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCart } from "../../contexts/cartContext";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PayPay from "./PayPay";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  return (
    <TableContainer
      sx={{ paddingTop: "130px", backgroundColor: "white" }}
      component={Paper}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Picture</StyledTableCell>
            <StyledTableCell align="right">Название</StyledTableCell>
            <StyledTableCell align="right">Тип</StyledTableCell>
            <StyledTableCell align="right">Описание</StyledTableCell>
            <StyledTableCell align="right">Цена</StyledTableCell>
            <StyledTableCell align="right">- Товар +Товар</StyledTableCell>
            <StyledTableCell align="right">Общая цена</StyledTableCell>
            <StyledTableCell align="right">Удалить</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.products.map((row) => (
            <StyledTableRow key={row.item.id}>
              <StyledTableCell component="th" scope="row">
                <img src={row.item.picture} width="70px" height="70px" alt="" />
              </StyledTableCell>
              <StyledTableCell align="right">{row.item.name}</StyledTableCell>
              <StyledTableCell align="right">{row.item.type}</StyledTableCell>
              <StyledTableCell align="right">
                {row.item.description}
              </StyledTableCell>
              <StyledTableCell align="right">{row.item.price}</StyledTableCell>
              <StyledTableCell align="right">
                <input
                  type="number"
                  min={1}
                  max={1000}
                  value={row.cou}
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                />
              </StyledTableCell>
              <StyledTableCell align="right">{row.subPrice}</StyledTableCell>
              <StyledTableCell align="right">
                <Button onClick={() => deleteCartProduct(row.item.id)}>
                  <DeleteIcon sx={{ color: "#E4002b" }} />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Link to="/pay" sx={{ paddingTop: "20px" }} onClick={cartCleaner}>
        <button
          style={{
            height: "25px",
            border: "2px white",
            backgroundColor: "#e4002b",
            color: "white",
            borderRadius: "3px",
          }}
        >
          BUY NOW FOR {cart?.totalPrice}сом
        </button>
      </Link>
    </TableContainer>
  );
}
