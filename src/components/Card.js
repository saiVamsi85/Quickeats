// card.js

import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "../components/ContextReducer.js";

export default function Card(props) {
  const dispatch = useDispatchCart();
  const data = useCart();
  const priceRef = useRef();
  const options = props.options;
  const priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    const finalPrice =  parseInt(options[size]);
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
      img: props.foodItem.img,
    });
    // await console.log(data);
  };

  useEffect(() => {
    setSize(priceOptions[0]); // Initialize size with the first option
  }, []);

  return (
    <div>
      <div>
        <div className="card mt-3" style={{ width: "17rem", maxHeight: "490px" }}>
          <img
            src={props.foodItem.img}
            className="card-img-top"
            alt="..."
            style={{ height: "180px", objectFit: "fill" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <p className="card-text">{props.foodItem.description}</p>

            <div className="container w-100">
              <select
                className="m-2 h-100 bg-warning rounded"
                onChange={(e) => setQty(parseInt(e.target.value))}
              >
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <select
                className="m-2 h-100 bg-warning rounded"
                ref={priceRef}
                onChange={(e) => setSize(e.target.value)}
                value={size}
              >
                {priceOptions.map((data) => (
                  <option key={data} value={data}>
                    {data}
                  </option>
                ))}
              </select>

              <div className="d-inline h-100 fs-5">₹{qty * parseInt(options[size])}</div>
            </div>
            <hr />
            <button
              className="btn btn-success text-white justify-content ms-2 fw-bold"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
