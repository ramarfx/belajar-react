import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../context/totalPriceContext";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <table className="w-[90%] mx-auto text-left table-auto border-separate border-spacing-1">
      <thead>
        <tr className="border">
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id} className="border">
                <td>{product.title.substring(0, 20)}....</td>
                <td>
                  ${""}
                  {product.price.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </td>
                <td>{item.qty}</td>
                <td>
                  ${""}
                  {(item.qty * product.price).toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
            );
          })}
        <tr ref={totalPriceRef}>
          <td colSpan={3}>total price</td>
          <td>
            <b>
              ${""}
              {total.toLocaleString("id-ID", {
                styles: "currency",
                currency: "IDR",
              })}
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
