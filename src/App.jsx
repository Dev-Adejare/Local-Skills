import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import MarketPlace from "./component/General/MarketPlace/MarketPlace";
import About from "./component/General/AboutUs/AboutUs";
import UserProfile from "./component/General/UserProfile/UserProfile";
import BlogPage from "./component/General/BlogPage/BlogPage";
import EditProfile from "./component/General/UserProfile/EditProfile";
import Contact from "./component/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/marketPlace" element={<MarketPlace />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/userProfile" element={<UserProfile/>}/>
        <Route path="/editProfile" element= {<EditProfile/>}/>
        <Route path="/Blog" element={<BlogPage/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
