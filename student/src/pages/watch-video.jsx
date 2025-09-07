// src/pages/WatchVideo.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function WatchVideo() {
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
          <h6>Shaikh Anas</h6>
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

      {/* Video Section */}
      <main className="container my-5" style={{ maxWidth: "800px" }}>
        <div className="card shadow p-4">
          <div className="ratio ratio-16x9 mb-3">
            <video
              src="images/vid-1.mp4"
              controls
              poster="images/post-1-1.png"
            ></video>
          </div>
          <h3 className="mb-3">Complete HTML Tutorial (Part 01)</h3>

          <div className="d-flex justify-content-between text-muted mb-3">
            <p>
              <i className="bi bi-calendar"></i> <span>22-10-2022</span>
            </p>
            <p>
              <i className="bi bi-heart"></i> <span>44 likes</span>
            </p>
          </div>

          <div className="d-flex align-items-center mb-3">
            <img
              src="images/pic-2.jpg"
              alt="tutor"
              className="rounded-circle me-3"
              width="60"
              height="60"
            />
            <div>
              <h6 className="mb-0">John Deo</h6>
              <small className="text-muted">Developer</small>
            </div>
          </div>

          <div className="d-flex mb-3">
            <a href="/playlist" className="btn btn-primary me-3">
              View Playlist
            </a>
            <button className="btn btn-outline-danger">
              <i className="bi bi-heart me-1"></i> Like
            </button>
          </div>

          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            labore ratione, hic exercitationem mollitia obcaecati culpa dolor
            placeat provident porro. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aliquid iure autem non fugit sint. A, sequi rerum
            architecto dolor fugiat illo, iure velit nihil laboriosam cupiditate
            voluptatum facere cumque nemo!
          </p>
        </div>
      </main>

      {/* Comments Section */}
      <section className="container my-5" style={{ maxWidth: "800px" }}>
        <h4 className="mb-3">5 Comments</h4>

        {/* Add Comment Form */}
        <form className="mb-4">
          <h6>Add Comment</h6>
          <textarea
            className="form-control mb-2"
            placeholder="Enter your comment"
            rows="4"
            maxLength="1000"
            required
          ></textarea>
          <button type="submit" className="btn btn-success">
            Add Comment
          </button>
        </form>

        <h5 className="mb-3">User Comments</h5>

        <div className="list-group">
          {/* Example Comment */}
          <div className="list-group-item">
            <div className="d-flex align-items-center mb-2">
              <img
                src="images/pic-1.jpg"
                alt="user"
                className="rounded-circle me-3"
                width="50"
                height="50"
              />
              <div>
                <h6 className="mb-0">Shaikh Anas</h6>
                <small className="text-muted">22-10-2022</small>
              </div>
            </div>
            <p>This is a comment from Shaikh Anas</p>
            <div>
              <button className="btn btn-sm btn-outline-secondary me-2">
                Edit Comment
              </button>
              <button className="btn btn-sm btn-outline-danger">
                Delete Comment
              </button>
            </div>
          </div>

          <div className="list-group-item">
            <div className="d-flex align-items-center mb-2">
              <img
                src="images/pic-2.jpg"
                alt="user"
                className="rounded-circle me-3"
                width="50"
                height="50"
              />
              <div>
                <h6 className="mb-0">John Deo</h6>
                <small className="text-muted">22-10-2022</small>
              </div>
            </div>
            <p>Awesome tutorial! Keep going!</p>
          </div>

          {/* Add other comments the same way */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light text-center py-3 mt-5 border-top">
        &copy; {new Date().getFullYear()} by{" "}
        <span className="fw-bold">Mr. Web Designer</span> | All rights reserved!
      </footer>
    </div>
  );
}
