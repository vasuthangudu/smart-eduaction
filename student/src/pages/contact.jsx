// Contact.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Contact() {
  return (
    <div>
      {/* Contact Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src="https://media.istockphoto.com/id/482690487/photo/representation-of-digital-communication-channels.webp?a=1&b=1&s=612x612&w=0&k=20&c=bmJSSlfzF4svyT3jQd4w42-yzXenyEcnbw1Q5m-7Xns=" 
              alt="Contact"
              className="img-fluid rounded shadow"
                           style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}

            />
          </div>

          {/* Form */}
          <div className="col-md-6">
            <form>
              <h3 className="mb-4">Get in Touch</h3>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                required
                maxLength="50"
                className="form-control mb-3"
              />
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                required
                maxLength="50"
                className="form-control mb-3"
              />
              <input
                type="number"
                placeholder="Enter your number"
                name="number"
                required
                className="form-control mb-3"
              />
              <textarea
                name="msg"
                placeholder="Enter your message"
                required
                maxLength="1000"
                rows="5"
                className="form-control mb-3"
              ></textarea>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="row mt-5 text-center">
          <div className="col-md-4 mb-4">
            <i className="bi bi-telephone fs-2 text-primary"></i>
            <h5 className="mt-2">Phone Number</h5>
            <p>
              <a href="tel:1234567890" className="text-decoration-none d-block">
                123-456-7890
              </a>
              <a href="tel:1112223333" className="text-decoration-none d-block">
                111-222-3333
              </a>
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <i className="bi bi-envelope fs-2 text-primary"></i>
            <h5 className="mt-2">Email Address</h5>
            <p>
              <a
                href="mailto:shaikhanas@gmail.com"
                className="text-decoration-none d-block"
              >
                shaikhanas@gmail.com
              </a>
              <a
                href="mailto:anasbhai@gmail.com"
                className="text-decoration-none d-block"
              >
                anasbhai@gmail.com
              </a>
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <i className="bi bi-geo-alt fs-2 text-primary"></i>
            <h5 className="mt-2">Office Address</h5>
            <p>Flat no. 1, A-1 Building, Jogeshwari, Mumbai, India - 400104</p>
          </div>
        </div>
      </section>
    </div>
  );
}
