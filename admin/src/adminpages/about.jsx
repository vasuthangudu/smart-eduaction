// About.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const About = () => {
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
        {/* About Section */}
        <section className="mb-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="images/about-img.svg" alt="about" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h3>Why Choose Us?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorum quasi illo?
                Distinctio expedita commodi, nemo a quam error repellendus sint, fugiat quis numquam
                eum eveniet sequi aspernatur quaerat tenetur.
              </p>
              <a href="courses.html" className="btn btn-primary">
                Our Courses
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="row text-center mt-5">
            <div className="col-6 col-md-3 mb-3">
              <div className="p-3 border rounded">
                <i className="bi bi-mortarboard fs-2 text-primary"></i>
                <h3>+10k</h3>
                <p>Online Courses</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="p-3 border rounded">
                <i className="bi bi-person-workspace fs-2 text-success"></i>
                <h3>+40k</h3>
                <p>Brilliant Students</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="p-3 border rounded">
                <i className="bi bi-easel fs-2 text-warning"></i>
                <h3>+2k</h3>
                <p>Expert Tutors</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="p-3 border rounded">
                <i className="bi bi-briefcase fs-2 text-danger"></i>
                <h3>100%</h3>
                <p>Job Placement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section>
          <h2 className="mb-4">Student's Reviews</h2>
          <div className="row g-4">
            {[2, 3, 4, 5, 6, 7].map((num, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100 p-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus,
                    suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut
                    quibusdam vero voluptate libero facilis fuga.
                  </p>
                  <div className="d-flex align-items-center mt-3">
                    <img
                      src={`images/pic-${num}.jpg`}
                      alt="student"
                      className="rounded-circle me-3"
                      width="50"
                    />
                    <div>
                      <h6 className="mb-1">John Deo</h6>
                      <div className="text-warning">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        &copy; Copyright @ 2022 by{" "}
        <span className="fw-bold">mr. web designer</span> | All Rights Reserved!
      </footer>
    </>
  );
};

export default About;
