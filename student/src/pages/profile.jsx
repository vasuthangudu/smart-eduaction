// src/components/ProfilePage.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ProfilePage = () => {
  return (
    <div>
      {/* Header */}
     

      {/* Sidebar */}
      <div className="d-flex">
      

        {/* Profile Section */}
        <main className="flex-grow-1 p-4">
          <section>
            <h2 className="mb-4">Your Profile</h2>

            <div className="card p-4 shadow-sm">
              <div className="d-flex align-items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fERPQ1RPUnxlbnwwfHwwfHx8MA%3D%3D"
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
      
    </div>
  );
};

export default ProfilePage;
