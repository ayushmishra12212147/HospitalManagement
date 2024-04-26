import React from 'react'
import aboutImg from "../../assets/images/about.png"
import aci from "../../assets/images/about-card.png";
import {Link} from "react-router-dom";
const About = () => {
    return <section>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
                {/* images  */}
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 ml-[45px]">
                    <img src={aboutImg} alt="" />
                    <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                        <img src={aci} alt="" />

                    </div>
                </div>

                {/* about ki details */}
                <div className="w-full lg:w-1/2 xl:w-[780px] order-1 lg:order-2 mr-[60px]">
                    <h2 className='text-[44px] leading-[54px] font-[700] text-headingColor '>Proud to be one of the nations best</h2>
                    <p className="text__para">For 30 years in a row , National news and World reports has recognised us as one of the best public
                    hospitals in the Nation and <b>#1</b> in the City. While we continue to serve humanity.
                    </p>
                    <p className="text__para mt-[30px]">
Our best is something we strive each day, caring for our patients-not looking bach at what we acomplished but towards what
we can do tomorrow . Providing the best . We have  been serving our community for over 2 decades and will continue to do so.
                    </p>
                    <Link to=""><button className='btn bg-primaryColor py-[15px] rounded-[50px] text-white font-[600] mt-[38px] w-[150px]'>Learn More</button></Link>
                </div>


            </div>
        </div>
    </section>
}

export default About
