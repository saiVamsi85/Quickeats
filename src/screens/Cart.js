// cart.js

import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart, useDispatchCart } from "../components/ContextReducer.js";
import "../screens/Cart.css";

export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div className="container mt-3">
        <h3 className="text-center fs-3 fst-italic">Your Cart</h3>
        <hr />
        <div className="m-5 w-10 text-center fs-5 fst-italic">
          Oops!! Cart is Empty
        </div>
      </div>
    );
  }

  const handleCheckOut = async () => {
    try {
      const userEmail = localStorage.getItem("userEmail");
      const response = await fetch("http://localhost:5001/api/orderData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order_data: data, // Assuming data is your cart items array
          email: userEmail,
          order_date: new Date().toDateString()
        })
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log("Order placed successfully:", responseData);
        dispatch({ type: "DROP" }); // Clear cart after successful order
      } else {
        console.error("Failed to place order:", response.statusText);
      }
    } catch (error) {
      console.error("Error placing order:", error.message);
    }
  };

  let totalPrice = data.reduce((total, food) => total + food.price * food.qty, 0);

  return (
    <div>
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
        <table className="table table-hover">
          <thead className="text-success fs-4">
            <tr className="Headings">
              <th scope="col">S.no</th>
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price * food.qty}</td>
                <td>
                  <button
                    type="button"
                    className="btn p-0"
                    onClick={() => {
                      dispatch({ type: "REMOVE", index: index });
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="fs-2">Total Price : {totalPrice}/-</h1>
        </div>
        <div>
        <button className="checkout-button" onClick={handleCheckOut}>
  Check Out
</button>

        </div>
      </div>
    </div>
  );
}
