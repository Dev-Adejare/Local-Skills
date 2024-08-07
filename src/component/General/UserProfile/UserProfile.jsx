import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdStars } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import hostWork from "../../../assets/logo.jpg";
import { FaLessThan } from "react-icons/fa";
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
      <div className="--userProfile-content">
        <div className="--userProfile-header">
          <div>
            <h2>
              <FaLessThan size={40} />
            </h2>
          </div>
          <div>
            <h2>Over Rated</h2>
          </div>
          <div>
            <Link to="/editProfile">
              <button>Edit Profile</button>
            </Link>
          </div>
        </div>
        <div className="--userProfile-ImageDetails">
          <img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
            alt=""
          />
          <h2>Software Developer</h2>
        </div>
      </div>
      <div className="--userProfile-information">
        <div className="--userProfile-information-details">
          <div className="--userDetails">
            <h2>John Doe</h2>
            <div className="--userDetails-flex">
              <h3>Lagos state, Nigeria</h3>
              <h3>Available (green Icon)</h3>
            </div>
            <hr />
          </div>
          <div>
            <h1>Services Rendering</h1>
            <div className="--Host-main">
              <div className="--Host-details">
                <img src={hostWork} alt="" />
                <div className="--Host-check">
                  <div>
                    <h3>User Profession</h3>
                    <p>
                      <FaLocationDot /> Location
                    </p>
                  </div>
                  <div className="--Host-amount">
                    <h3>#10,000</h3>
                  </div>
                </div>
                <div className="--Host-rating">
                  <div>
                    <h2 onClick={handleViewClick}>
                      <button>View</button>
                    </h2>
                  </div>
                  <div>
                    <h2>
                      <MdStars />
                      0.0
                    </h2>
                  </div>
                </div>
              </div>
              <div className="--Host-details">
                <img src={hostWork} alt="" />
                <div className="--Host-check">
                  <div>
                    <h3>User Profession</h3>
                    <p>
                      <FaLocationDot /> Location
                    </p>
                  </div>
                  <div className="--Host-amount">
                    <h3>#10,000</h3>
                  </div>
                </div>
                <div className="--Host-rating">
                  <div>
                    <h2 onClick={handleViewClick}>
                      <button>View</button>
                    </h2>
                  </div>
                  <div>
                    <h2>
                      <MdStars />
                      0.0
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="--Host-additonal">
            <hr />
            <h1>ADDITIONAL DESCRIPTION</h1>
            <h2>About Me</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur veritatis maxime quidem nam accusantium exercitationem
              vitae ad, animi alias voluptatem aliquid, quia temporibus
              accusamus, inventore officiis. Numquam laudantium tenetur ipsam.
            </p>
            <h3>SKILLS</h3>
            <div>{/* skills future content */}</div>
            <h2 className="--Host-contact">Contact And Media</h2>
            <div className="--Host-icons-header">
              <div>
                <div className="--Host-icons">
                  <FaWhatsapp size={40} color="green" />
                  <FaFacebook size={40} color="blue" />
                  <RiTwitterXLine size={40} />
                  <FaLinkedinIn size={40} color="blue" />
                </div>
                <h2>+234 801 0001 001</h2>
              </div>
              <div>
                <h1>Rating and Reviews</h1>
                <div className="rating-review">
                  <h1>
                    <MdStars size={40} />
                  </h1>
                  <h1>
                    <MdStars size={40} />
                  </h1>
                  <h1>
                    <MdStars size={40} />
                  </h1>
                  <h1>
                    <MdStars size={40} />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <SingleServices />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
