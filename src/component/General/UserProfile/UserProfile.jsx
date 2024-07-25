import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdStars } from "react-icons/md";
import hostWork from "../../../assets/logo.jpg";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="userProfile">
      <div className="--userProfile-content">
        <div className="--userProfile-header">
          <div>
            <h2>Icon</h2>
          </div>
          <div>
            <h2>Over Rated</h2>
          </div>
          <div>
            <h2>Icon</h2>
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
                    <p><FaLocationDot /> Location</p>
                  </div>
                  <div className="--Host-amount">
                    <h3>#10,000</h3>
                  </div>
                </div>
                <div className="--Host-rating">
                  <div>
                    {/* <h2>A. Adebayo</h2> */}
                  </div>
                  <div><h2><MdStars />0.0</h2></div>
                </div>
              </div>
              {/* second */}
              <div className="--Host-details">
                <img src={hostWork} alt="" />
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
                  <div>
                    {/* <h2>A. Adebayo</h2> */}
                  </div>
                  <div><h2><MdStars />0.0</h2></div>
                </div>
              </div>
              {/* third */}
              <div className="--Host-details">
                <img src={hostWork} alt="" />
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
                  <div>
                    {/* <h2>A. Adebayo</h2> */}
                  </div>
                  <div><h2><MdStars />0.0</h2></div>
                </div>
              </div>
              {/* fourth */}
              <div className="--Host-details">
                <img src={hostWork} alt="" />
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
                  <div>
                    {/* <h2>A. Adebayo</h2> */}
                  </div>
                  <div><h2><MdStars />0.0</h2></div>
                </div>
              </div>
              {/* fifth */}
              <div className="--Host-details">
                <img src={hostWork} alt="" />
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
                  <div>
                    {/* <h2>A. Adebayo</h2> */}
                  </div>
                  <div><h2><MdStars />0.0</h2></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
