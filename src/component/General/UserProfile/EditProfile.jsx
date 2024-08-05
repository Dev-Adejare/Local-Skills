import React, { useState } from "react";
import "./EditProfile.css";

const EditProfile = () => {
  const initialProfileData = {
    profilePhoto: "",
    location: "",
    profession: "",
    professionImage: "",
    price: "",
    professionPicture1: "",
    professionPicture2: "",
    aboutMe: "",
    phoneNumber: "",
  };

  const [profileData, setProfileData] = useState(initialProfileData);
  const [originalProfileData, setOriginalProfileData] =
    useState(initialProfileData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleCancel = () => {
    setProfileData(originalProfileData);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setOriginalProfileData(profileData);
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form className="edit-profile-form" onSubmit={handleSave}>
        <h1>Profile Information</h1>
        <div className="form-section">
          <label>
            Profile Photo:
            <input type="file" name="profilePhoto" onChange={handleChange} />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={profileData.location}
              onChange={handleChange}
            />
          </label>
          <label>
            Profession:
            <input
              type="text"
              name="profession"
              value={profileData.profession}
              onChange={handleChange}
            />
          </label>
        </div>
        <h1>Profession Information</h1>
        <div className="form-section">
          <label>
            Profession Image:
            <input type="file" name="professionImage" onChange={handleChange} />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={profileData.price}
              onChange={handleChange}
            />
          </label>
          <label>
            Additional Profession Picture 1:
            <input
              type="file"
              name="professionPicture1"
              onChange={handleChange}
            />
          </label>
          <label>
            Additional Profession Picture 2:
            <input
              type="file"
              name="professionPicture2"
              onChange={handleChange}
            />
          </label>
        </div>
        <h1>Additional Information</h1>
        <div className="form-section">
          <label>
            About Me:
            <textarea
              name="aboutMe"
              value={profileData.aboutMe}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Phone Number:
            <input
              type="number"
              name="phoneNumber"
              value={profileData.phoneNumber}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="--edit-button-group">
          <div>
            <button
              type="button"
              className="--editProfile-btn-cancel-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
          <div>
            <button type="submit" className="--editProfile-btn">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
