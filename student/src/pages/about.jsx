import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const About = () => {
  return (
    <main className="container my-5">
      {/* About Section */}
      <section className="mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://media.istockphoto.com/id/2170331670/photo/young-indian-woman-explaining-about-company-growth-to-other-employees-on-tv-screen-with-data.webp?a=1&b=1&s=612x612&w=0&k=20&c=J-Zr4WTRV8MSI_SlhNDUYMF9PHyB-wTZ8-Qp5dfIPcA="
              alt="About Us"
              className="img-fluid rounded"
              style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6">
            <h3>Why Choose Us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              dolorum quasi illo? Distinctio expedita commodi, nemo a quam error
              repellendus sint, fugiat quis numquam eum eveniet sequi aspernatur
              quaerat tenetur.
            </p>
            <button className="btn btn-primary">Our Courses</button>
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
                  Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
                  facilis fuga.
                </p>
                <div className="d-flex align-items-center mt-3">
                  <img
                    src={`images/pic-${num}.jpg`}
                    alt="student"
                    className="rounded-circle me-3"
                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
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
  );
};

export default About;
