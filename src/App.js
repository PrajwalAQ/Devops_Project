import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://13.51.163.50:5000/api/message")
      .then(res => res.json())
      .then(data => setMsg(data.msg))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="main-container">
      <header className="header">
        <h1>Prajwal Arnald Quadras</h1>
        <p className="subtitle">Software Developer | Public Speaker | Cloud Enthusiast</p>
        <a
          className="link-button"
          href="https://github.com/PrajwalAQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My GitHub
        </a>
      </header>

      <section className="section">
        <h2>About Me</h2>
        <p>
          Passionate about crafting efficient and scalable software solutions, I thrive on solving complex
          technical challenges with precision and innovation. I've built cloud-based apps, optimized workflows,
          and engineered smart systems that align with real-world user needs.
        </p>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li><strong>Languages:</strong> Python, Java, C</li>
          <li><strong>Web:</strong> React, Next.js, Node.js, SQL</li>
          <li><strong>DevOps:</strong> Docker, Kubernetes</li>
          <li><strong>Soft Skills:</strong> Leadership, Public Speaking, Teamwork, Time Management</li>
        </ul>
      </section>

      <section className="section">
  <h2>Projects</h2>
  <ul>
    <li>
      <strong>🧠 Multimodal Mental Health Bot:</strong>
      <p>
        Developed an AI-powered chatbot that leverages text, audio, and facial emotion analysis to detect signs of depression and suicidal intent. The bot delivers personalized support messages and connects users to mental health professionals. Ensured data privacy using encryption and ethical AI practices. Integrated ELECTRA and BlenderBot for accurate sentiment classification.
      </p>
    </li>
    <li>
      <strong>🗳️ VoteWise – Secure Online Voting System:</strong>
      <p>
        Built a full-stack Java-based voting platform using MVC architecture. Implemented JWT-based user authentication and session control, encrypted sensitive information, and secured vote casting via SSL. Incorporated role-based access control (RBAC) and real-time election result updates via a MySQL-backed DBMS.
        <br />
        <a href="https://github.com/h-rsh-n/Java_Project" target="_blank" rel="noreferrer">View Code ↗</a>
      </p>
    </li>
    <li>
      <strong>💊 Cloud-Based Medical Inventory Platform:</strong>
      <p>
        Engineered a microservices-based pharmaceutical stock management system using Docker and Kubernetes. Enabled real-time tracking of inventory, automatic restocking alerts, and role-based dashboards for pharmacies and suppliers. Significantly improved supply chain efficiency and reduced out-of-stock scenarios.
      </p>
    </li>
    <li>
      <strong>🧭 Smart Navigation System for Malls and Airports:</strong>
      <p>
        Pitched and designed a location-aware navigation system to improve customer experience in large spaces like malls and airports. Proposed smart checkout and parking solutions using IoT and real-time data. Created a scalable business strategy targeting 7,000 malls and 110 airports in the Middle East. Recognized as a top solution at PES CIE.
      </p>
    </li>
  </ul>
</section>


      <section className="section">
        <h2>Experience</h2>
        <p><strong>Alcon – SAP Security Intern (Feb 2025 – Present)</strong></p>
        <ul>
          <li>Managed user access across platforms and ensured compliance with IT security standards.</li>
          <li>Analyzed risks and implemented countermeasures with detailed reports.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Education</h2>
        <ul>
          <li><strong>PES University:</strong> B.Tech CSE (CGPA: 8.5)</li>
          <li><strong>Expert PU College:</strong> 12th – 96.77%</li>
          <li><strong>Emirates English Speaking School:</strong> 10th – 92%</li>
        </ul>
      </section>

      <footer className="footer">
        <p>📍 Hoodi, Bangalore | 📞 +91 80508 89357 | 📧 prajwalq@gmail.com</p>
        <p>© 2025 Prajwal Quadras</p>
      </footer>
    </div>
  );
}

export default App;
