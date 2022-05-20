import Logo from "../images/itublockchain-logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpener] = useState(false);

  const links = (
    <>
      <a className="td-none" href="#top">
        <span className="fc-f4 padding-3100-3100 navbar-button">
          "Ana Sayfa"
        </span>
      </a>
      <a className="td-none" href="#about">
        <span className="fc-f4 padding-3100-3100 navbar-button">
          "Hakkımızda"
        </span>
      </a>
      <a className="td-none" href="#achievements">
        <span className="fc-f4 padding-3100-3100 navbar-button">
          "Başarılarımız"
        </span>
      </a>
      <a className="td-none" href="#courses">
        <span className="fc-f4 padding-3100-3100 navbar-button">"Eğitim"</span>
      </a>
      <a className="td-none" href="#blog">
        <span className="fc-f4 padding-3100-3100 navbar-button">Blog</span>
      </a>
      <a
        className="td-none"
        href="https://gitcoin.co/grants/1970/itu-blockchain"
        target="_blank"
      >
        <span className="fc-f4 padding-3100-3100 navbar-button">Gitcoin</span>
      </a>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeYl-FhXW3vm8FNjAOc8_AHk0fpSNalJH2iLfJq3P4FjG6a6w/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="td-none"
      >
        <span className="fc-f4 padding-3100-3100 navbar-button navbar-joinus aramiza-katil">
          <b>"Aramıza Katıl"</b>
        </span>
      </a>

      <a
        className="td-none"
        href="https://gitcoin.co/grants/1970/itu-blockchain"
        target="_blank"
      ></a>
    </>
  );

  return (
    <div className="position-sticky trial bg-black navbar-height">
      <div style={{ flexGrow: "" }}>
        <a href="/">
          <img className="navbar-img" alt="ITU Blockchain" src={Logo} />
        </a>
      </div>
      <div className="fs-125 links" style={{ gap: "15px" }}>
        {links}
      </div>
      <div className="bars" onClick={() => setOpener(!open)}>
        <FaBars />
      </div>

      <div className={`menu ${open ? "" : "d-none"}`}>{links}</div>
    </div>
  );
};

export default Navbar;
