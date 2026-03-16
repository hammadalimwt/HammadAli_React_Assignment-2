import React from "react";
import "./index.css";

function App() {
  // Task 2 – JSX Expressions: dynamic values
  const name = "Alex Johnson";
  const profession = "Frontend Developer";
  const experience = 2;

  // Task 3 – Skills array
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  // Task 7 – Multiple profile cards with different data
  const developers = [
    {
      id: 1,
      name: name,
      profession: profession,
      experience: experience,
      skills: skills,
      bio: "Passionate frontend developer with a knack for building responsive UIs.",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Samantha Lee",
      profession: "Full Stack Developer",
      experience: 5,
      skills: ["Python", "Django", "React", "PostgreSQL"],
      bio: "Full-stack developer with experience in building scalable web apps.",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Marcus Chen",
      profession: "UI/UX Designer & Developer",
      experience: 3,
      skills: ["Figma", "Tailwind", "JavaScript", "React"],
      bio: "Design-minded developer focused on creating seamless user experiences.",
      image: "https://i.pravatar.cc/150?img=3",
    },
  ];

  // Task 4 – Inline styles
  const headingStyle = { color: "#2c3e50", textAlign: "center" };
  const cardStyle = {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    margin: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };
  const buttonStyle = {
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  };

  return (
    <>
      <h1 style={headingStyle}>Developer Profile Cards</h1>
      <div className="profiles-container">
        {developers.map((dev) => (
          <div key={dev.id} className="profile-card" style={cardStyle}>
            {/* Task 5 – className usage */}
            <img
              className="profile-image"
              src={dev.image}
              alt={dev.name}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "0 auto 10px",
                display: "block",
              }}
            />
            <h2
              className="profile-name"
              style={{ margin: "10px 0", textAlign: "center" }}
            >
              {dev.name}
            </h2>
            <p className="profile-profession">
              <strong>Profession:</strong> {dev.profession}
            </p>
            <p className="profile-experience">
              <strong>Experience:</strong> {dev.experience} years
            </p>
            <p className="profile-bio">{dev.bio}</p>

            <div>
              <strong>Skills:</strong>
              <ul className="skills-list">
                {dev.skills.map((skill, index) => (
                  <li
                    key={index}
                    style={{
                      display: "inline-block",
                      margin: "5px",
                      padding: "5px 10px",
                      backgroundColor: "#eee",
                      borderRadius: "20px",
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <button className="contact-button" style={buttonStyle}>
              Contact
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
