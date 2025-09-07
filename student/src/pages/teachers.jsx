// src/pages/Teachers.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Teachers() {
  const teachers = [
    { img: "/images/pic-2.jpg", name: "John Deo", role: "Developer" },
    { img: "/images/pic-3.jpg", name: "John Deo", role: "Developer" },
    { img: "/images/pic-4.jpg", name: "John Deo", role: "Developer" },
    { img: "/images/pic-5.jpg", name: "John Deo", role: "Developer" },
    { img: "/images/pic-6.jpg", name: "John Deo", role: "Developer" },
    { img: "/images/pic-7.jpg", name: "John Deo", role: "Developer" },
    { img: "/images/pic-8.jpg", name: "John Deo", role: "Developer" },
  ];

  return (
    <div>
 

      {/* Teachers Section */}
      <section className="container my-5">
        <h2 className="mb-4 text-center">Expert Teachers</h2>

        {/* Search Tutors */}
        <form className="d-flex justify-content-center mb-4">
          <input
            type="text"
            className="form-control w-50 me-2"
            placeholder="Search tutors..."
            required
            maxLength="100"
          />
          <button className="btn btn-outline-primary" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>

        <div className="row g-4">
          {/* Become a Tutor Offer */}
          <div className="col-md-4">
            <div className="card text-center shadow-sm h-100 bg-light">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">Become a Tutor</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque ipsam fuga ex et aliquam.
                </p>
                <a href="/register" className="btn btn-primary mt-auto">
                  Get Started
                </a>
              </div>
            </div>
          </div>

          {/* Teachers List */}
          {teachers.map((tutor, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={tutor.img}
                      alt={tutor.name}
                      className="rounded-circle me-3"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <div>
                      <h5 className="mb-0">{tutor.name}</h5>
                      <small className="text-muted">{tutor.role}</small>
                    </div>
                  </div>
                  <p>Total Playlists: <strong>4</strong></p>
                  <p>Total Videos: <strong>18</strong></p>
                  <p>Total Likes: <strong>1208</strong></p>
                  <a href="/teacher_profile" className="btn btn-sm btn-outline-primary">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
  
    </div>
  );
}
