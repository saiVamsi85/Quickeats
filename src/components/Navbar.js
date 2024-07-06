import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Cart from '../screens/Cart';
import Modal from '../Modal';
import { useCart } from '../components/ContextReducer.js'; // Adjust the import path as needed

export default function Navbar() {
  const data = useCart();
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  if (!Array.isArray(data)) {
    console.error('Cart data is not an array:', data);
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 text-info fst-italic fw-bold" to="/">
          QuickEats
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <Link className="nav-link active mt-3 fs-6 " aria-current="page" to="/">
                Home
              </Link>
            </li>
            {localStorage.getItem('authToken') && (
              <li className="nav-item">
                <Link className="nav-link active mt-3 fs-6" aria-current="page" to="/myOrder">
                  My Orders
                </Link>
              </li>
            )}
          </ul>
          <div className="d-flex">
            {localStorage.getItem('authToken') ? (
              <div>
                <div
                  className="btn bg-success bg-gradient text-white mx-1 fw-bold"
                  onClick={() => setCartView(true)}
                >
                  My Cart{' '}
                  <Badge pill bg="danger" text="white">
                    {data.length}
                  </Badge>
                </div>
                {cartView && (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart />
                  </Modal>
                )}
                <div className="btn bg-danger text-white mx-1 fw-bold" onClick={handleLogOut}>
                  Logout
                </div>
              </div>
            ) : (
              <>
                <Link className="btn bg-success text-white mx-1 fw-bold" to="/login">
                  Login
                </Link>
                <Link className="btn bg-warning text-white mx-1 fw-bold" to="/createuser">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
