import React from "react";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Login from "./Login";
import { useSelector } from "react-redux";

export default function Navbar({ isLogin, onLogin, onLogout }) {
  const cartdata = useSelector((state) => state.cart.data);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary bg-success fixed-top shadow-lg">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand fs-3">
            ShopDude
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <Link to="/" className="nav-link">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  ShopDude
                </h5>
              </Link>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 flex-end">
                <li className="nav-item">
                  <NavLink className="nav-link fs-5" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fs-5" to="/products">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fs-5" to="/categories">
                    Categories
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fs-5" to="/cart">
                    <i className="bi bi-cart3 position-relative"><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartdata.length}
  <span className="visually-hidden">unread messages</span>
</span>
</i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Login isLogin={isLogin} onLogin={onLogin} onLogout={onLogout} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="{-1}" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content bg-dark text-white">
      <div className="modal-header">
        <h1 className="modal-title offset-5 fs-5" id="staticBackdropLabel">
          Login
        </h1>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close">
        </button></div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlfor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlfor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlfor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary offset-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
