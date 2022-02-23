import Logo from "../images/itublockchain-logo.png";

const Navbar = () => {
    return(
        <div className="position-sticky trial bg-black navbar-height" >
            <div style={{flexGrow: ""}}>
                <a href="/">
                    <img className="navbar-img" alt="ITU Blockchain"  src={Logo} />
                </a>
            </div>
            <div className="fs-125" style={{display: "flex", gap: "15px"}} >
                <a className="td-none" href="#top" >
                    <span className="fc-f4 padding-3100-3100 navbar-button" >Ana&nbsp;Sayfa</span>
                </a>
                <a className="td-none"  href="#about" >
                    <span className="fc-f4 padding-3100-3100 navbar-button" >Hakkımızda</span>
                </a>
                <a className="td-none"  href="#courses">
                    <span className="fc-f4 padding-3100-3100 navbar-button" >Eğitim</span>
                </a>
                <a className="td-none"  href="#blog">
                    <span className="fc-f4 padding-3100-3100 navbar-button" >Blog</span>
                </a>
                <a className="td-none"  href="mailto:blockchain@itu.edu.tr" target="_blank" >
                    <span className="fc-f4 padding-3100-3100 navbar-button" >İletişim</span>
                </a>
                <a className="td-none"  href="https://gitcoin.co/grants/1970/itu-blockchain" target="_blank">
                    <span className="fc-f4 padding-3100-3100 navbar-button" >Gitcoin</span>
                </a>
                
            </div>
            
        </div>
    )
}

export default Navbar;