import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


import Firstpage from "./firstmainpage";
import About from "./about";
import Courses from "./courses";
import Teachers from "./teachers";
import Contact from "./contact";
import ProfilePage from "./profile";
const Home = () => {
  const [activePage, setActivePage] = useState("Firstpage");

  // Function to render the selected page
  const renderPage = () => {
    switch (activePage) {
      case "Firstpage":
        return <Firstpage />;
      case "About":
        return <About />;
      case "Courses":
        return <Courses />;
      case "Teachers":
        return <Teachers />;
      case "Contact":
        return <Contact />;
     case "ProfilePage":
        return <ProfilePage />;  
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

          {/* Search */}
          <form className="d-flex">
            <input
              type="text"
              placeholder="Search courses..."
              className="form-control me-2"
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
<button type="button" class="btn btn-danger btn-lg">Admin </button>
          </div>
      </header>

      {/* Sidebar + Main */}
      <div className="d-flex">
        {/* Sidebar */}
        <aside className="bg-light border-end p-3" style={{ width: "250px" }}>
         <div className="card shadow-sm border-0 rounded-3 p-3 text-center mb-4">
  <div className="d-flex flex-column align-items-center">
    <img
      src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fERPQ1RPUnxlbnwwfHwwfHx8MA%3D%3D"
      alt="profile"
      className="rounded-circle border border-3 border-primary mb-3"
      width="100"
      height="100"
    />
    <h5 className="fw-semibold mb-0">Mani Kanta</h5>
    <small className="text-muted">Student</small>

    <div className="mt-3">
      <button
        className={`btn btn-sm px-4 ${
          activePage === "ProfilePage"
            ? "btn-primary fw-bold"
            : "btn-outline-primary"
        }`}
        onClick={() => setActivePage("ProfilePage")}
      >
        View Profile
      </button>
    </div>
  </div>
</div>




          {/* Navigation */}
          <nav className="nav flex-column">
            <button
              className={`btn btn-link nav-link text-start ${activePage === "Firstpage" ? "fw-bold text-primary" : ""}`}
              onClick={() => setActivePage("Firstpage")}
            >
              <i className="bi bi-house me-2"></i> Home
            </button>
            <button
              className={`btn btn-link nav-link text-start ${activePage === "About" ? "fw-bold text-primary" : ""}`}
              onClick={() => setActivePage("About")}
            >
              <i className="bi bi-question-circle me-2"></i> About
            </button>
            <button
              className={`btn btn-link nav-link text-start ${activePage === "Courses" ? "fw-bold text-primary" : ""}`}
              onClick={() => setActivePage("Courses")}
            >
              <i className="bi bi-journal-bookmark me-2"></i> Courses
            </button>
            <button
              className={`btn btn-link nav-link text-start ${activePage === "Teachers" ? "fw-bold text-primary" : ""}`}
              onClick={() => setActivePage("Teachers")}
            >
              <i className="bi bi-easel me-2"></i> Teachers
            </button>
            <button
              className={`btn btn-link nav-link text-start ${activePage === "Contact" ? "fw-bold text-primary" : ""}`}
              onClick={() => setActivePage("Contact")}
            >
              <i className="bi bi-headset me-2"></i> Contact Us
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow-1 p-4">{renderPage()}</main>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        &copy; {new Date().getFullYear()} by{" "}
        <span className="fw-bold">TechMentors</span> | All Rights Reserved!
      </footer>
    </>
  );
};

export default Home;
