import ReactOwlCarousel from "react-owl-carousel";
import Medium1 from "../images/medium1.jpg";
import Medium2 from "../images/medium2.jpg";
import Medium3 from "../images/medium3.png";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const ref = useRef();

  return (
    <div className="bg-1c flex-column-center height-75-vh" id="blog">
      <div className="width-65-100 border-radius-15 text-align-center">
        <span className="fc-f4 fs-400 fw-bold header">Yazılarımız</span>
      </div>

      <div className="owl-carousel-items">
        <div className="arrows" onClick={() => ref?.current?.prev()}>
          {<FaArrowLeft />}
        </div>
        <ReactOwlCarousel
          items={isMobile ? 1 : 3}
          className="owl-theme blog-course-padding"
          loop
          margin={10}
          style={{ width: "90vw" }}
          nav
          ref={ref}
        >
          <div className="item hover">
            <a
              className="td-none fc-1c"
              href="https://medium.com/itu-blockchain/consensus-ve-blockchain-8a7ae7d72eda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="bg-f4 flex-column-center"
                style={{ margin: "0px 15px" }}
              >
                <div>
                  <span className="fs-175 fc-1c">Consensus ve Blockchain</span>
                </div>
                <div>
                  <img className="photos" alt="twitter" src={Medium1} />
                </div>
                <div>
                  <span className="fs-150 fc-1c">15 Şubat 2022</span>
                </div>
              </div>
            </a>
          </div>
          <div className="item hover">
            <a
              className="td-none fc-1c"
              href="https://medium.com/itu-blockchain/itu-blockchain-genesis-token-mint-3b555529d939"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="bg-f4 flex-column-center"
                style={{ margin: "0px 15px" }}
              >
                <div>
                  <span className="fs-175 fc-1c">Genesis Token Mint</span>
                </div>
                <div>
                  <img className="photos" alt="twitter" src={Medium2} />
                </div>
                <div>
                  <span className="fs-150 fc-1c">23 Aralık 2021</span>
                </div>
              </div>
            </a>
          </div>
          <div className="item hover">
            <a
              className="td-none fc-1c"
              href="https://medium.com/itu-blockchain/ethereum-ve-turing-completeness-6db622ddb7cb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="bg-f4 flex-column-center"
                style={{ margin: "0px 15px" }}
              >
                <div>
                  <span className="fs-175 fc-1c">
                    Ethereum and Turing Completeness
                  </span>
                </div>
                <div>
                  <img className="photos" alt="twitter" src={Medium3} />
                </div>
                <div>
                  <span className="fs-150 fc-1c">8 Mart 2022</span>
                </div>
              </div>
            </a>
          </div>
        </ReactOwlCarousel>
        <div className="arrows" onClick={() => ref?.current?.next()}>
          {<FaArrowRight />}
        </div>
      </div>
    </div>
  );
};

export default Blog;
