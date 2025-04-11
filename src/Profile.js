// src/Profile.js
import React from 'react';
import './App.css';

const Profile = () => (
  <div className="profile-section">
    <h2>My Profile</h2>
    <div className="profile-card">
    <img src="/image.png" alt="My Profile" className="profile-pic" />
    <div className="profile-details">
        <p><strong>Name:</strong> Mahaashri Chandran</p>
        <p><strong>Course:</strong> MSc Software Systems</p>
      </div>
    </div>
  </div>
);

export default Profile;
