import React from 'react'
import marketAds from "../../../assets/ads.webp"
import { CiSearch } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import "./MarketPlace.css"

const MarketPlace = () => {
  return (
    <div className='Marketplace'>
      <div className='--Marketplace-header'>
        <h2>Welcome back, John Doe</h2>
        <div className='--Marketplace-header-content'>
          <h2>Info</h2>
          <div>
            <h2><IoMdNotifications /></h2>
          </div>
        </div>
      </div>
      <div className='--Marketplace-image'>
        <img src={marketAds} alt="" />
      </div>
      <div className='--Marketplace-search'>
        <button>
          <div className='--Marketplace-button-flex'>
            <CiSearch size={30}/>
            <input type="text" placeholder='Search' />
          </div>
        </button>
      </div>
      <div className='--Marketplace-explore'>
        <h2>Explore Work Skills</h2>
        <div>
          <h2>See More</h2>
        </div>
      </div>

      {/* ONE CONTENT HERE LATER */}
      
      <div className='--Marketplace-CardContent'>
        <div className='--Marketplace-Card'>
          <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" />
          <h2>John Doe</h2>
          <h3>Profesional Barber</h3>
          <div className='--Marketplace-inner-Flex'>
            <h3>Contact</h3>
            <div>***</div>
          </div>
        </div>
        {/* second */}
        <div className='--Marketplace-Card'>
          <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" />
          <h2>John Doe</h2>
          <h3>Profesional Barber</h3>
          <div className='--Marketplace-inner-Flex'>
            <h3>Contact</h3>
            <div>***</div>
          </div>
        </div>
        {/* third? */}
        <div className='--Marketplace-Card'>
          <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" />
          <h2>John Doe</h2>
          <h3>Profesional Barber</h3>
          <div className='--Marketplace-inner-Flex'>
            <h3>Contact</h3>
            <div>***</div>
          </div>
        </div>
        {/* fourth */}
        <div className='--Marketplace-Card'>
          <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" />
          <h2>John Doe</h2>
          <h3>Profesional Barber</h3>
          <div className='--Marketplace-inner-Flex'>
            <h3>Contact</h3>
            <div>***</div>
          </div>
        </div>
        {/* fifth */}
        <div className='--Marketplace-Card'>
          <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" />
          <h2>John Doe</h2>
          <h3>Profesional Barber</h3>
          <div className='--Marketplace-inner-Flex'>
            <h3>Contact</h3>
            <div>***</div>
          </div>
        </div>
        {/* sixth */}
        <div className='--Marketplace-Card'>
          <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" />
          <h2>John Doe</h2>
          <h3>Profesional Barber</h3>
          <div className='--Marketplace-inner-Flex'>
            <h3>Contact</h3>
            <div>***</div>
          </div>
        </div>
        {/* seventh */}
        <div className='--Marketplace-Card'>
          <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" />
          <h2>John Doe</h2>
          <h3>Profesional Barber</h3>
          <div className='--Marketplace-inner-Flex'>
            <h3>Contact</h3>
            <div>***</div>
          </div>
        </div>
        {/* eighth */}
        <div className='--Marketplace-Card'>
          <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" />
          <h2>John Doe</h2>
          <h3>Profesional Barber</h3>
          <div className='--Marketplace-inner-Flex'>
            <h3>Contact</h3>
            <div>***</div>
          </div>
        </div>
        {/* ninth */}
        <div className='--Marketplace-Card'>
          <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" />
          <h2>John Doe</h2>
          <h3>Profesional Barber</h3>
          <div className='--Marketplace-inner-Flex'>
            <h3>Contact</h3>
            <div>***</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketPlace
