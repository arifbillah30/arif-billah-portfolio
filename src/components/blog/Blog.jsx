import React from "react";
import Modal from "react-modal";
import cancelImg from "../../assets/img/cancel.svg";
import UseData from "../../Hooks/UseData";
import blogQuote from "../../assets/img/blog/quote.svg";

// Do NOT call Modal.setAppElement here.
// Set it once in src/index.js:
//   import Modal from "react-modal";
//   const rootEl = document.getElementById("root");
//   Modal.setAppElement(rootEl);

const Blog = () => {
  const { singleData, isOpen, setIsOpen, blogsData, handleBlogsData } = UseData();

  const openPost = (id) => handleBlogsData(id);

  return (
    <>
      <div className="row">
        {blogsData.map((item) => (
          <div key={item.id} className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30 d-flex">
            <article className="post-container" onClick={() => openPost(item.id)}>
              <div className="post-thumb">
                <div className="d-block position-relative overflow-hidden">
                  <img src={item.img} className="img-fluid" alt={item.title} />
                </div>
              </div>

              <div className="post-content">
                <div className="entry-header">
                  <h3>{item.title}</h3>
                </div>
                <div className="entry-content open-sans-font">
                  <p>
                    {item?.description1?.slice(0, 100)}
                    {item?.description1 && item.description1.length > 100 ? "…" : ""}
                  </p>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* Single modal instance */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Blog Details"
        className="custom-modal dark"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
        // If you didn't set Modal.setAppElement in index.js, you can temporarily use:
        // ariaHideApp={false}
      >
        <div>
          <button className="close-modal" type="button" onClick={() => setIsOpen(false)}>
            <img src={cancelImg} alt="close icon" />
          </button>

          <div className="box_inner blog-post">
            <article>
              <div className="title-section text-left text-sm-center">
                <h1>
                  Post <span>Details</span>
                </h1>
                <span className="title-bg">posts</span>
              </div>

              <div className="meta open-sans-font">
                <span>
                  <i className="fa fa-user" /> {singleData?.commentor}
                </span>
                <span className="date">
                  <i className="fa fa-calendar" /> {singleData?.date}
                </span>
                <span>
                  <i className="fa fa-tags" /> {singleData?.tag}
                </span>
              </div>

              <h1>{singleData?.title}</h1>

              {singleData?.img && (
                <img src={singleData.img} className="img-fluid" alt={singleData?.title || "Blog"} />
              )}

              <div className="blog-excerpt open-sans-font pb-5">
                {singleData?.description1 && <p>{singleData.description1}</p>}

                {singleData?.description2 && (
                  <div className="quotebox">
                    <div className="icon">
                      <img src={blogQuote} alt="blog quote" />
                    </div>
                    <p>{singleData.description2}</p>
                  </div>
                )}

                {singleData?.description3 && <p>{singleData.description3}</p>}
                {singleData?.description4 && <p>{singleData.description4}</p>}
              </div>
            </article>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Blog;
