import { ProductInterface } from "@/services/getProducts";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface CardContextInterface {
  cart: ProductInterface[];
  addProduct: (product: ProductInterface) => void;
  removeProduct: (productId: number) => void;
}

export const CartContext = createContext<CardContextInterface>(
  {} as CardContextInterface
);

export const CardContextProvider = (props: { children?: ReactNode }) => {
  const [cart, setCart] = useState<ProductInterface[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("shopping-cart");

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addProduct = (product: ProductInterface) => {
    const updatedCart = [...cart, product];
    localStorage.setItem("shopping-cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const removeProduct = (productId: number) => {
    const productIndex = cart.findIndex((product) => product.id === productId);

    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(productIndex, 1);
      localStorage.setItem("shopping-cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
