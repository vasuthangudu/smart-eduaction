import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-light shadow-sm">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <Link to="/home" className="fs-3 fw-bold text-primary text-decoration-none">
            Educa.
          </Link>

          {/* Search Form */}
          <form className="d-flex">
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

      {/* Sidebar + Main */}
      <div className="d-flex">
        {/* Sidebar */}
        <aside className="bg-light border-end p-3" style={{ width: "250px" }}>
          <div className="text-end mb-3">
            <i className="bi bi-x-lg fs-5"></i>
          </div>

          <div className="text-center mb-4">
            <img src="/images/pic-1.jpg" alt="profile" className="rounded-circle mb-2" width="80" />
            <h5 className="mb-0">Mani Kanta</h5>
            <small className="text-muted">student</small>
            <div className="mt-2">
              <Link to="/profile" className="btn btn-primary btn-sm w-100 mb-2">
                View Profile
              </Link>
            </div>
          </div>

          <nav className="nav flex-column">
            <Link to="/home" className="nav-link">
              <i className="bi bi-house me-2"></i> Home
            </Link>
            <Link to="/about" className="nav-link">
              <i className="bi bi-question-circle me-2"></i> About
            </Link>
            <Link to="/courses" className="nav-link">
              <i className="bi bi-journal-bookmark me-2"></i> Courses
            </Link>
            <Link to="/teachers" className="nav-link">
              <i className="bi bi-easel me-2"></i> Teachers
            </Link>
            <Link to="/contact" className="nav-link">
              <i className="bi bi-headset me-2"></i> Contact Us
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="container my-5 flex-grow-1">
          {/* Quick Options */}
          <section className="mb-5">
            <h2 className="mb-4">Quick Options</h2>
            <div className="row g-4">
              {/* Likes */}
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
                    <span className="btn btn-light btn-sm"><i className="bi bi-code"></i> Development</span>
                    <span className="btn btn-light btn-sm"><i className="bi bi-bar-chart"></i> Business</span>
                    <span className="btn btn-light btn-sm"><i className="bi bi-pencil"></i> Design</span>
                  </div>
                </div>
              </div>

              {/* Popular topics */}
              <div className="col-md-6 col-lg-3">
                <div className="card p-3">
                  <h5>Popular Topics</h5>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    <span className="btn btn-outline-dark btn-sm">HTML</span>
                    <span className="btn btn-outline-dark btn-sm">CSS</span>
                    <span className="btn btn-outline-dark btn-sm">JavaScript</span>
                  </div>
                </div>
              </div>

              {/* Tutor */}
              <div className="col-md-6 col-lg-3">
                <div className="card p-3">
                  <h5>Become a Tutor</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <Link to="/teachers" className="btn btn-primary btn-sm">Get Started</Link>
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
                { img: "thumb-3.png", title: "Complete JS Tutorial" }
              ].map((course, i) => (
                <div className="col-md-6 col-lg-4" key={i}>
                  <div className="card h-100">
                    <img src={`/images/${course.img}`} className="card-img-top" alt={course.title} />
                    <div className="card-body">
                      <h5 className="card-title">{course.title}</h5>
                      <Link to="/courses" className="btn btn-sm btn-outline-primary">
                        View Playlist
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link to="/courses" className="btn btn-primary">View All Courses</Link>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        &copy; Copyright @ 2025 by <span className="fw-bold">TechMentors</span> | All Rights Reserved!
      </footer>
    </>
  );
};

export default Home;
