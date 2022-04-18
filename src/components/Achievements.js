import barca from "../images/barca.jpeg";
import ist from "../images/ist.jpeg";

const Achievements = () => {
  return (
    <div
      id="achievements"
      className="bg-1c flex-column-center height-75-vh padding-5100-0100"
    >
      <div
        className="border-radius-15 text-align-center"
        style={{ width: "65%" }}
      >
        <span className="fc-f4 fs-400 fw-bold header">Başarılarımız</span>
        <br />
        <br />
        <span className="fc-f4 fs-150">
          Avalanche Barcelona Hackathon LayerZero Best NFT Usecase Challenge
          Winner Coinbase Best Team Challenge Winner
          <br />
          <br />
        </span>
        <img src={barca} className="phts" />
        <br />
        <br />
        <br />

        <span className="fc-f4 fs-150">
          Avalanche Hacks Istanbul Secondary Place
        </span>
        <br />
        <br />
        <img src={ist} className="phts" />
      </div>
    </div>
  );
};

export default Achievements;
