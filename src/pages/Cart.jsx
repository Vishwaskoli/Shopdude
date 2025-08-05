import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removetocart, increaseQuantity, decreaseQuantity } from "../redux/slice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cart.data);

  return (
    <div>
      <section>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0">Shopping Cart</h3>
              </div>
              {cartdata.map((props) => (
                <div className="card bg-success-subtle rounded-3 mb-4" key={props.id}>
                  <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                          src={props.thumbnail}
                          className="img-fluid rounded-3"
                          alt={props.title}
                        />
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{props.title}</p>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <span className="fw-bold mb-1">Qty:</span>
                        <button
                          className="btn btn-link px-2"
                          onClick={() => dispatch(decreaseQuantity({ id: props.id }))}
                        >
                          <i className="bi bi-dash"></i>
                        </button>
                        <input
                          min={1}
                          name="quantity"
                          value={props.quantity}
                          type="number"
                          className="form-control form-control-sm"
                          readOnly
                        />
                        <button
                          className="btn btn-link px-2"
                          onClick={() => dispatch(increaseQuantity({ id: props.id }))}
                        >
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">₹{(props.price * props.quantity).toFixed(2)}</h5>
                        <button
                          onClick={() => dispatch(removetocart(props))}
                          className="btn btn-danger"
                        >
                          <i className="bi bi-trash fs-4"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {cartdata.length > 0 && (
                <div className="card bg-success-subtle mb-4">
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">Total Amount:</h4>
                    <h4 className="mb-0">
                      $
                      {(cartdata.reduce(
                        (sum, item) => sum + Number(item.price) * item.quantity,
                        0
                      )).toFixed(2)}
                    </h4>
                  </div>
                </div>
              )}

              <div className="card bg-success-subtle">
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-warning btn-block btn-lg"
                  >
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}