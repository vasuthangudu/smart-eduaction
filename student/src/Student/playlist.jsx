// Playlist.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Playlist() {
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
      <aside
        className="bg-dark text-white p-3 position-fixed vh-100"
        style={{ width: "250px", top: 0, left: 0 }}
      >
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

      {/* Playlist Details */}
      <section className="container my-5" style={{ marginLeft: "270px" }}>
        <h1 className="mb-4 text-center">Playlist Details</h1>
        <div className="row g-4">
          <div className="col-md-4">
            <form className="mb-3">
              <button type="submit" className="btn btn-outline-primary w-100">
                <i className="far fa-bookmark me-2"></i> Save Playlist
              </button>
            </form>
            <div className="position-relative">
              <img
                src="images/thumb-1.png"
                alt="Thumbnail"
                className="img-fluid rounded"
              />
              <span className="badge bg-primary position-absolute top-0 end-0 m-2">
                10 Videos
              </span>
            </div>
          </div>

          <div className="col-md-8">
            <div className="d-flex align-items-center mb-3">
              <img
                src="images/pic-2.jpg"
                alt="Tutor"
                className="rounded-circle me-3"
                width="60"
              />
              <div>
                <h5 className="mb-0">john deo</h5>
                <small className="text-muted">21-10-2022</small>
              </div>
            </div>
            <div>
              <h3>Complete HTML Tutorial</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                minus reiciendis, error sunt veritatis exercitationem deserunt
                velit doloribus itaque voluptate.
              </p>
              <a href="/teacher_profile" className="btn btn-sm btn-primary">
                View Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Playlist Videos */}
      <section className="container my-5" style={{ marginLeft: "270px" }}>
        <h1 className="mb-4 text-center">Playlist Videos</h1>
        <div className="row g-4">
          {[
            { img: "images/post-1-1.png", title: "Complete HTML Tutorial (Part 01)" },
            { img: "images/post-1-2.png", title: "Complete HTML Tutorial (Part 02)" },
            { img: "images/post-1-3.png", title: "Complete HTML Tutorial (Part 03)" },
            { img: "images/post-1-4.png", title: "Complete HTML Tutorial (Part 04)" },
            { img: "images/post-1-5.png", title: "Complete HTML Tutorial (Part 05)" },
            { img: "images/post-1-6.png", title: "Complete HTML Tutorial (Part 06)" },
          ].map((video, idx) => (
            <div className="col-md-4" key={idx}>
              <a
                href="/watch-video"
                className="card shadow-sm text-decoration-none text-dark h-100"
              >
                <div className="position-relative">
                  <img
                    src={video.img}
                    alt={video.title}
                    className="card-img-top"
                  />
                  <i className="fas fa-play position-absolute top-50 start-50 translate-middle text-white fs-3"></i>
                </div>
                <div className="card-body">
                  <h6 className="card-title">{video.title}</h6>
                </div>
              </a>
            </div>
          ))}
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
