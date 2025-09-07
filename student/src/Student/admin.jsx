import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [users, setUsers] = useState([
    { name: "Alice", role: "Student" },
    { name: "Bob", role: "Teacher" },
  ]);
  const [files, setFiles] = useState([]);
  const [reports, setReports] = useState({
    attendance: "85%",
    performance: "78%",
  });
  const [announcements, setAnnouncements] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [videos, setVideos] = useState([]);
  const [leaderboard, setLeaderboard] = useState([
    { student: "Alice", score: 90 },
    { student: "John", score: 75 },
    { student: "Emma", score: 88 },
  ]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sidebar toggle
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Manage Users
  const addUser = () => {
    const name = prompt("Enter user name:");
    const role = prompt("Enter role (Student/Teacher):");
    if (name && role) {
      setUsers([...users, { name, role }]);
    }
  };

  const editUser = (index) => {
    const name = prompt("Edit name:", users[index].name);
    const role = prompt("Edit role:", users[index].role);
    if (name && role) {
      const updatedUsers = [...users];
      updatedUsers[index] = { name, role };
      setUsers(updatedUsers);
    }
  };

  const deleteUser = (index) => {
    if (window.confirm("Are you sure to delete this user?")) {
      setUsers(users.filter((_, i) => i !== index));
    }
  };

  // Manage Content
  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFiles([...files, file.name]);
    }
  };

  // Reports
  const updateReports = () => {
    setReports({
      attendance: `${Math.floor(Math.random() * 20 + 80)}%`,
      performance: `${Math.floor(Math.random() * 20 + 70)}%`,
    });
  };

  // Announcements
  const sendAnnouncement = () => {
    const text = document.getElementById("announcementText").value.trim();
    if (text) {
      setAnnouncements([...announcements, text]);
      document.getElementById("announcementText").value = "";
    } else {
      alert("Please write an announcement!");
    }
  };

  // Quizzes
  const addQuiz = () => {
    const question = prompt("Enter quiz question:");
    const optionA = prompt("Option A:");
    const optionB = prompt("Option B:");
    const optionC = prompt("Option C:");
    const optionD = prompt("Option D:");
    const correct = prompt("Correct answer (A/B/C/D):");
    if (question && optionA && optionB && optionC && optionD && correct) {
      setQuizzes([
        ...quizzes,
        { question, options: { A: optionA, B: optionB, C: optionC, D: optionD }, correct },
      ]);
    }
  };

  // Videos
  const addVideo = () => {
    const link = prompt("Enter video link (YouTube URL):");
    if (link) {
      setVideos([...videos, link]);
    }
  };

  // Leaderboard
  const refreshLeaderboard = () => {
    // Random demo scores
    const updated = leaderboard.map((s) => ({
      ...s,
      score: Math.floor(Math.random() * 30 + 70),
    }));
    setLeaderboard(updated);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`bg-primary text-white p-3 position-fixed h-100 ${
          sidebarOpen ? "d-block" : "d-none d-md-block"
        }`}
        style={{ width: "250px" }}
      >
        <h2 className="text-center">Admin Panel</h2>
        <ul className="nav flex-column mt-4">
          {[
            "dashboard",
            "users",
            "content",
            "reports",
            "announcements",
            "quizzes",
            "videos",
            "leaderboard",
          ].map((tab) => (
            <li key={tab} className="nav-item mb-2">
              <button
                className={`btn w-100 text-start ${
                  activeTab === tab
                    ? "btn-light text-primary"
                    : "btn-outline-light"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1" style={{ marginLeft: "250px" }}>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center p-3 bg-white shadow-sm sticky-top">
          <button className="btn btn-primary d-md-none" onClick={toggleSidebar}>
            ☰
          </button>
          <h1 className="h5 text-primary m-0">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h1>
          <span>Welcome, Admin</span>
        </div>

        <div className="p-3">
          {/* Dashboard */}
          {activeTab === "dashboard" && (
            <div className="row g-3">
              <div className="col-md-3" onClick={() => setActiveTab("users")}>
                <div className="card text-center shadow-sm p-3">
                  <h5>Users</h5>
                  <p>Manage students & teachers</p>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setActiveTab("content")}>
                <div className="card text-center shadow-sm p-3">
                  <h5>Content</h5>
                  <p>Upload materials</p>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setActiveTab("reports")}>
                <div className="card text-center shadow-sm p-3">
                  <h5>Reports</h5>
                  <p>View statistics</p>
                </div>
              </div>
              <div
                className="col-md-3"
                onClick={() => setActiveTab("announcements")}
              >
                <div className="card text-center shadow-sm p-3">
                  <h5>Announcements</h5>
                  <p>Send updates</p>
                </div>
              </div>
              <div
                className="col-md-3"
                onClick={() => setActiveTab("quizzes")}
              >
                <div className="card text-center shadow-sm p-3">
                  <h5>Quizzes</h5>
                  <p>Create and manage quizzes</p>
                </div>
              </div>
              <div
                className="col-md-3"
                onClick={() => setActiveTab("videos")}
              >
                <div className="card text-center shadow-sm p-3">
                  <h5>Videos</h5>
                  <p>Upload & share videos</p>
                </div>
              </div>
              <div
                className="col-md-3"
                onClick={() => setActiveTab("leaderboard")}
              >
                <div className="card text-center shadow-sm p-3">
                  <h5>Leaderboard</h5>
                  <p>View quiz results</p>
                </div>
              </div>
            </div>
          )}

          {/* Manage Users */}
          {activeTab === "users" && (
            <div>
              <h2>Manage Users</h2>
              <button className="btn btn-primary mb-2" onClick={addUser}>
                + Add User
              </button>
              <table className="table table-bordered">
                <thead className="table-primary">
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.role}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-warning me-2"
                          onClick={() => editUser(index)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => deleteUser(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Manage Content */}
          {activeTab === "content" && (
            <div>
              <h2>Manage Content</h2>
              <input
                type="file"
                className="form-control mb-2"
                onChange={uploadFile}
              />
              <ul className="list-group">
                {files.map((file, i) => (
                  <li key={i} className="list-group-item">
                    {file}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Reports */}
          {activeTab === "reports" && (
            <div>
              <h2>Reports</h2>
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <div className="card p-3 text-center shadow-sm">
                    <h5>Attendance</h5>
                    <p>{reports.attendance}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card p-3 text-center shadow-sm">
                    <h5>Performance</h5>
                    <p>{reports.performance}</p>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary" onClick={updateReports}>
                Refresh Reports
              </button>
            </div>
          )}

          {/* Announcements */}
          {activeTab === "announcements" && (
            <div>
              <h2>Announcements</h2>
              <textarea
                id="announcementText"
                rows="4"
                className="form-control mb-2"
                placeholder="Write announcement..."
              ></textarea>
              <button
                className="btn btn-primary mb-3"
                onClick={sendAnnouncement}
              >
                Send
              </button>
              <h5>Previous Announcements:</h5>
              <ul className="list-group">
                {announcements.map((ann, i) => (
                  <li key={i} className="list-group-item">
                    {ann}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quizzes */}
          {activeTab === "quizzes" && (
            <div>
              <h2>Manage Quizzes</h2>
              <button className="btn btn-primary mb-3" onClick={addQuiz}>
                + Add Quiz
              </button>
              <ul className="list-group">
                {quizzes.map((quiz, i) => (
                  <li key={i} className="list-group-item">
                    <b>Q:</b> {quiz.question}
                    <ul>
                      {Object.entries(quiz.options).map(([key, value]) => (
                        <li key={key}>
                          {key}: {value}
                        </li>
                      ))}
                    </ul>
                    <b>Correct:</b> {quiz.correct}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Videos */}
          {activeTab === "videos" && (
            <div>
              <h2>Manage Videos</h2>
              <button className="btn btn-primary mb-3" onClick={addVideo}>
                + Add Video
              </button>
              <div className="row">
                {videos.map((link, i) => (
                  <div className="col-md-6 mb-3" key={i}>
                    <div className="card shadow-sm">
                      <iframe
                        width="100%"
                        height="250"
                        src={link.replace("watch?v=", "embed/")}
                        title={`video-${i}`}
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Leaderboard */}
          {activeTab === "leaderboard" && (
            <div>
              <h2>Quiz Leaderboard</h2>
              <button
                className="btn btn-primary mb-3"
                onClick={refreshLeaderboard}
              >
                Refresh Scores
              </button>
              <table className="table table-bordered">
                <thead className="table-primary">
                  <tr>
                    <th>Student</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard
                    .sort((a, b) => b.score - a.score)
                    .map((entry, i) => (
                      <tr key={i}>
                        <td>{entry.student}</td>
                        <td>{entry.score}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
