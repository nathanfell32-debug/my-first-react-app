import React from 'react';
import './App.css';
import ProfileCard from './ProfileCard';

function App() {
 const profiles = [
  {
    image: "https://via.placeholder.com/150",
    name: "Nathan Fell",
    jobTitle: "Facilities Officer",
    bio: "Aspiring React developer transitioning into tech.",
    skills: ["React", "HTML", "CSS"]
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Sarah Johnson",
    jobTitle: "UI Designer",
    bio: "Passionate about creating beautiful user experiences.",
    skills: ["Figma", "UX", "Wireframing"]
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Mark Thompson",
    jobTitle: "Frontend Developer",
    bio: "Loves JavaScript, React, and building cool projects.",
    skills: ["JavaScript", "React", "APIs"]
  }
 ];

 return (
  <div className="card-container">
    {profiles.map((profile, index) => (
      <ProfileCard
      key={index}
      image={profile.image}
      name={profile.name}
      jobTitle={profile.jobTitle}
      bio={profile.bio}
      skills={profile.skills}
      />
    ))}
  </div>
 );
}

export default App;
