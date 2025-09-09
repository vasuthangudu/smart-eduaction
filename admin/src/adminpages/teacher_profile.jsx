// src/pages/TutorProfile.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function TutorProfile() {
  return (
    <div>
      {/* Header */}
      <header className="bg-light shadow-sm">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <a href="/home" className="fw-bold fs-4 text-decoration-none text-dark">
            Educa.
          </a>

          {/* Search */}
          <form action="/search" method="post" className="d-flex">
            <input
              type="text"
              name="search_box"
              placeholder="Search courses..."
              className="form-control me-2"
              required
              maxLength="100"
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
            <i className="bi bi-brightness-high fs-4"></i>
          </div>

          {/* Profile Dropdown */}
          <div className="text-end">
            <img
              src="/images/pic-1.jpg"
              alt="profile"
              className="rounded-circle me-2"
              style={{ width: "40px", height: "40px" }}
            />
            <strong>Shaikh Anas</strong>
            <p className="mb-1 text-muted">Student</p>
            <a href="/profile" className="btn btn-sm btn-primary me-2">
              View Profile
            </a>
            <a href="/login" className="btn btn-sm btn-outline-secondary me-2">
              Login
            </a>
            <a href="/register" className="btn btn-sm btn-outline-secondary">
              Register
            </a>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "220px" }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fw-bold">Menu</span>
          <i className="bi bi-x-lg"></i>
        </div>
        <div className="text-center mb-3">
          <img
            src="/images/pic-1.jpg"
            className="rounded-circle mb-2"
            alt="profile"
            style={{ width: "60px", height: "60px" }}
          />
          <h6>Shaikh Anas</h6>
          <p className="text-muted">Student</p>
          <a href="/profile" className="btn btn-sm btn-primary">
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

      {/* Teacher Profile */}
      <section className="container my-5">
        <h2 className="mb-4">Profile Details</h2>
        <div className="card p-3 shadow-sm">
          <div className="d-flex align-items-center">
            <img
              src="/images/pic-2.jpg"
              alt="tutor"
              className="rounded-circle me-3"
              style={{ width: "80px", height: "80px" }}
            />
            <div>
              <h5>John Deo</h5>
              <p className="text-muted">Developer</p>
            </div>
          </div>
          <div className="d-flex justify-content-around mt-3">
            <p>Total Playlists: <strong>4</strong></p>
            <p>Total Videos: <strong>18</strong></p>
            <p>Total Likes: <strong>1208</strong></p>
            <p>Total Comments: <strong>52</strong></p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="container my-5">
        <h2 className="mb-4">Our Courses</h2>
        <div className="row g-4">
          {[
            { img: "/images/thumb-1.png", title: "Complete HTML Tutorial" },
            { img: "/images/thumb-2.png", title: "Complete CSS Tutorial" },
            { img: "/images/thumb-3.png", title: "Complete JavaScript Tutorial" },
            { img: "/images/thumb-4.png", title: "Complete Bootstrap Tutorial" },
          ].map((course, index) => (
            <div className="col-md-3" key={index}>
              <div className="card shadow-sm h-100">
                <img src={course.img} className="card-img-top" alt={course.title} />
                <div className="card-body text-center">
                  <span className="badge bg-primary mb-2">10 Videos</span>
                  <h5 className="card-title">{course.title}</h5>
                  <a href="/playlist" className="btn btn-sm btn-outline-primary">
                    View Playlist
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light text-center py-3 mt-5">
        © 2022 by <span className="fw-bold">Mr. Web Designer</span> | All rights reserved!
      </footer>
    </div>
  );
}
