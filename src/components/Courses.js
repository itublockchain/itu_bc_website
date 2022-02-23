import Solidity from "../images/solidity.jpg";
import Javascript from "../images/javascript.jpg";

const Courses = () => {
    return(
        <div className="bg-1c flex-column-center height-75-vh" id="courses">

            <div className="width-65-100 border-radius-15 text-align-center" >
                <span className="fc-f4 fs-400 fw-bold header">
                    Eğitimlerimiz
                </span>
            </div>

            <div className="fc-1c candb-flex-center" style={{margin: "3% 0px"}}>
                <a className="td-none fc-1c hover" href="https://www.youtube.com/watch?v=7qeT0ieH1V4&list=PLby2HXktGwN4Cof_6a8YwlMrboX8-hs73"  target="_blank" rel="noopener noreferrer" >
                    <div className="bg-f4 flex-column-center" style={{margin: "0px 15px",}}>
                        <div>
                            <span className="fs-175 " >Solidity Eğitimi</span>
                        </div>
                        <div>
                            <img className="photos" alt="twitter"src={Solidity} />
                        </div>
                        <div>
                            <span  className="fs-150">8 Saat</span>
                        </div>
                    </div>
                    </a>
                    <a className="td-none fc-1c hover" href="https://www.youtube.com/watch?v=ZL7htrH0DB8&list=PLby2HXktGwN5WnvvI3jm0xSaac79JyRpT"  target="_blank" rel="noopener noreferrer" >
                        
                    <div className="bg-f4 flex-column-center" style={{margin: "0px 15px",}}>
                        <div>
                            <span className="fs-175">Javascript Eğitimi</span>
                        </div>
                        <div>
                            <img className="photos" alt="twitter" src={Javascript} />
                        </div>
                        <div>
                            <span className="fs-150" >5 Saat</span>
                        </div>
                    </div>
                    </a>

            </div>
            
        </div>
    )
}

export default Courses;