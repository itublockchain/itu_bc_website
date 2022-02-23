import Medium1 from "../images/medium1.jpg";
import Medium3 from "../images/medium2.jpg";

const Blog = () => {
    return(
        <div className="bg-1c flex-column-center height-75-vh" id="blog" >

            <div className="width-65-100 border-radius-15 text-align-center" >
                <span className="fc-f4 fs-400 fw-bold header">
                    Yazılarımız
                </span>
            </div>

            <div className="fc-1c candb-flex-center" style={{margin: "3% 0px"}}>
            <a className="td-none fc-1c hover" href="https://medium.com/itu-blockchain/consensus-ve-blockchain-8a7ae7d72eda"  target="_blank" rel="noopener noreferrer" >
                <div className="bg-f4 flex-column-center" style={{margin: "0px 15px",}}>
                    <div>
                        <span className="fs-175">Consensus ve Blockchain</span>
                    </div>
                    <div>
                        <img className="photos" alt="twitter" src={Medium1} />
                    </div>
                    <div>
                        <span className="fs-150" >15 Şubat 2022</span>
                    </div>
                </div>
                </a>
                
                <a className="td-none fc-1c hover" href="https://medium.com/itu-blockchain/itu-blockchain-genesis-token-mint-3b555529d939"  target="_blank" rel="noopener noreferrer" >
                    <div className="bg-f4 flex-column-center" style={{margin: "0px 15px",}}>
                    <div>
                        <span className="fs-175">Genesis Token Mint</span>
                    </div>
                    <div>
                        <img className="photos" alt="twitter" src={Medium3} />
                    </div>
                    <div>
                        <span className="fs-150">23 Aralık 2021</span>
                    </div>
                </div>
                </a>
            </div>
            
        </div>
    )
}

export default Blog;