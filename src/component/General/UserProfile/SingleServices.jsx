import React from 'react';
import './SingleServices.css';

const SingleServices = () => {
  return (
    <div className="singleServices">
      <h2>Related Services</h2>
      <div className="service-list">
        <div className='services-flex'>
            <div className='services-imageOne'>
                <img src="https://www.mckinsey.com/~/media/mckinsey/mckinsey%20quarterly/the%20five%20fifty/soft-skills-1536x1536.png" alt="" />
                
                <div>
                    <div className='--services-details'>
                        <h1>User Profession</h1>
                        <h3>Location</h3>
                        <h2>Amount</h2>
                    </div>
                    <div className='services-image-flex'>
                        <img src="https://www.mckinsey.com/~/media/mckinsey/mckinsey%20quarterly/the%20five%20fifty/soft-skills-1536x1536.png" alt="" />
                        <img src="https://www.mckinsey.com/~/media/mckinsey/mckinsey%20quarterly/the%20five%20fifty/soft-skills-1536x1536.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServices;
