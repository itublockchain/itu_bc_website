import Background from "../images/about.jpg";

const AboutHeader = () => {
    return(
        <div style={{width: "100%", height: "70vh", backgroundImage: `url(${Background})`, backgroundSize: "cover", flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center"}}>

            <div>
                <span style={{color: "#000000", fontSize: "5rem", fontWeight: "bold"}}>Hakkımızda</span>

            </div>
            <div>

                <span style={{color: "#000000", fontSize: "2rem", fontWeight: "bold"}}>Merkeziyetsizlik için el ele kol kola ...</span>
            </div>

        </div>
    )
}

export default AboutHeader;