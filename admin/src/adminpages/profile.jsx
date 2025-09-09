// src/components/ProfilePage.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ProfilePage = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-light shadow-sm py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <a href="home.html" className="fs-4 fw-bold text-decoration-none text-primary">
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
        <aside className="bg-light border-end p-3" style={{ width: "250px", minHeight: "100vh" }}>
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

        {/* Profile Section */}
        <main className="flex-grow-1 p-4">
          <section>
            <h2 className="mb-4">Your Profile</h2>

            <div className="card p-4 shadow-sm">
              <div className="d-flex align-items-center mb-4">
                <img
                  src="images/pic-1.jpg"
                  alt="user"
                  className="rounded-circle me-3"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <div>
                  <h4>Shaikh Anas</h4>
                  <p className="text-muted">Student</p>
                  <a href="update.html" className="btn btn-outline-primary btn-sm">
                    Update Profile
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card text-center p-3 shadow-sm">
                    <div className="d-flex justify-content-center align-items-center mb-2">
                      <i className="fas fa-bookmark fa-2x text-primary me-2"></i>
                      <div>
                        <h5 className="mb-0">4</h5>
                        <p className="mb-0">Saved Playlists</p>
                      </div>
                    </div>
                    <a href="#" className="btn btn-sm btn-primary">
                      View Playlists
                    </a>
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <div className="card text-center p-3 shadow-sm">
                    <div className="d-flex justify-content-center align-items-center mb-2">
                      <i className="fas fa-heart fa-2x text-danger me-2"></i>
                      <div>
                        <h5 className="mb-0">33</h5>
                        <p className="mb-0">Videos Liked</p>
                      </div>
                    </div>
                    <a href="#" className="btn btn-sm btn-danger">
                      View Liked
                    </a>
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <div className="card text-center p-3 shadow-sm">
                    <div className="d-flex justify-content-center align-items-center mb-2">
                      <i className="fas fa-comment fa-2x text-success me-2"></i>
                      <div>
                        <h5 className="mb-0">12</h5>
                        <p className="mb-0">Video Comments</p>
                      </div>
                    </div>
                    <a href="#" className="btn btn-sm btn-success">
                      View Comments
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-4">
        &copy; Copyright @ 2022 by{" "}
        <span className="fw-bold text-primary">mr. web designer</span> | All Rights Reserved!
      </footer>
    </div>
  );
};

export default ProfilePage;
