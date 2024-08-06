import React from 'react';
// import {Link} from 'react-router-dom'
import "@fortawesome/fontawesome-free/css/all.min.css";
const Footer = () => {
  const currentDate=new Date();
const currentYear = currentDate.getFullYear();
console.log(currentYear,currentDate);

  return (
    <footer className='mb-0'>
      {/* newslwtter section */}
  <div className="container mx-auto px-4"> 
      <div className="lg:flex justify-center lg:justify-between lg:px-36 gap-1"> 
        {/* Left side */}
        <div className="lg:flex justify-center items-center text-center lg:text-left">
          <div className="mx-auto lg:text-left shadow-xl bg-[#fff] p-3 h-[70px] w-[70px] rounded-full text-center">
            <img
              className="mx-auto ml-1 mt-2"
              src="https://bisjhintus.com/assets/images/graphics/mail.svg"
              alt="Newsletter"
            />
          </div>
          <div className="ml-4 mt-4 lg:mt-0 py-6">
            <h3 className="text-lg font-bold">Join our newsletter</h3>
            <p>Subscribe to get the latest updates from BISJHINTUS.</p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col lg:mt-8 md:flex-row justify-center items-center md:items-start">
          <form action="https://bisjhintus.com/newsletter"
           className="w-full md:w-auto">
            <input
              id="email"
              type="email"
              className="input newsletter  w-full h-14 border border-gray-300 rounded
               py-2 px-4 mb-4 sm:mb-0 sm:mr-2"
              name="email"
              placeholder="Enter your email"
              required
            />
           
            
          </form>
          <div className='w-full md:w-40'>
            <button
              type="submit"
              className="w-full mt-2 md:mt-0 md:ml-2  lg:mt-0 rounded-sm bg-cyan-500 p-4 px-10 text-white">
              SUBSCRIBE
            </button>
            </div>
        </div>
      </div>
      <hr className="mx-0 mt-10 lg:mx- xl:mx-3" />
    </div>


{/* logo and soial media icons */}
<div className="flex justify-center gap-0 md:gap-20">
          <div className="flex flex-col  ">
            <div className=" xl:flex">
              <a href="https://bisjhintus.com/" className="mb-4 ">
                <img
                  src="https://bisjhintus.com/assets/images/logo-full.png"
                  alt="BISJHINTUS Logo"
                  className="w-48 "
                />
              </a>
              {/* logo of vowlink */}
              {/* <div className="flex flex-1 xl:mt-10 mb-10">
                <Link to="/" className=" ">
                  <img
                    className="h-32 w-"
                    src="\vowlink_logo_header.png"
                    alt=""
                  />
                </Link>
              </div> */}
            </div>

            {/*social media add link done */}
            <div className="flex flex-col space-x- w-full mb-12 items-center">
              <div className="space-x-3 whitespace-nowrap">
                <a
                  href="https://www.facebook.com/BISJHINTUS"
                  className="text-gray-600 hover:text-cyan-500"
                >
                  <i className="fab fa-facebook-f bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                </a>
                <a
                  href="https://twitter.com/BISJHINTUS_lst"
                  className="text-gray-600 hover:text-cyan-500"
                >
                  <i className="fab fa-twitter   bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                </a>
                <a
                  href="https://www.instagram.com/BISJHINTUS"
                  className="text-gray-600 hover:text-cyan-500"
                >
                  <i className="fab fa-instagram   bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/bisjhintu-s-let-s-succeed-together/"
                  className="text-gray-600 hover:text-cyan-500"
                >
                  <i className="fab fa-linkedin   bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                </a>
              </div>

              {/* 2nd row icon */}
              {/* done with add link */}
              <div className="space-x-2 mt-3  whitespace-nowrap">
                <a
                  className=""
                  href="https://www.quora.com/profile/BISJHINTUS-Lets-Succeed-Together"
                >
                  <i className="fab fa-quora  bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                </a>
                <a
                  href="https://in.pinterest.com/bisjhintus/"
                  className="text-gray-600 hover:text-cyan-500"
                >
                  <i className="fab fa-pinterest  bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCq9vBOTqYP3R5h-ELeBx8Hg"
                  className="text-gray-600 hover:text-cyan-500"
                >
                  <i className="fab fa-youtube bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                </a>
                <a
                  href="https://bisjhintus.medium.com/"
                  className="text-gray-600 hover:text-cyan-500"
                >
                  <i className="fab fa-medium bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                </a>
              </div>
            </div>
          </div>
          </div>


          {/* hidden lg: */}
          {/* <div className="flex flex-col  justify-center"> */}
  <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-1 max-w-6xl w-full mx-auto p-4">
  {/* Contact info */}
  <div className="text-center md:text-left md:mb-24 mb-8  text-lg font-semibold w-full md:w-1/3">
    <h1>M/s BISJHINTUS PRIVATE LIMITED</h1>
    <br />
    <h1>CIN: U80904TR2021PTC013885</h1>
    <br />
    <h1>ISO:9001:2015, Certificate Number: 21IQGQ82</h1>
    <br />
    <p className="mt-10">
      All Rights Reserved | Copyright © BISJHINTUS | {new Date().getFullYear()}
    </p>
  </div>

  {/* Startup logo */}
  <div className="flex justify-center items-center w-full md:w-1/3">
    <img
      src="/startupIndia_vowlink_logo.png"
      alt="Logo"
      className="h-32 mb-4 md:mb-0"
    />
  </div>

  {/* Address info */}
  <div className="text-lg w-full md:w-1/3 text-center md:text-right">
    <h1 className="text-cyan-500 mb-4 md:mb-10 text-xl">CONTACT</h1>
    <ul className="space-y-4">
      <li className="text-xl font-bold">Registered Office</li>
      <li>C/O Jhintu Baidya Adhikari,</li>
      <li>Ramakrishna Colony, Belonia,</li>
      <li>South Tripura, Tripura – 799155</li>
    </ul>

    <ul className="space-y-4 mt-10">
      <li className="text-xl font-bold">Corporate Office</li>
      <li>KUDCEMP Building, 2nd Floor,</li>
      <li>MCC Commercial Complex,</li>
      <li>Mallikatte, Kadri, Mangalore,</li>
      <li>Karnataka – 575002</li>
    </ul>

    <ul className="space-y-4 mt-10">
      <li>Ph: +91 9353383517</li>
      <li>Mail: adoreforgrowth@bisjhintus.com</li>
    </ul>
  </div>
</div>


      {/* </div> */}

    </footer>
  
  );
}

export default Footer;
