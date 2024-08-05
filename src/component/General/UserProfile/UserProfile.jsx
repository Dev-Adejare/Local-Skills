// import React, { useState } from "react";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdStars } from "react-icons/md";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { RiTwitterXLine } from "react-icons/ri";
// import { FaLinkedinIn } from "react-icons/fa6";
// import hostWork from "../../../assets/logo.jpg";
// import { FaLessThan } from "react-icons/fa";
// import SingleServices from "./SingleServices";
// import { Link } from "react-router-dom";
// import "./UserProfile.css";


// const UserProfile = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleViewClick = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="userProfile">
//       <div className="--userProfile-content">
//         <div className="--userProfile-header">
//           <div>
//             <h2><FaLessThan size={40} /></h2>
//           </div>
//           <div>
//             <h2>Over Rated</h2>
//           </div>
//           <div>
//             <Link to='/editProfile'><button>Edit Profile</button></Link>
//           </div>
//         </div>
//         <div className="--userProfile-ImageDetails">
//           <img
//             src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
//             alt=""
//           />
//           <h2>Software Developer</h2>
//         </div>
//       </div>
//       <div className="--userProfile-information">
//         <div className="--userProfile-information-details">
//           <div className="--userDetails">
//             <h2>John Doe</h2>
//             <div className="--userDetails-flex">
//               <h3>Lagos state, Nigeria</h3>
//               <h3>Available (green Icon)</h3>
//             </div>
//             <hr />
//           </div>
//           <div>
//             <h1>Services Rendering</h1>
//             <div className="--Host-main">
//               <div className="--Host-details">
//                 <img src={hostWork} alt="" />
//                 <div className="--Host-check">
//                   <div>
//                     <h3>User Profession</h3>
//                     <p><FaLocationDot /> Location</p>
//                   </div>
//                   <div className="--Host-amount">
//                     <h3>#10,000</h3>
//                   </div>
//                 </div>
//                 <div className="--Host-rating">
//                   <div>
//                     <h2 onClick={handleViewClick}><button>View</button></h2>
//                   </div>
//                   <div><h2><MdStars />0.0</h2></div>
//                 </div>
//               </div>
//               <div className="--Host-details">
//                 <img src={hostWork} alt="" />
//                 <div className="--Host-check">
//                   <div>
//                     <h3>User Profession</h3>
//                     <p><FaLocationDot /> Location</p>
//                   </div>
//                   <div className="--Host-amount">
//                     <h3>#10,000</h3>
//                   </div>
//                 </div>
//                 <div className="--Host-rating">
//                   <div>
//                     <h2 onClick={handleViewClick}><button>View</button></h2>
//                   </div>
//                   <div><h2><MdStars />0.0</h2></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="--Host-additonal">
//             <hr />
//             <h1>ADDITIONAL DESCRIPTION</h1>
//             <h2>About Me</h2>
//             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur veritatis maxime quidem nam accusantium exercitationem vitae ad, animi alias voluptatem aliquid, quia temporibus accusamus, inventore officiis. Numquam laudantium tenetur ipsam.</p>
//             <h3>SKILLS</h3>
//             <div>
//                 {/* skills future content */}
//             </div>
//             <h2 className="--Host-contact">Contact And Media</h2>
//             <div className="--Host-icons-header">
//               <div>
//                 <div className="--Host-icons">
//                   <FaWhatsapp size={40} color="green"/>
//                   <FaFacebook size={40} color="blue"/>
//                   <RiTwitterXLine size={40} />
//                   <FaLinkedinIn size={40} color="blue"/>
//                 </div>
//                 <h2>+234 801 0001 001</h2>
//               </div>
//               <div>
//                 <h1>Rating and Reviews</h1>
//                 <div className="rating-review">
//                  <h1><MdStars size={40} /></h1>
//                  <h1><MdStars size={40} /></h1>
//                  <h1><MdStars size={40} /></h1>
//                  <h1><MdStars size={40} /></h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={closeModal}>&times;</span>
//             <SingleServices />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;




import React, { useState } from "react";
import {  FaWhatsapp, FaFacebook, FaLessThan } from "react-icons/fa";
import { FaLocationDot, FaLinkedinIn } from "react-icons/fa6";
import { MdStars } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import hostWork from "../../../assets/logo.jpg";
import SingleServices from "./SingleServices";
import { Link } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
  const [showModal, setShowModal] = useState(false);

  const handleViewClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="userProfile">
      <div className="--userProfile-header">
        <h2><FaLessThan size={40} /></h2>
        <h2>Over Rated</h2>
        <Link to="/editProfile">
          <button className="--editProfile-btn">Edit Profile</button>
        </Link>
      </div>

      <div className="--userProfile-main">
        <div className="--userProfile-info">
          <img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
            alt="User Profile"
            className="--userProfile-image"
          />
          <h2 className="--userProfile-profession">Software Developer</h2>
          <h2 className="--userProfile-name">John Doe</h2>
          <div className="--userDetails-flex">
            <h3><FaLocationDot /> Lagos State, Nigeria</h3>
            <h3 className="--userProfile-status">Available</h3>
          </div>
          <button className="--connect-wallet-btn">Connect Wallet to Withdraw</button>
        </div>

        <div className="--userProfile-services">
          <h1>Services Rendering</h1>
          <div className="--services-list">
            {[1, 2].map((_, index) => (
              <div className="--Host-details" key={index}>
                <img src={hostWork} alt="Service" />
                <div className="--Host-check">
                  <div>
                    <h3>User Profession</h3>
                    <p><FaLocationDot /> Location</p>
                  </div>
                  <div className="--Host-amount">
                    <h3>#10,000</h3>
                  </div>
                </div>
                <div className="--Host-rating">
                  <button onClick={handleViewClick}>View</button>
                  <h2><MdStars /> 0.0</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="--userProfile-additional">
          <h1>ADDITIONAL DESCRIPTION</h1>
          <h2>About Me</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
          <h3>SKILLS</h3>
          <div>
            {/* Skills future content */}
          </div>
          <h2>Contact And Media</h2>
          <div className="--contact-media">
            <div className="--social-icons">
              <FaWhatsapp size={40} color="green" />
              <FaFacebook size={40} color="blue" />
              <RiTwitterXLine size={40} />
              <FaLinkedinIn size={40} color="blue" />
            </div>
            <h2>+234 801 0001 001</h2>
          </div>
          <div className="--rating-review">
            <h1>Rating and Reviews</h1>
            <div className="--rating-stars">
              {[...Array(4)].map((_, index) => (
                <MdStars size={40} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <SingleServices />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

