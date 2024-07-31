import React, { useState } from 'react';
import "./EditProfile.css";

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    profilePhoto: '',
    location: '',
    profession: '',
    professionImage: '',
    price: '',
    professionPicture1: '',
    professionPicture2: '',
    aboutMe: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form className="edit-profile-form">
        <h1>Profile Information</h1>
        <div className="form-section">
          <label>
            Profile Photo:
            <input type="file" name="profilePhoto" onChange={handleChange} />
          </label>
          <label>
            Location:
            <input type="text" name="location" value={profileData.location} onChange={handleChange} />
          </label>
          <label>
            Profession:
            <input type="text" name="profession" value={profileData.profession} onChange={handleChange} />
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
            <input type="number" name="price" value={profileData.price} onChange={handleChange} />
          </label>
          <label>
            Additional Profession Picture 1:
            <input type="file" name="professionPicture1" onChange={handleChange} />
          </label>
          <label>
            Additional Profession Picture 2:
            <input type="file" name="professionPicture2" onChange={handleChange} />
          </label>
        </div>
        <h1>Additional Information</h1>
        <div className="form-section">
          <label>
            About Me:
            <textarea name="aboutMe" value={profileData.aboutMe} onChange={handleChange}></textarea>
          </label>
          <label>
            Phone Number:
            <input type="number" name="phoneNumber" value={profileData.phoneNumber} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditProfile;
