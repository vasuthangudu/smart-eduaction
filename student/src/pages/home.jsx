import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import your pages
import Firstpage from "./firstmainpage";
import About from "./about";
import Courses from "./courses";
import Teachers from "./teachers";
import Contact from "./contact";

const Home = () => {
  const [activePage, setActivePage] = useState("Firstpage");

  // Render selected page
  const renderedPages = () => {
    switch (activePage) {
      case "Firstpage":
        return <Firstpage />;
      case "About":
        return <About />;
      case "Courses":
        return <Courses />;
      case "Teachers":
        return <Teachers/>;
      case "Contact":
        return <Contact />;
      default:
        return <h2 className="p-4">Page not found</h2>;
    }
  };

  return (
    <>
      {/* Header */}
      <header className="bg-light shadow-sm">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <span className="fs-3 fw-bold text-primary">Educa.</span>

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
            <img
              src="/images/pic-1.jpg"
              alt="profile"
              className="rounded-circle mb-2"
              width="80"
            />
            <h5 className="mb-0">Mani Kanta</h5>
            <small className="text-muted">student</small>
            <div className="mt-2">
              <button className="btn btn-primary btn-sm w-100 mb-2">
                View Profile
              </button>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <nav className="nav flex-column">
            <button
              className="btn btn-link nav-link text-start"
              onClick={() => setActivePage("Firstpage")}
            >
              <i className="bi bi-house me-2"></i> Home
            </button>
            <button
              className="btn btn-link nav-link text-start"
              onClick={() => setActivePage("About")}
            >
              <i className="bi bi-question-circle me-2"></i> About
            </button>
            <button
              className="btn btn-link nav-link text-start"
              onClick={() => setActivePage("Courses")}
            >
              <i className="bi bi-journal-bookmark me-2"></i> Courses
            </button>
            <button
              className="btn btn-link nav-link text-start"
              onClick={() => setActivePage("Teachers")}
            >
              <i className="bi bi-easel me-2"></i> Teachers
            </button>
            <button
              className="btn btn-link nav-link text-start"
              onClick={() => setActivePage("Contact")}
            >
              <i className="bi bi-headset me-2"></i> Contact Us
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow-1 p-4">{renderedPages()}</main>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        &copy; Copyright @ 2025 by{" "}
        <span className="fw-bold">TechMentors</span> | All Rights Reserved!
      </footer>
    </>
  );
};

export default Home;
