import React from 'react';
// import Link from "next/link";
// import styles from '../styles/form.css'; // Import the form styles




const sampleUser = {
  id: 1,
  title: 'User Name',
  description: 'A brief description about the user.',
  image: '/path-to-image.jpg',
  video: '/path-to-video.mp4',
  funding_goal: 10000,
};

const ProfilePage = () => {

    
  return (
    <div >
    <h1>{sampleUser.title}</h1>
    <img src={sampleUser.image} alt={sampleUser.title} />
    <p>{sampleUser.description}</p>
   
    <video controls>
      <source src={sampleUser.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p>Funding Goal: ${sampleUser.funding_goal}</p>

  </div>
  );
};


export default ProfilePage;


