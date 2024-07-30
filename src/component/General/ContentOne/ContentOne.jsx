// import React from 'react';
// import './ContentOne.css';
// import imageSection from "../../../assets/hcm.webp";

// const ContentOne = () => {
//   return (
//     <div className="content-one">
//       <div className="text-content">
//         <h2>Boost Your Skills and Services</h2>
//         <h1>Versatile App For Locals <br /> Skills and Exchange Platform</h1>
//         <p>
//           Best online platform where members can post the skills<br /> or services they can offer or need.
//         </p>
//         <div className="buttons">
//           <button className="learn-more">Learn More</button>
//         </div>
//       </div>
//       <div className="image-content">
//         <img src={imageSection} alt="Versatile app" />
       
//       </div>
//     </div>
//   );
// };

// export default ContentOne;






import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ContentOne.css';
import image1 from "../../../assets/image1.png";
import image2 from "../../../assets/image2.png";
import image3 from "../../../assets/image4.png";
import image4 from "../../../assets/hcm.webp";
import image5 from "../../../assets/image5.png";


const images = [image1, image2, image3, image4, image5];
const colors = ['#F8F8FF', '#F5F5F5', '#FAF0E6', '#FFFACD', '#F0FFF0'];

const getRandomInterval = () => Math.floor(Math.random() * 2000) + 3000; 

const ContentOne = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
      setBackgroundColor(colors[Math.floor(Math.random() * colors.length)]);
    }, getRandomInterval());

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="content-one" style={{ backgroundColor: backgroundColor }}>
      <div className="text-content">
        <h2>Boost Your Skills and Services</h2>
        <h1>Versatile App For Locals <br /> Skills and Exchange Platform</h1>
        <p>
          Best online platform where members can post the skills<br /> or services they can offer or need.
        </p>
        <div className="buttons">
          <button className="learn-more">Learn More</button>
        </div>
      </div>
      <div className="image-content">
        <img src={currentImage} alt="Versatile app" key={uuidv4()} />
      </div>
    </div>
  );
};

export default ContentOne;
