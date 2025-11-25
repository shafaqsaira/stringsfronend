import React, { useState } from "react";
import bg from "../assets/worldd.png";
import b from "../assets/Rectangle-2560.png";
import sofa from "../assets/sofa.png";
import lines from "../assets/lines.png";
import lp from "../assets/lp.png";
import copy from "../assets/copy.png"
import map from "../assets/map.png"
import slide1 from "../assets/client.png";
import slide2 from "../assets/clnt.png";
import slide3 from "../assets/client.png";
import {
  FaHome,
  FaUsers,
  FaImages,
  FaGraduationCap,
  FaCog,
  FaBullhorn,
  FaRobot,
  FaBox,
  FaPhone,
  FaMobileAlt,
  FaPenNib,
  FaBookOpen,
  FaShoppingCart,
  FaBusinessTime,
  FaNetworkWired,
  FaBug,
  FaSyncAlt,
  FaChalkboardTeacher,
  FaDraftingCompass,
  FaDatabase,
  FaBuilding,
  FaUniversity,
  FaCogs,
  FaFileAlt,
  FaTruck,
  FaHospital
} from "react-icons/fa";



export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(menu);
  };
  const images = [slide1, slide2, slide3];
  const [currentIndex, setCurrentIndex] = useState(0);

const goToSlide = (index) => {
  setCurrentIndex(index);
};
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "97vh",
          width: "100%",
          color: "white",
        }}
      >
        <div className="navbar">
          <div className="grid navbar-grid">
            <div className="logo">
              <img src="strings.png" width={250} alt="Logo" />
            </div>

            {/* Navbar */}
            <nav className="nav">
              <ul className="nav-links">
               {/* HOME */}
<li
  className="dropdown"
  onMouseEnter={() => toggleMenu("home")}
  onMouseLeave={() => toggleMenu(null)}
>
  <a href="/">Home ▾</a>
  {openMenu === "home" && (
    <ul className="dropdown-menu dropdown-rolling">
    <li className="dropdown-sub">
      <a href="/About"><FaUsers className="icon orbit" /> About</a>
    </li>
    <li className="dropdown-sub">
      <a href="/OurTeam"><FaUsers className="icon orbit" /> Our Team</a>
    </li>
    <li className="dropdown-sub">
      <a href="/Gallery"><FaImages className="icon orbit" /> Gallery</a>
    </li>
    <li className="dropdown-sub">
      <a href="/LearnToEarn"><FaGraduationCap className="icon orbit" /> Learn To Earn</a>
    </li>
  </ul>
  
  )}
</li>


               {/* SERVICES */}
<li
  className="dropdown"
  onMouseEnter={() => toggleMenu("services")}
  onMouseLeave={() => toggleMenu(null)}
>
  <a href="">Services ▾</a>
  {openMenu === "services" && (
    <ul className="dropdown-menuu dropdown-rolling">
      <li className="dropdown-sub"><a href="#"><FaSyncAlt className="icon orbit" /> Digital Transformation</a></li>
      <li className="dropdown-sub"><a href="#"><FaBullhorn className="icon orbit" /> Digital Marketing</a></li>
      <li className="dropdown-sub"><a href="#"><FaRobot className="icon orbit" /> AI Consultancy</a></li>
      <li className="dropdown-sub"><a href="#"><FaChalkboardTeacher className="icon orbit" /> Vocational Training</a></li>
      <li className="dropdown-sub"><a href="#"><FaBusinessTime className="icon orbit" /> Business Consultancy</a></li>
      <li className="dropdown-sub"><a href="#"><FaCog className="icon orbit" /> Web Development</a></li>
      <li className="dropdown-sub"><a href="#"><FaMobileAlt className="icon orbit" /> Mobile Apps</a></li>
      <li className="dropdown-sub"><a href="#"><FaPenNib className="icon orbit" /> Content Writing</a></li>
      <li className="dropdown-sub"><a href="#"><FaDraftingCompass className="icon orbit" /> UI/UX Designing</a></li>
      <li className="dropdown-sub"><a href="#"><FaBug className="icon orbit" /> UAT Testing</a></li>
      <li className="dropdown-sub"><a href="#"><FaNetworkWired className="icon orbit" /> System Integration</a></li>
      <li className="dropdown-sub"><a href="#"><FaDatabase className="icon orbit" /> Data Migration</a></li>
      <li className="dropdown-sub"><a href="#"><FaBookOpen className="icon orbit" /> E-Book Translation</a></li>
      <li className="dropdown-sub"><a href="#"><FaShoppingCart className="icon orbit" /> E-Commerce</a></li>
    </ul>
  )}
</li>

<li><a href="">Blog</a></li>

{/* PRODUCTS */}
<li
  className="dropdown"
  onMouseEnter={() => toggleMenu("products")}
  onMouseLeave={() => toggleMenu(null)}
>
  <a href="">Products ▾</a>
  {openMenu === "products" && (
    <ul className="dropdown-menuu dropdown-rolling">
      <li className="dropdown-sub"><a href="#"><FaBuilding className="icon orbit" /> Property Management</a></li>
      <li className="dropdown-sub"><a href="#"><FaUniversity className="icon orbit" /> Campus Management</a></li>
      <li className="dropdown-sub"><a href="#"><FaGraduationCap className="icon orbit" /> Learning Management</a></li>
      <li className="dropdown-sub"><a href="#"><FaCogs className="icon orbit" /> ERP</a></li>
      <li className="dropdown-sub"><a href="#"><FaFileAlt className="icon orbit" /> OMR</a></li>
      <li className="dropdown-sub"><a href="#"><FaTruck className="icon orbit" /> Distribution Management</a></li>
      <li className="dropdown-sub"><a href="#"><FaHospital className="icon orbit" /> Hospital System</a></li>
      <li className="dropdown-sub"><a href="#"><FaShoppingCart className="icon orbit" /> Ecommerce</a></li>
    </ul>
  )}
</li>


                <li>
                  <a href="">Contact us</a>
                </li>

                <div className="phone">
                  <p>|</p>
                  <p>+92 3139306607</p>
                </div>
              </ul>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <h1 className="h">
          Transforming Ideas <br />
          into{" "}
          <span className="blue">
            INNOVATIVE <br /> SOLUTIONS.
          </span>
        </h1>
        <p className="p">
          Grow your business through our <br />
          Tech Solutions and unlock your potential.
        </p>
        <button className="btn">Explore More</button>
      </div>

      {/* Services */}
      <h2 className="h2">
        Our <span className="orng">Services</span>
      </h2>
      <div className="card">
        <div className="card1">
          <h2 className="hhh">
            Digital <br />
            Transformation
          </h2>
          <p className="pp">
            If you have any questions about <br />
            our product or services, our <br /> office is here to help.
          </p>
        </div>
        <div className="card2">
          <h2 className="hh">Digital Marketing</h2>
          <p className="pp">
            If you have any questions about <br />
            our product or services, our <br /> office is here to help.
          </p>
        </div>
        <div className="card3">
          <h2 className="hh">AI Consultancy</h2>
          <p className="pp">
            If you have any questions about <br />
            our product or services, our <br /> office is here to help.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card1">
          <h2 className="hhh">
            Vocational And <br />
            Technical Training
          </h2>
          <p className="pp">
            If you have any questions about <br />
            our product or services, our <br /> office is here to help.
          </p>
        </div>
        <div className="card2">
          <h2 className="hh">UI/UX Designing</h2>
          <p className="pp">
            If you have any questions about <br />
            our product or services, our <br /> office is here to help.
          </p>
        </div>
        <div className="card3">
          <h2 className="hh">Web Development</h2>
          <p className="pp">
            If you have any questions about <br />
            our product or services, our <br /> office is here to help.
          </p>
        </div>
      </div>

      {/* Technologies */}
      <h2 className="h2">
        Technologies <span className="orng">We Use</span>
      </h2>
      <div
        style={{
          backgroundImage: `url(${b})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "450px",
          width: "39%",
          color: "white",
          marginTop: "50px",
          marginLeft: "50px",
        }}
      >
        <div className="blank">
          <h5 className="h4">LANGUAGES</h5>
          <p className="lng">PYTHON, DJANGO, PHP</p>
          <div className="image-container">
            <img className="sofa" src={sofa} width={300} height={450} alt="" />
            <h5 className="overlay-text">FRAMEWORKS</h5>
            <p className="overlay-textt">ODOO, SHOPIFY WORDPRESS</p>
          </div>
        </div>
        <div className="data">
          <h5 className="base">DATABASE</h5>
          <p className="my">
            <div className="sql">
              MySQL, PostgreSQL <br />
              MongoDB, MSSQL <br />
              AWS DynamoDB
            </div>
          </p>
        </div>
        <div className="client">
          <h5 className="basee">CLIENTS SIDE</h5>
          <p className="my">
            <div className="sqll">
              AngularJS, <br />
              React JS <br />
              Bootstrap <br />
              Custom JavaScript
            </div>
          </p>
        </div>
        <div className="lin">
          <img src={lines} alt="" />
          <h5 className="text-on-img">SERVER SIDE</h5>
          <p className="text-on-img title">
            Apache, <br />
            Nginx <br />
            Unicorn, Puma Thin <br />
            Passenge
          </p>
        </div>
        <div className="tec">
          <h4 className="no">TECHNOLOGIES</h4>
        </div>
        <div className="lp">
          <img className="imggg" src={lp} width={535} height={260} alt="" />
          <div className="photo-caption text1">API INTEGRATION</div>
          <div className="photo-caption text2">
            Payment Gateways <br />
            Google Apps, Ads platforms <br />
            Social Media, Geolocation <br />
            Travel APIs, Shipping APIs <br /> Marketplaces
          </div>
        </div>
        <div className="image-wrapper">
  <img className="cp" src={copy} alt="" />
  <p className="f">E-</p>
  <p className="fp">COMMERECE</p>
  <p className="extra">
    SpreeCommerce <br />
  Custom ecommerce</p>
</div>
<div className="mbl">
<h3 className="mo">MOBILE</h3>
<p className="h6">
  iOS, Android <br />
React, Native</p>
</div>
<div>
  <img className="map" src={map} alt=""/>
  <h1 className="blogs">BLOGS</h1>
  <p className="all">Discover all information you want to plan, understand and enjoy life at Strings Technologies. <br /> 
  Our professionals have documented their findings and experiences to keep you informed.</p>
  <button className="button">Visit Now</button>
  <h1 className="clt">CLIENTS</h1>
</div>
{/* Image Slider */}
<div className="slider">
  <img src={images[currentIndex]} alt="slider" className="slide-img" />
  <div className="dots">
    {images.map((_, index) => (
      <span
        key={index}
        className={`dot ${index === currentIndex ? "active" : ""}`}
        onClick={() => goToSlide(index)}
      ></span>
    ))}
  </div>
</div>
<footer class="footer">
  <div class="footer-container">

   
    <div class="footer-col">
      <h2 class="footer-logo">STRINGS <br /> TECHNOLOGIES</h2>
      <p className="stg">
      Strings Technologies goal is to provide  you the best possible IT Solutions and  Services around the
      globe
      </p>
      <input className="input" type="Email" placeholder="Email Address" /> <br />
      <button className="submit">Submit</button>
    </div>

  
    <div class="footer-col">
      <div className="qu"><h3 className="ser">Services</h3>
      <ul>
        <li><a href="#">UI/UX Design</a></li>
        <li><a href="#">Web Development</a></li>
        <li><a href="#">Content Writing</a></li>
        <li><a href="#">E-commerce</a></li>
        <li className="addd">Address</li>
        <p>Office: 5,6 KP- IT Park PTCL Training Center Peshawar Pakistan</p>
      </ul></div>
    </div>

    
    <div class="footer-col">
      <div className="linn"><h3 className="ser">Quick Links</h3>
      <ul>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Our Team</a></li>
      </ul></div>
    </div>

  
    <div class="footer-col">
      <div className="inf"><h3 className="ser">Information</h3>
      <ul>
        <li>Terms & conditions</li>
        <li>Refund & Return</li>
        <li>policy</li>
        <li>Privacy policy</li>
        <li>Gallery</li>
        <li>Sitemap</li>
        <li>Learn to Earn</li>
      </ul></div>
    </div>

  </div>

 
  <div class="footer-bottom">
  Copyright © by 2016. Strings Technologies. All Rights Reserved.
  </div>
</footer>


      </div>
    </>
  );
};
