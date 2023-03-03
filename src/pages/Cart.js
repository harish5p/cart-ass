import { useEffect } from "react";
import { CartCard } from "../components/CartCard"


export const Cart = () => {

  useEffect(() => {
    document.title = "Cart - Shopping Cart"
  });
  return (
    <div>

      <CartCard />
    </div>
  )
}
