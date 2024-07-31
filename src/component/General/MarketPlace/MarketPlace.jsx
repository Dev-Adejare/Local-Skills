import React from 'react'
import marketAds from "../../../assets/ads.webp"
import { CiSearch } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import "./MarketPlace.css"
import Footer from '../Footer/Footer';

const MarketPlace = () => {
  return (
    <div>
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
        {/* ninth */}
        <div className='--Marketplace-Card'>
          <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" />
          <h2>John Doe</h2>
          <h3>Profesional Barber</h3>
          <div className='--Marketplace-inner-Flex'>
            <h3><button>Contact</button></h3>
            <div>***</div>
          </div>
        </div>
        {/* others */}
      </div>

        <div className='--marketplace-popular'>
          <div>
            <h1>Popular Services</h1>
          </div>

          <div className='--marketplace-popular-flex'>
            <div className='--marketplace-popular-card' style={{ backgroundColor: 'green' }}>
              <h2>Furniture</h2>
              <h1>Carpentry Work</h1>
              <img src="https://i.pinimg.com/736x/48/77/c2/4877c2af69d52f49ef20ad56709ce32b.jpg" alt="" />
            </div>
            <div className='--marketplace-popular-card' style={{ backgroundColor: 'blue' }}>
              <h2>Plumbing</h2>
              <h1>Pipe Installation</h1>
              <img src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/98149af3-77c6-42db-b560-95e78200cb03/9b33f5f3-65e5-464c-bb3f-a35a8d3391f3.png" alt="" />
            </div>
            <div className='--marketplace-popular-card' style={{ backgroundColor: 'red' }}>
              <h2>Electrical</h2>
              <h1>Wiring Services</h1>
              <img src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/441c4d33-af18-4b8b-8e71-f1d904f83b52/eb84e13b-765a-440b-897d-575039ddd836.png" alt="" />
            </div>
            <div className='--marketplace-popular-card' style={{ backgroundColor: 'orange' }}>
              <h2>Painting</h2>
              <h1>Home Painting</h1>
              <img src="https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/84262/253849/1649227911796_IMG_20220406_114629__07312.1687159598.jpg?c=2" alt="" />
            </div>
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  )
}

export default MarketPlace
