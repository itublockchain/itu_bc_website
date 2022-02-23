import Logo from "../images/3214.jpg"

const Home = () => {
    return(
        <div className="bg-1c flex-column-center height-100-vh" id="home" >

            <span className="header-special fw-bold fc-f4" style={{}}>İTÜ BLOCKCHAIN</span>
            <img alt="ITU Blockchain" style={{ height: "750px", marginBottom: "2%"}} src={Logo} />
            
        </div>
    )
}

export default Home;