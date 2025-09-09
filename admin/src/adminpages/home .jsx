// Home.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-light shadow-sm">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <a href="home.html" className="fs-3 fw-bold text-primary text-decoration-none">
            Educa.
          </a>

          {/* Search Form */}
          <form className="d-flex" action="search.html" method="post">
            <input
              type="text"
              name="search_box"
              placeholder="Search courses..."
              className="form-control me-2"
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
        </div>
      </header>

      {/* Sidebar */}
      <aside className="bg-light border-end p-3" style={{ width: "250px", float: "left" }}>
        <div className="text-end mb-3">
          <i className="bi bi-x-lg fs-5"></i>
        </div>

        <div className="text-center mb-4">
          <img src="images/pic-1.jpg" alt="profile" className="rounded-circle mb-2" width="80" />
          <h5 className="mb-0">shaikh anas</h5>
          <small className="text-muted">student</small>
          <div className="mt-2">
            <a href="profile.html" className="btn btn-primary btn-sm w-100 mb-2">
              View Profile
            </a>
          </div>
        </div>

        <nav className="nav flex-column">
          <a href="home.html" className="nav-link">
            <i className="bi bi-house me-2"></i> Home
          </a>
          <a href="about.html" className="nav-link">
            <i className="bi bi-question-circle me-2"></i> About
          </a>
          <a href="courses.html" className="nav-link">
            <i className="bi bi-mortarboard me-2"></i> Courses
          </a>
          <a href="teachers.html" className="nav-link">
            <i className="bi bi-easel me-2"></i> Teachers
          </a>
          <a href="contact.html" className="nav-link">
            <i className="bi bi-headset me-2"></i> Contact Us
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="container my-5" style={{ marginLeft: "270px" }}>
        {/* Quick Options */}
        <section className="mb-5">
          <h2 className="mb-4">Quick Options</h2>
          <div className="row g-4">
            {/* Likes and comments */}
            <div className="col-md-6 col-lg-3">
              <div className="card p-3">
                <h5>Likes & Comments</h5>
                <p>Total Likes: <span className="fw-bold">25</span></p>
                <a href="#" className="btn btn-sm btn-outline-primary">View Likes</a>
                <p className="mt-3">Total Comments: <span className="fw-bold">12</span></p>
                <a href="#" className="btn btn-sm btn-outline-primary">View Comments</a>
                <p className="mt-3">Saved Playlists: <span className="fw-bold">4</span></p>
                <a href="#" className="btn btn-sm btn-outline-primary">View Playlists</a>
              </div>
            </div>

            {/* Top categories */}
            <div className="col-md-6 col-lg-3">
              <div className="card p-3">
                <h5>Top Categories</h5>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  <a href="#" className="btn btn-light btn-sm"><i className="bi bi-code"></i> Development</a>
                  <a href="#" className="btn btn-light btn-sm"><i className="bi bi-bar-chart"></i> Business</a>
                  <a href="#" className="btn btn-light btn-sm"><i className="bi bi-pencil"></i> Design</a>
                  <a href="#" className="btn btn-light btn-sm"><i className="bi bi-graph-up"></i> Marketing</a>
                  <a href="#" className="btn btn-light btn-sm"><i className="bi bi-music-note"></i> Music</a>
                  <a href="#" className="btn btn-light btn-sm"><i className="bi bi-camera"></i> Photography</a>
                  <a href="#" className="btn btn-light btn-sm"><i className="bi bi-gear"></i> Software</a>
                  <a href="#" className="btn btn-light btn-sm"><i className="bi bi-beaker"></i> Science</a>
                </div>
              </div>
            </div>

            {/* Popular topics */}
            <div className="col-md-6 col-lg-3">
              <div className="card p-3">
                <h5>Popular Topics</h5>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  <a href="#" className="btn btn-outline-dark btn-sm">HTML</a>
                  <a href="#" className="btn btn-outline-dark btn-sm">CSS</a>
                  <a href="#" className="btn btn-outline-dark btn-sm">JavaScript</a>
                  <a href="#" className="btn btn-outline-dark btn-sm">React</a>
                  <a href="#" className="btn btn-outline-dark btn-sm">PHP</a>
                  <a href="#" className="btn btn-outline-dark btn-sm">Bootstrap</a>
                </div>
              </div>
            </div>

            {/* Become a tutor */}
            <div className="col-md-6 col-lg-3">
              <div className="card p-3">
                <h5>Become a Tutor</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nam?</p>
                <a href="teachers.html" className="btn btn-primary btn-sm">Get Started</a>
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section>
          <h2 className="mb-4">Our Courses</h2>
          <div className="row g-4">
            {[
              { img: "thumb-1.png", title: "Complete HTML Tutorial" },
              { img: "thumb-2.png", title: "Complete CSS Tutorial" },
              { img: "thumb-3.png", title: "Complete JS Tutorial" },
              { img: "thumb-4.png", title: "Complete Bootstrap Tutorial" },
              { img: "thumb-5.png", title: "Complete JQuery Tutorial" },
              { img: "thumb-6.png", title: "Complete SASS Tutorial" },
            ].map((course, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100">
                  <img src={`images/${course.img}`} className="card-img-top" alt={course.title} />
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <a href="playlist.html" className="btn btn-sm btn-outline-primary">
                      View Playlist
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <a href="courses.html" className="btn btn-primary">View All Courses</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        &copy; Copyright @ 2022 by <span className="fw-bold">mr. web designer</span> | All Rights Reserved!
      </footer>
    </>
  );
};

export default Home;
