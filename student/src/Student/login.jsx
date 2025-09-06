// Login.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Login() {
  return (
    <>
      {/* Header */}
      <header className="bg-light shadow-sm">
        <div className="container d-flex align-items-center justify-content-between py-2">
          <a href="/home" className="navbar-brand fw-bold text-primary">
            Educa.
          </a>

          {/* Search Form */}
          <form className="d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Search courses..."
              maxLength="100"
              required
            />
            <button className="btn btn-primary ms-2">
              <i className="fas fa-search"></i>
            </button>
          </form>

          {/* Icons */}
          <div className="d-flex align-items-center gap-3">
            <i className="fas fa-bars fs-5"></i>
            <i className="fas fa-search fs-5"></i>
            <i className="fas fa-user fs-5"></i>
            <i className="fas fa-sun fs-5"></i>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="bg-dark text-white p-3 position-fixed vh-100" style={{ width: "250px", top: 0, left: 0 }}>
        <div className="d-flex justify-content-end">
          <i className="fas fa-times"></i>
        </div>
        <div className="text-center my-3">
          <img
            src="images/pic-1.jpg"
            alt="Profile"
            className="rounded-circle mb-2"
            width="80"
          />
          <h5>shaikh anas</h5>
          <p className="text-muted">student</p>
          <a href="/profile" className="btn btn-outline-light btn-sm">
            View Profile
          </a>
        </div>

        <nav className="nav flex-column mt-4">
          <a href="/home" className="nav-link text-white">
            <i className="fas fa-home me-2"></i> Home
          </a>
          <a href="/about" className="nav-link text-white">
            <i className="fas fa-question me-2"></i> About
          </a>
          <a href="/courses" className="nav-link text-white">
            <i className="fas fa-graduation-cap me-2"></i> Courses
          </a>
          <a href="/teachers" className="nav-link text-white">
            <i className="fas fa-chalkboard-user me-2"></i> Teachers
          </a>
          <a href="/contact" className="nav-link text-white">
            <i className="fas fa-headset me-2"></i> Contact Us
          </a>
        </nav>
      </aside>

      {/* Login Form */}
      <section className="d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-lg p-4" style={{ width: "400px" }}>
          <h3 className="text-center mb-4">Login Now</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Your Email <span className="text-danger">*</span></label>
              <input type="email" className="form-control" placeholder="Enter your email" required maxLength="50" />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Password <span className="text-danger">*</span></label>
              <input type="password" className="form-control" placeholder="Enter your password" required maxLength="20" />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login Now
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light text-center py-3 mt-5">
        &copy; copyright @ 2022 by{" "}
        <span className="fw-bold">mr. web designer</span> | all rights reserved!
      </footer>
    </>
  );
}
