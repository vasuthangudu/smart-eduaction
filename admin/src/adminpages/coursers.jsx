// Courses.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Courses() {
  const courses = [
    {
      tutorImg: "images/pic-2.jpg",
      name: "John Deo",
      date: "21-10-2022",
      thumb: "images/thumb-1.png",
      videos: "10 videos",
      title: "Complete HTML Tutorial",
    },
    {
      tutorImg: "images/pic-3.jpg",
      name: "John Deo",
      date: "21-10-2022",
      thumb: "images/thumb-2.png",
      videos: "10 videos",
      title: "Complete CSS Tutorial",
    },
    {
      tutorImg: "images/pic-4.jpg",
      name: "John Deo",
      date: "21-10-2022",
      thumb: "images/thumb-3.png",
      videos: "10 videos",
      title: "Complete JS Tutorial",
    },
    {
      tutorImg: "images/pic-5.jpg",
      name: "John Deo",
      date: "21-10-2022",
      thumb: "images/thumb-4.png",
      videos: "10 videos",
      title: "Complete Bootstrap Tutorial",
    },
    {
      tutorImg: "images/pic-6.jpg",
      name: "John Deo",
      date: "21-10-2022",
      thumb: "images/thumb-5.png",
      videos: "10 videos",
      title: "Complete jQuery Tutorial",
    },
    {
      tutorImg: "images/pic-7.jpg",
      name: "John Deo",
      date: "21-10-2022",
      thumb: "images/thumb-6.png",
      videos: "10 videos",
      title: "Complete SASS Tutorial",
    },
    {
      tutorImg: "images/pic-8.jpg",
      name: "John Deo",
      date: "21-10-2022",
      thumb: "images/thumb-7.png",
      videos: "10 videos",
      title: "Complete PHP Tutorial",
    },
    {
      tutorImg: "images/pic-9.jpg",
      name: "John Deo",
      date: "21-10-2022",
      thumb: "images/thumb-8.png",
      videos: "10 videos",
      title: "Complete MySQL Tutorial",
    },
    {
      tutorImg: "images/pic-1.jpg",
      name: "John Deo",
      date: "21-10-2022",
      thumb: "images/thumb-9.png",
      videos: "10 videos",
      title: "Complete React Tutorial",
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-light shadow-sm">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <a href="/home" className="fw-bold fs-3 text-primary text-decoration-none">
            Educa.
          </a>

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

          <div className="d-flex gap-3">
            <i className="bi bi-list fs-4"></i>
            <i className="bi bi-search fs-4"></i>
            <i className="bi bi-person fs-4"></i>
            <i className="bi bi-sun fs-4"></i>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <div className="text-end mb-3">
          <i className="bi bi-x-lg"></i>
        </div>
        <div className="text-center mb-4">
          <img
            src="images/pic-1.jpg"
            alt="profile"
            className="rounded-circle mb-2"
            width="80"
          />
          <h5>Shaikh Anas</h5>
          <p>Student</p>
          <a href="/profile" className="btn btn-primary btn-sm mb-2">
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
      </aside>

      {/* Courses Section */}
      <section className="container py-5">
        <h1 className="text-center mb-5 fw-bold">Our Courses</h1>
        <div className="row g-4">
          {courses.map((course, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-sm h-100">
                <div className="d-flex align-items-center p-3 border-bottom">
                  <img
                    src={course.tutorImg}
                    alt={course.name}
                    className="rounded-circle me-3"
                    width="50"
                  />
                  <div>
                    <h6 className="mb-0">{course.name}</h6>
                    <small className="text-muted">{course.date}</small>
                  </div>
                </div>
                <div className="position-relative">
                  <img
                    src={course.thumb}
                    alt={course.title}
                    className="card-img-top"
                  />
                  <span className="badge bg-primary position-absolute top-0 end-0 m-2">
                    {course.videos}
                  </span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <a href="/playlist" className="btn btn-outline-primary btn-sm">
                    View Playlist
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        © Copyright @ 2022 by{" "}
        <span className="fw-bold">mr. web designer</span> | All Rights Reserved!
      </footer>
    </div>
  );
}
