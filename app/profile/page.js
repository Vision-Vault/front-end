'use client';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from "next/link";
import styles from "./../../styles/profile.css"
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';



export default function Profile() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://new-backend-alpha.vercel.app/api/v1/accounts/${userId}/`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        // Extract the desired fields
        const { username, profile_picture, bio, email } = data;
        setUserData({ username, profile_picture, bio, email });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  
  }, []);
 
  return (
    <div className="body1">
      <div className="container">
        <div className="profile-header">
          <div className="profile-img">
            <img src={userData?.profile_picture} width="200" alt="Profile Image" />
          </div>
          <div className="profile-nav-info">
            <div className="address">
              <p className="country" id="state">
                Profile Page: {userData?.username}
              </p>
            </div>
          </div>
          <div className="profile-option">
            <div className="notification">
              <i className="fa fa-bell"></i>
              <span className="alert-message">3</span>
            </div>
          </div>
        </div>
        <div className="main-bd">
          <div className="left-side">
            <div className="profile-side">
              <h2>
                <p>{userData?.email}</p>
              </h2>
              <p className="user-mail">
                <i className="fa fa-envelope"></i> Test@gmail.com
              </p>
              <div className="user-bio">
                <h3>Bio</h3>
                <p className="bio">
                  <h3>description : </h3>
                  {userData?.bio}
                </p>
              </div>
              <div className="profile-btn">
                <button className="chatbtn" id="chatBtn">
                  <i className="fa fa-comment"></i> Chat
                </button>
                <button className="createbtn" id="Create-post">
                  <i className="fa fa-plus"></i> Create
                </button>
              </div>
              <div className="user-rating">
                <h3 className="rating">4.5</h3>
                <div className="rate">
                  <div className="star-outer">
                    <div className="star-inner">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                  <span className="no-of-user-rate">
                    <span>123</span>&nbsp;&nbsp;Posts
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="right-side-post">
              <h1>Your Post :- </h1>
              {/* <p>{userData?.description}</p>
              <p>{userData?.video}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// // const sampleUser = {
// //     id: 1,
// //     title: 'john deo ',
// //     description: 'A brief description about the user.',
// //     image: '/images/profilepic.jpeg',
// //     video: 'https://www.youtube.com/watch?v=8pzIuLFuv6U',
// //     funding_goal: 10000,
// // };

// // export default  function profile() {
// //     try{
// //         const response = axios.get(`https://new-backend-alpha.vercel.app/api/v1/accounts/1/`);
// //         const data = response.data;
    
// //         // Extract the desired fields
// //         const { username, profile_picture, bio, email } = data;
    
// //         return { username, profile_picture, bio, email };
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //         throw error;
// //       }
// //     };
// const fetchData = async (accountId) => {
//     try {
//       const response = await axios.get(`https://new-backend-alpha.vercel.app/api/v1/accounts/${accountId}`);
//       const data = response.JSON();
  
//       // Extract the desired fields
//       const { username, profile_picture, bio, email } = data;
  
//       return { username, profile_picture, bio, email };
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error;
//     }
//   };
  
  

//   export default function MyComponent() {
//     const [userData, setUserData] = useState(null);
  
//     useEffect(() => {
//       // Fetch data when the component mounts
//       fetchData(1) // Replace 1 with the desired account ID
//         .then((data) => {
//           setUserData(data);
//         })
//         .catch((error) => {
//           // Handle errors
//         });
//     }, []);
//     // const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     //     next: { revalidate: 60 },
//     // });
//     // const profile = await response.json();
    
//     // const profilejxs = profile.map((post) => {
//     //     return (
//     //         <div style={{ padding: "70px" }}>
//     //             <p>{post.username}</p>
//     //             <p>{post.profile_picture}</p>
//     //             <p>{post.bio}</p>
//     //             <p>{post.email}</p>
//     //         </div>
//     //     );
//     // });
//     return (
//         <div class="body1">
//             <div class="container">
//                 <div class="profile-header">
//                     <div class="profile-img">
//                         <img src={data.image} width="200" alt="Profile Image" />
//                     </div>
//                     <div class="profile-nav-info">
//                         <div class="address" >

//                             <p class="country"  id="state">Profile Page :-  {data.username}</p>
//                         </div>
//                     </div>
//                     <div class="profile-option">
//                         <div class="notification">
//                             <i class="fa fa-bell"></i>
//                             <span class="alert-message">3</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="main-bd">
//                     <div class="left-side">
//                         <div class="profile-side">

//                             <h2><p>{data.email}</p></h2>
//                             <p class="user-mail"><i class="fa fa-envelope"></i> Test@gmail.com</p>
//                             <div class="user-bio">
//                                 <h3>Bio</h3>
//                                 <p class="bio">
//                                     <h3>description : </h3>
//                                     {data.bio}
//                                 </p>
//                             </div>
//                             <div class="profile-btn">
//                                 <button class="chatbtn" id="chatBtn"><i class="fa fa-comment"></i> Chat</button>
//                                 <button class="createbtn" id="Create-post"><i class="fa fa-plus"></i> Create</button>
//                             </div>
//                             <div class="user-rating">
//                                 <h3 class="rating">4.5</h3>
//                                 <div class="rate">
//                                     <div class="star-outer">
//                                         <div class="star-inner">
//                                             <i class="fa fa-star"></i>
//                                             <i class="fa fa-star"></i>
//                                             <i class="fa fa-star"></i>
//                                             <i class="fa fa-star"></i>
//                                             <i class="fa fa-star"></i>
//                                         </div>
//                                     </div>
//                                     <span class="no-of-user-rate"><span>123</span>&nbsp;&nbsp;Posts</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="right-side">
//                         <div class="right-side-post">
//                         <h1>Your Post :- </h1>
//                                 {/* <p>{data.description}</p>
//                                 <p>
//                                     {data.video}
//                                 </p> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//         </div >  
//     );
// };





