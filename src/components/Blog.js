import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import blogArr from "./blogs.js";

const Blog = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const ref = useRef();

  return (
    <>
      <div className="bg-1c flex-column-center height-75-vh" id="blog">
        <div className="width-65-100 border-radius-15 text-align-center">
          <span className="fc-f4 fs-400 fw-bold header">Yazılarımız</span>
        </div>

        <div className="owl-carousel-items">
          <div className="arrows" onClick={() => ref?.current?.prev()}>
            {<FaArrowLeft />}
          </div>
          <ReactOwlCarousel
            items={isMobile ? 1 : 2}
            className="owl-theme blog-course-padding"
            loop
            margin={10}
            style={{ width: "90vw" }}
            nav
            ref={ref}
          >
            {blogArr.map((item) => (
              <div className="item hover">
                <a
                  className="td-none fc-1c"
                  href={item.url}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <div
                    className="bg-f4 flex-column-center"
                    style={{ margin: "0px 15px" }}
                  >
                    <div>
                      <span className="fs-175 fc-1c">{item.header}</span>
                    </div>
                    <div>
                      <img className="photos" alt="twitter" src={item.photo} />
                    </div>
                    <div>
                      <span className="fs-150 fc-1c">{item.date}</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </ReactOwlCarousel>
          <div className="arrows" onClick={() => ref?.current?.next()}>
            {<FaArrowRight />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
