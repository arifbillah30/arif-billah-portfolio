import React, { useEffect, useState, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useNavigate, useLocation } from "react-router-dom";
import Hero from "../components/hero/Hero";
import Index from "../components/about/index";
import Address from "../components/Address";
import Portfolio from "../components/portfolio/Portfolio";
import Blog from "../components/blog/Blog";
import Contact from "../components/Contact";
import Social from "../components/Social";
import SwitchDark from "../components/switch/SwitchDark";

const menuItem = [
  { icon: "fa-home", menuName: "Home", path: "/" },
  { icon: "fa-user", menuName: "About", path: "/about" },
  { icon: "fa-briefcase", menuName: "Portfolio", path: "/portfolio" },
  { icon: "fa-envelope-open", menuName: "Contact", path: "/contact" },
  { icon: "fa-comments", menuName: "Blog", path: "/blog" },
];

const HomeDark = () => {
  document.querySelector("body").classList.remove("rtl");
  
  const navigate = useNavigate();
  const location = useLocation();
  const tabPanelRef = useRef(null);
  
  const getTabIndex = () => {
    const path = location.pathname;
    const index = menuItem.findIndex(item => item.path === path);
    return index !== -1 ? index : 0;
  };
  
  const [tabIndex, setTabIndex] = useState(getTabIndex());
  
  useEffect(() => {
    setTabIndex(getTabIndex());
  }, [location]);
  
  const handleTabSelect = (index) => {
    setTabIndex(index);
    navigate(menuItem[index].path);
  };
  
  useEffect(() => {
    let scrollTimeout;
    
    const handleScroll = () => {
      // Clear previous timeout to throttle scroll events
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      scrollTimeout = setTimeout(() => {
        const mainContainer = document.querySelector('.main-content');
        
        if (mainContainer) {
          const scrollTop = mainContainer.scrollTop;
          const scrollHeight = mainContainer.scrollHeight;
          const clientHeight = mainContainer.clientHeight;
          
          // Calculate scroll percentage
          const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
          
          // If scrolled more than 95% to bottom, go to next tab
          if (scrollPercentage > 95 && tabIndex < menuItem.length - 1) {
            handleTabSelect(tabIndex + 1);
          }
          // If scrolled to top (less than 5%) and scrolling up, go to previous tab
          else if (scrollPercentage < 5 && tabIndex > 0 && scrollTop === 0) {
            handleTabSelect(tabIndex - 1);
          }
        }
      }, 100); // Throttle to 100ms
    };
    
    const mainContainer = document.querySelector('.main-content');
    
    if (mainContainer) {
      mainContainer.addEventListener('scroll', handleScroll);
      return () => {
        mainContainer.removeEventListener('scroll', handleScroll);
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
      };
    }
  }, [tabIndex]);

  return (
    <div className="yellow">
      <SwitchDark />
      {/* End Switcher */}
      <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
        <div className="header">
          <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
              </Tab>
            ))}
          </TabList>
        </div>
        {/* End Menu Content */}

        <div className="tab-panel_list">
          {/* Hero Content Starts */}
          <TabPanel className="home ">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Hero />
            </div>
          </TabPanel>
          {/* Hero Content Ends */}

          {/* About Content Starts */}
          <TabPanel className="about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </TabPanel>
          {/* About Content Ends */}

          {/* Portfolio Content Starts */}
          <TabPanel className="portfolio professional">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                my <span>portfolio</span>
              </h1>
              <span className="title-bg">works</span>
            </div>
            {/* End title */}
            <Portfolio />
          </TabPanel>
          {/* Portfolio Content Ends */}

          {/* Contact Content Starts */}
          <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                get in <span>touch</span>
              </h1>
              <span className="title-bg">contact</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row">
                {/*  Left Side Starts */}
                <div className="col-12 col-lg-4">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    Don't be shy !
                  </h3>
                  <p className="open-sans-font mb-4">
                    Feel free to get in touch with me. I am always open to
                    discussing new projects, creative ideas or opportunities to
                    be part of your visions.
                  </p>
                  <Address />
                  {/* End Address */}

                  <Social align="left" />
                  {/* End Social */}
                </div>
                {/* Left Side Ends */}

                {/*  Contact Form Starts  */}
                <div className="col-12 col-lg-8">
                  <Contact />
                </div>
                {/*  Contact Form Ends */}
              </div>
            </div>
            {/* End .container */}
          </TabPanel>
          {/* Contact Content Ends */}

          {/* Blog Content Starts */}
          <TabPanel className="blog">
            <div
              className="title-section text-left text-sm-center "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                my <span>blog</span>
              </h1>
              <span className="title-bg">posts</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {/*  Articles Starts  */}
              <div className="row pb-50">
                <Blog />
              </div>
              {/* Articles Ends */}
            </div>
          </TabPanel>
          {/* Blog Content Ends */}
        </div>
      </Tabs>
    </div>
  );
};

export default HomeDark;
