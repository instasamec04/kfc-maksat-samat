import React, { createContext, useContext, useReducer } from "react";
import { CART } from "../helpers/consts";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/functions";

const cratContext = createContext();

export const useCart = () => {
  return useContext(cratContext);
};

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")), //  то что хранится в локал стораже
  cartLength: getCountProductsInCart(), // длина корзины
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CART.GET_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //  функция для получения всех данных в корзине
  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    // стягиваем и переводим в обычный формат
    if (!cart) {
      // если в корзине нисего нет
      localStorage.setItem(
        "cart",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    dispatch({
      // меняем глобальное состояние
      type: CART.GET_CART,
      payload: cart,
    });
  };

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product, // сам продукт
      count: 1, // количество
      subPrice: +product.price, // сумма за определенное количество продуктов
    };

    let productToFind = cart.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length == 0) {
      // если нет в корзине, то он добавляется
      cart.products.push(newProduct);
    } else {
      // если есть  то продукты удаляются из корзины
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }

    cart.totalPrice = calcTotalPrice(cart.products);
    // вычитывает общая стоимость

    localStorage.setItem("cart", JSON.stringify(cart));
    // обновляется локал сторэдж

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  const checkProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      let newCart = cart.products.filter((elem) => elem.item.id === id);
      return newCart.length > 0 ? true : false;
    } else {
      cart = {
        product: [],
        totalPrice: 0,
      };
    }
  };

  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((product) => {
      if (product.item.id == id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };
  function deleteCartProduct(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
    dispatch({
      type: CART.GET_CART_LENGTH,
      payload: cart,
    });
  }

  let values = {
    changeProductCount,
    deleteCartProduct,
    checkProductInCart,
    getCart,
    addProductToCart,
    cart: state.cart,
  };

  return <cratContext.Provider value={values}>{children}</cratContext.Provider>;
};

export default CartContextProvider;
