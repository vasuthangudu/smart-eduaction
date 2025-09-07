import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Courses() {
  const courses = [
    {
      tutorImg: "/images/pic-2.jpg",
      name: "John Deo",
      date: "21-10-2022",
      thumb: "/images/thumb-1.png",
      videos: "10 videos",
      title: "Complete HTML Tutorial",
    },
    {
      tutorImg: "/images/pic-3.jpg",
      name: "John Deo",
      date: "21-10-2022",
      thumb: "/images/thumb-2.png",
      videos: "10 videos",
      title: "Complete CSS Tutorial",
    },
    {
      tutorImg: "/images/pic-4.jpg",
      name: "John Deo",
      date: "21-10-2022",
      thumb: "/images/thumb-3.png",
      videos: "10 videos",
      title: "Complete JS Tutorial",
    },
    {
      tutorImg: "/images/pic-5.jpg",
      name: "John Deo",
      date: "21-10-2022",
      thumb: "/images/thumb-4.png",
      videos: "10 videos",
      title: "Complete Bootstrap Tutorial",
    },
    {
      tutorImg: "/images/pic-6.jpg",
      name: "John Deo",
      date: "21-10-2022",
      thumb: "/images/thumb-5.png",
      videos: "10 videos",
      title: "Complete jQuery Tutorial",
    },
    {
      tutorImg: "/images/pic-7.jpg",
      name: "John Deo",
      date: "21-10-2022",
      thumb: "/images/thumb-6.png",
      videos: "10 videos",
      title: "Complete SASS Tutorial",
    },
    {
      tutorImg: "/images/pic-8.jpg",
      name: "John Deo",
      date: "21-10-2022",
      thumb: "/images/thumb-7.png",
      videos: "10 videos",
      title: "Complete PHP Tutorial",
    },
    {
      tutorImg: "/images/pic-9.jpg",
      name: "John Deo",
      date: "21-10-2022",
      thumb: "/images/thumb-8.png",
      videos: "10 videos",
      title: "Complete MySQL Tutorial",
    },
    {
      tutorImg: "/images/pic-1.jpg",
      name: "John Deo",
      date: "21-10-2022",
      thumb: "/images/thumb-9.png",
      videos: "10 videos",
      title: "Complete React Tutorial",
    },
  ];

  return (
    <section className="container py-5">
      <h1 className="text-center mb-5 fw-bold">Our Courses</h1>
      <div className="row g-4">
        {courses.map((course, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-sm h-100">
              {/* Tutor info */}
              <div className="d-flex align-items-center p-3 border-bottom">
                <img
                  src={course.tutorImg}
                  alt={course.name}
                  className="rounded-circle me-3"
                  width="50"
                  height="50"
                />
                <div>
                  <h6 className="mb-0">{course.name}</h6>
                  <small className="text-muted">{course.date}</small>
                </div>
              </div>

              {/* Course thumbnail */}
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

              {/* Course title */}
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <button className="btn btn-outline-primary btn-sm">
                  View Playlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
