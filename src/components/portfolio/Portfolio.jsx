import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";
import Modal from "./modal/Modal";

const Portfolio = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);

  const handleModal = (id) => {
    setGetModal(true);
    setModalId(id);
  };

  return (
    <>
      <div className="portfolio-main">
        <Tabs>
          <TabList className="portfolio-tab-list" data-aos="fade-up">
            <Tab>ALL</Tab>
            <Tab>WEB APPS</Tab>
            <Tab>VIDEO</Tab>
            <Tab>UI/UX</Tab>
            <Tab>MOCKUP</Tab>
          </TabList>

          <div className="container">
            {/* ALL */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.map(({ id, type, image, delayAnimation }) => (
                  <div key={id} data-aos="fade-right" data-aos-delay={delayAnimation}>
                    <div className="tab-content" onClick={() => handleModal(id)}>
                      <img src={image} alt={`${type} preview`} loading="lazy" />
                      <h3><span className="conent-title">{type}</span></h3>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

            {/* WEB APPS */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("web")).map(
                  ({ id, type, image, delayAnimation }) => (
                    <div key={id} data-aos="fade-right" data-aos-delay={delayAnimation}>
                      <div className="tab-content" onClick={() => handleModal(id)}>
                        <img src={image} alt={`${type} preview`} loading="lazy" />
                        <h3><span className="conent-title">{type}</span></h3>
                      </div>
                    </div>
                  )
                )}
              </div>
            </TabPanel>

            {/* VIDEO */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("video")).map(
                  ({ id, type, image, delayAnimation }) => (
                    <div key={id} data-aos="fade-right" data-aos-delay={delayAnimation}>
                      <div className="tab-content" onClick={() => handleModal(id)}>
                        <img src={image} alt={`${type} preview`} loading="lazy" />
                        <h3><span className="conent-title">{type}</span></h3>
                      </div>
                    </div>
                  )
                )}
              </div>
            </TabPanel>

            {/* UI/UX */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("uiux")).map(
                  ({ id, type, image, delayAnimation }) => (
                    <div key={id} data-aos="fade-right" data-aos-delay={delayAnimation}>
                      <div className="tab-content" onClick={() => handleModal(id)}>
                        <img src={image} alt={`${type} preview`} loading="lazy" />
                        <h3><span className="conent-title">{type}</span></h3>
                      </div>
                    </div>
                  )
                )}
              </div>
            </TabPanel>

            {/* MOCKUP */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("mockup")).map(
                  ({ id, type, image, delayAnimation }) => (
                    <div key={id} data-aos="fade-right" data-aos-delay={delayAnimation}>
                      <div className="tab-content" onClick={() => handleModal(id)}>
                        <img src={image} alt={`${type} preview`} loading="lazy" />
                        <h3><span className="conent-title">{type}</span></h3>
                      </div>
                    </div>
                  )
                )}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>

      {getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}
    </>
  );
};

export default Portfolio;
