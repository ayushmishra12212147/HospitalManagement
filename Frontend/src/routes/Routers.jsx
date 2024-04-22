


import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";

import { Routes, Route } from 'react-router-dom'
import Contact from "../pages/Contact";

const Routers = () => {
    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/doctor/:id" element={<DoctorDetails/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Services" element={<Services/>}/>
        </Routes>
        };

        export default Routers;