

import React from "react";
import heroimg01 from "../assets/images/hero-img01.png";
import heroimg02  from "../assets/images/hero-img02.png";
import heroimg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png"
import icon02 from "../assets/images/icon02.png"
import icon03 from "../assets/images/icon03.png"
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import "../index.css";
import About from "../components/About/About";
const  Home=()=>{
    return <>
    {/* top section  */}
    <section className="hero__section pt-[60px] 2xl:h-[800px] pl-[90px]">
        <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] item-center justify-between">
                {/* contents */}
                <div>
                    <div className="lg:w-[570px] ">
                        <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">we help paitents live healthy , longer life </h1>
                        <p className="text_para">At XYZ Hospital, our mission is to redefine healthcare by prioritizing proactive wellness initiatives alongside advanced medical treatments.
                        With a holistic approach that encompasses physical, mental, and emotional well-being, we aim to not only extend life expectancy but to enhance its quality.
                        Through comprehensive education, personalized care plans, and innovative therapies, we empower individuals to take control of their health, unlocking the potential for vibrant longevity and meaningful living.</p>

                        <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex item-center justify-center rounded-[50px] pt-[10px] mt-[30px]">Request an Appointment</button>
                    <div>
                        {/* herocounter */}
                        <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:item-center gap-5 lg:gap-[30px]">
                            <div>
                                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                    30+
                                </h2>
                                <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]">

                                </span>
                                <p className="text__para">Years of experience</p>
                            </div>




                            <div>
                                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                    15+
                                </h2>
                                <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]">

                                </span>
                                <p className="text__para">Clinic Location</p>
                            </div>




                            <div>
                                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                    100%
                                </h2>
                                <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]">

                                </span>
                                <p className="text__para">Patient satisfaction</p>
                            </div>


                        </div>
                    </div>
                    </div>
                    
                </div>
                {/* Contents part 2 */}
                <div className="flex gap-[30px] justify-center mr-[100px]">
                    <div>
                        <img className="w-full" src={heroimg01} alt="" />
                    </div>
                    <div className="mt-[30px]">
                        <img src={heroimg02} alt="" className="w-full mb-[30px]"/>
                        <img src={heroimg03} alt="" className="w-full"/>

                    </div>

                </div>
            </div>
        </div>

    </section>
    {/* top section ending part */}
    <section>
        <div className="container">
            <div className="lg:w-[470px] mx-auto">
                <h2 className="heading text-center text-5xl font-bold">Providing the best medical services</h2>
                <p className="text__para text-center">World-class care for everyone. Our Health System Offers unmatched, expert health care.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                <div className="py-[30px] px-5 w-[350px] ml-[25px]">
                    <div className="flex items-center justify-center">
                        <img src={icon01} alt="" />
                    </div>
                    <div className="mt-[30px]">
                        <h2 className="text-[26px] leading-9 text-headingColor font-[700px] text-center">Find a Doctor</h2>
                        <p className="text-[16px] leading-7 text-text-Color font-[400] mt-4 text-center">World-class care for everyone. 
                        Our Health System Offers unmatched, expert health care.From the lab to the clinic</p>
                        <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
                        mt-[30px] mx-auto flex item-center justify-center group hover:bg-primaryColor hover:border-none">
                            <BsArrowRight className="group-hover:text-white w-6 h-5 mt-[11.3px]"/>
                        </Link>
                    </div>
                </div>



                <div className="py-[30px] px-5 w-[350px] ml-[25px]">
                    <div className="flex items-center justify-center">
                        <img src={icon02} alt="" />
                    </div>
                    <div className="mt-[30px]">
                        <h2 className="text-[26px] leading-9 text-headingColor font-[700px] text-center">Find a Location</h2>
                        <p className="text-[16px] leading-7 text-text-Color font-[400] mt-4 text-center">World-class care for everyone. 
                        Our Health System Offers unmatched, expert health care.From the lab to the clinic</p>
                        <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
                        mt-[30px] mx-auto flex item-center justify-center group hover:bg-primaryColor hover:border-none">
                            <BsArrowRight className="group-hover:text-white w-6 h-5 mt-[11.3px]"/>
                        </Link>
                    </div>
                </div>






                <div className="py-[30px] px-5 w-[350px] ml-[25px]">
                    <div className="flex items-center justify-center">
                        <img src={icon03} alt="" />
                    </div>
                    <div className="mt-[30px]">
                        <h2 className="text-[26px] leading-9 text-headingColor font-[700px] text-center">Book an Appointment</h2>
                        <p className="text-[16px] leading-7 text-text-Color font-[400] mt-4 text-center">World-class care for everyone. 
                        Our Health System Offers unmatched, expert health care.From the lab to the clinic</p>
                        <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
                        mt-[30px] mx-auto flex item-center justify-center group hover:bg-primaryColor hover:border-none">
                            <BsArrowRight className="group-hover:text-white w-6 h-5 mt-[11.3px]"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <About/>
    
    </>
};
export default Home;