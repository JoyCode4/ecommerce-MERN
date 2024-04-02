import React from "react";
import Cart from "../features/cart/Cart";

export default function CartPage() {
  return (
    <div>
      <Cart link={"/checkout"} name={"Checkout"} />
    </div>
  );
}
