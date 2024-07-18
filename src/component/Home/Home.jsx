import React from 'react'
import Navbar from '../General/Navbar/Navbar'
import ContentOne from '../General/ContentOne/ContentOne'
import ContentTwo from '../General/ContentTwo/ContentTwo'
import Hero from '../General/Hero/Hero'
import Features from '../General/Features/Features'
import Choose from '../General/Choose/Choose'
import Footer from '../General/Footer/Footer'

const Home = () => {
  return (
    <div>
      <div>
       <Navbar/>
      </div>
      <div>
       <ContentOne /> 
      </div>
      <div>
        <ContentTwo/>
      </div>
      <div>
        <Hero/>
      </div>
      <div>
        <Features/>
      </div>
      <div>
        <Choose/>
      </div>
      <div>
       <Footer/>
      </div>
    </div>
  )
}

export default Home
