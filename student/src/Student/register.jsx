// src/components/RegisterPage.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const RegisterPage = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-light shadow-sm py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <a
            href="home.html"
            className="fs-4 fw-bold text-decoration-none text-primary"
          >
            Educa.
          </a>

          <form className="d-flex" action="search.html" method="post">
            <input
              type="text"
              name="search_box"
              required
              placeholder="Search courses..."
              maxLength="100"
              className="form-control me-2"
            />
            <button type="submit" className="btn btn-outline-primary">
              <i className="fas fa-search"></i>
            </button>
          </form>

          <div className="d-flex align-items-center">
            <i className="fas fa-bars mx-2"></i>
            <i className="fas fa-search mx-2"></i>
            <i className="fas fa-user mx-2"></i>
            <i className="fas fa-sun mx-2"></i>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="d-flex">
        <aside
          className="bg-light border-end p-3"
          style={{ width: "250px", minHeight: "100vh" }}
        >
          <div className="text-end mb-3">
            <i className="fas fa-times"></i>
          </div>

          <div className="text-center mb-4">
            <img
              src="images/pic-1.jpg"
              alt="profile"
              className="rounded-circle mb-2"
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
            <h5>Shaikh Anas</h5>
            <p className="text-muted">Student</p>
            <a href="profile.html" className="btn btn-primary btn-sm">
              View Profile
            </a>
          </div>

          <nav className="nav flex-column">
            <a href="home.html" className="nav-link">
              <i className="fas fa-home me-2"></i>Home
            </a>
            <a href="about.html" className="nav-link">
              <i className="fas fa-question me-2"></i>About
            </a>
            <a href="courses.html" className="nav-link">
              <i className="fas fa-graduation-cap me-2"></i>Courses
            </a>
            <a href="teachers.html" className="nav-link">
              <i className="fas fa-chalkboard-user me-2"></i>Teachers
            </a>
            <a href="contact.html" className="nav-link">
              <i className="fas fa-headset me-2"></i>Contact Us
            </a>
          </nav>
        </aside>

        {/* Register Form */}
        <main className="flex-grow-1 p-4">
          <section className="d-flex justify-content-center">
            <form
              className="card p-4 shadow-sm"
              style={{ width: "100%", maxWidth: "500px" }}
            >
              <h3 className="text-center mb-4">Register Now</h3>

              <div className="mb-3">
                <label className="form-label">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  maxLength="50"
                  placeholder="Enter your name"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  maxLength="50"
                  placeholder="Enter your email"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Your Password *</label>
                <input
                  type="password"
                  name="pass"
                  required
                  maxLength="20"
                  placeholder="Enter your password"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password *</label>
                <input
                  type="password"
                  name="c_pass"
                  required
                  maxLength="20"
                  placeholder="Confirm your password"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Select Profile *</label>
                <input
                  type="file"
                  accept="image/*"
                  required
                  className="form-control"
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Register New
              </button>
            </form>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-4">
        &copy; Copyright @ 2022 by{" "}
        <span className="fw-bold text-primary">mr. web designer</span> | All
        Rights Reserved!
      </footer>
    </div>
  );
};

export default RegisterPage;
