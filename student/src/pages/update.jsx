// src/pages/UpdateProfile.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function UpdateProfile() {
  return (
    <div>
      {/* Header */}
      <header className="bg-light border-bottom shadow-sm">
        <div className="container d-flex align-items-center justify-content-between py-2">
          <a href="/home" className="fw-bold fs-4 text-decoration-none text-primary">
            Educa.
          </a>

          {/* Search Form */}
          <form className="d-flex" action="/search" method="post">
            <input
              type="text"
              name="search_box"
              className="form-control me-2"
              placeholder="Search courses..."
              maxLength="100"
              required
            />
            <button type="submit" className="btn btn-outline-primary">
              <i className="bi bi-search"></i>
            </button>
          </form>

          {/* Icons */}
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-list fs-4"></i>
            <i className="bi bi-search fs-4"></i>
            <i className="bi bi-person fs-4"></i>
            <i className="bi bi-sun fs-4"></i>
          </div>

          {/* Profile */}
          <div className="d-none d-md-block text-center ms-3">
            <img
              src="images/pic-1.jpg"
              alt="profile"
              className="rounded-circle mb-2"
              width="50"
              height="50"
            />
            <h6 className="mb-0">Shaikh Anas</h6>
            <small className="text-muted">Student</small>
            <div>
              <a href="/profile" className="btn btn-sm btn-primary mt-2">
                View Profile
              </a>
            </div>
            <div className="mt-2">
              <a href="/login" className="btn btn-sm btn-outline-secondary me-2">
                Login
              </a>
              <a href="/register" className="btn btn-sm btn-outline-secondary">
                Register
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="bg-dark text-white p-3 vh-100" style={{ width: "220px" }}>
        <div className="text-center mb-4">
          <img
            src="images/pic-1.jpg"
            alt="profile"
            className="rounded-circle mb-2"
            width="70"
            height="70"
          />
          <h6>Mani Kanta</h6>
          <small>Student</small>
          <div>
            <a href="/profile" className="btn btn-sm btn-primary mt-2">
              View Profile
            </a>
          </div>
        </div>
        <nav className="nav flex-column">
          <a className="nav-link text-white" href="/home">
            <i className="bi bi-house me-2"></i>Home
          </a>
          <a className="nav-link text-white" href="/about">
            <i className="bi bi-question-circle me-2"></i>About
          </a>
          <a className="nav-link text-white" href="/courses">
            <i className="bi bi-mortarboard me-2"></i>Courses
          </a>
          <a className="nav-link text-white" href="/teachers">
            <i className="bi bi-easel me-2"></i>Teachers
          </a>
          <a className="nav-link text-white" href="/contact">
            <i className="bi bi-headset me-2"></i>Contact Us
          </a>
        </nav>
      </aside>

      {/* Form */}
      <main className="container my-5" style={{ maxWidth: "600px" }}>
        <div className="card shadow p-4">
          <h3 className="mb-4 text-center">Update Profile</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Update Name</label>
              <input type="text" className="form-control" maxLength="50" />
            </div>

            <div className="mb-3">
              <label className="form-label">Update Email</label>
              <input type="email" className="form-control" maxLength="50" />
            </div>

            <div className="mb-3">
              <label className="form-label">Previous Password</label>
              <input type="password" className="form-control" maxLength="20" />
            </div>

            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input type="password" className="form-control" maxLength="20" />
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input type="password" className="form-control" maxLength="20" />
            </div>

            <div className="mb-3">
              <label className="form-label">Update Picture</label>
              <input type="file" className="form-control" accept="image/*" />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Update Profile
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-light text-center py-3 mt-5 border-top">
        &copy; {new Date().getFullYear()} by <span className="fw-bold">TechMentors</span> | All rights reserved!
      </footer>
    </div>
  );
}
