import React from "react";
import { Link } from "react-router-dom";

const Firstpage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Main Content */}
      <main className="container my-5 flex-grow-1">
        {/* Quick Options */}
        <section className="mb-5">
          <h2 className="mb-4">Quick Options</h2>
          <div className="row g-4">
            {/* Likes & Comments */}
            <div className="col-md-6 col-lg-3">
              <div className="card p-3">
                <h5>Likes & Comments</h5>
                <p>
                  Total Likes: <span className="fw-bold">25</span>
                </p>
                <a href="#" className="btn btn-sm btn-outline-primary">
                  View Likes
                </a>
                <p className="mt-3">
                  Total Comments: <span className="fw-bold">12</span>
                </p>
                <a href="#" className="btn btn-sm btn-outline-primary">
                  View Comments
                </a>
                <p className="mt-3">
                  Saved Playlists: <span className="fw-bold">4</span>
                </p>
                <a href="#" className="btn btn-sm btn-outline-primary">
                  View Playlists
                </a>
              </div>
            </div>

            {/* Top Categories */}
            <div className="col-md-6 col-lg-3">
              <div className="card p-3">
                <h5>Top Categories</h5>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  <span className="btn btn-light btn-sm">
                    <i className="bi bi-code"></i> Development
                  </span>
                  <span className="btn btn-light btn-sm">
                    <i className="bi bi-bar-chart"></i> Business
                  </span>
                  <span className="btn btn-light btn-sm">
                    <i className="bi bi-pencil"></i> Design
                  </span>
                </div>
              </div>
            </div>

            {/* Popular Topics */}
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
                <Link to="/teachers" className="btn btn-primary btn-sm">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section>
          <h2 className="mb-4 text-center">Our Courses</h2>
          <div className="row g-4">
            {[
              {
                img: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600&auto=format&fit=crop&q=60",
                title: "Complete HTML Tutorial",
              },
              {
                img: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&auto=format&fit=crop&q=60",
                title: "Complete CSS Tutorial",
              },
              {
                img: "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?w=600&auto=format&fit=crop&q=60",
                title: "Complete JS Tutorial",
              },
            ].map((course, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
                  <div className="position-relative">
                    <img
                      src={course.img}
                      className="card-img-top"
                      alt={course.title}
                      style={{
                        height: "220px",
                        objectFit: "cover",
                        transition: "transform 0.3s",
                      }}
                    />
                    <span className="badge bg-primary position-absolute top-0 end-0 m-2">
                      10 Videos
                    </span>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="text-muted mb-3">By John Deo</p>
                    <Link to="/courses" className="btn btn-outline-primary mt-auto">
                      View Playlist
                    </Link>
                  </div>
                  <div className="card-footer bg-white border-0 d-flex justify-content-between">
                    <small className="text-muted">
                      <i className="bi bi-clock"></i> 2h 30m
                    </small>
                    <small className="text-muted">
                      <i className="bi bi-star-fill text-warning"></i> 4.5
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/courses" className="btn btn-primary btn-lg">
              View All Courses
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Firstpage;
