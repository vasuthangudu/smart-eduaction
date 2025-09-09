// Contact.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Contact() {
  return (
    <div>
      {/* Header */}
      <header className="bg-light shadow-sm">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <a href="/home" className="fw-bold fs-3 text-primary text-decoration-none">
            Educa.
          </a>

          <form action="/search" method="post" className="d-flex">
            <input
              type="text"
              name="search_box"
              required
              placeholder="Search courses..."
              maxLength="100"
              className="form-control me-2"
            />
            <button type="submit" className="btn btn-outline-primary">
              <i className="bi bi-search"></i>
            </button>
          </form>

          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-list fs-4"></i>
            <i className="bi bi-search fs-4"></i>
            <i className="bi bi-person fs-4"></i>
            <i className="bi bi-sun fs-4"></i>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <div className="text-end mb-3">
          <i className="bi bi-x-lg"></i>
        </div>
        <div className="text-center mb-4">
          <img
            src="images/pic-1.jpg"
            alt="profile"
            className="rounded-circle mb-2"
            width="80"
          />
          <h5>Shaikh Anas</h5>
          <p>Student</p>
          <a href="/profile" className="btn btn-primary btn-sm mb-2">
            View Profile
          </a>
        </div>
        <nav className="nav flex-column">
          <a href="/home" className="nav-link text-white">
            <i className="bi bi-house"></i> Home
          </a>
          <a href="/about" className="nav-link text-white">
            <i className="bi bi-question-circle"></i> About
          </a>
          <a href="/courses" className="nav-link text-white">
            <i className="bi bi-mortarboard"></i> Courses
          </a>
          <a href="/teachers" className="nav-link text-white">
            <i className="bi bi-easel"></i> Teachers
          </a>
          <a href="/contact" className="nav-link text-white">
            <i className="bi bi-headset"></i> Contact Us
          </a>
        </nav>
      </div>

      {/* Contact Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-6 text-center">
            <img src="images/contact-img.svg" alt="contact" className="img-fluid" />
          </div>

          {/* Form */}
          <div className="col-md-6">
            <form>
              <h3 className="mb-4">Get in Touch</h3>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                required
                maxLength="50"
                className="form-control mb-3"
              />
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                required
                maxLength="50"
                className="form-control mb-3"
              />
              <input
                type="number"
                placeholder="Enter your number"
                name="number"
                required
                className="form-control mb-3"
              />
              <textarea
                name="msg"
                placeholder="Enter your message"
                required
                maxLength="1000"
                rows="5"
                className="form-control mb-3"
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="row mt-5 text-center">
          <div className="col-md-4 mb-4">
            <i className="bi bi-telephone fs-2 text-primary"></i>
            <h5 className="mt-2">Phone Number</h5>
            <p>
              <a href="tel:1234567890" className="text-decoration-none d-block">
                123-456-7890
              </a>
              <a href="tel:1112223333" className="text-decoration-none d-block">
                111-222-3333
              </a>
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <i className="bi bi-envelope fs-2 text-primary"></i>
            <h5 className="mt-2">Email Address</h5>
            <p>
              <a href="mailto:shaikhanas@gmail.com" className="text-decoration-none d-block">
                shaikhanas@gmail.com
              </a>
              <a href="mailto:anasbhai@gmail.com" className="text-decoration-none d-block">
                anasbhai@gmail.com
              </a>
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <i className="bi bi-geo-alt fs-2 text-primary"></i>
            <h5 className="mt-2">Office Address</h5>
            <p>Flat no. 1, A-1 Building, Jogeshwari, Mumbai, India - 400104</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        © Copyright @ 2022 by <span className="fw-bold">mr. web designer</span> |
        All Rights Reserved!
      </footer>
    </div>
  );
}
