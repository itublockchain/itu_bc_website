import Twitter from "../images/twitterBY.png";
import ykArr from "./ykArr.js";

const Stuff = () => {
  return (
    <>
      <div className="flex-center bg-1c fc-f4 fs-500">
        <h2 style={{ paddingTop: "3%", paddingBottom: "2%" }}>Ekip Uyeleri</h2>
      </div>
      <div className="bg-1c fc-f4 big-box">
        {ykArr.map((item) => (
          <div className="single-box">
            <a
              href={item.url}
              target={"_blank"}
              style={{ textDecoration: "none" }}
            >
              <img src={item.photo} />
              <h5>
                <img src={Twitter} style={{ width: "32px", height: "32px" }} />
                {item.fullName}
              </h5>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stuff;
