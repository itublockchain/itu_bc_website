import Instagram from "../images/instagramBY.png";
import Twitter from "../images/twitterBY.png";
import Youtube from "../images/youtubeBY.png";
import Mail from "../images/mailBY.png";
import Linkedin from "../images/linkedinBY.png";
import Medium from "../images/mediumBY.png";
import Discord from "../images/discordBY.png";

const SocialMedia = () => {
  return (
    <div>
      <div className="flex-center bg-f4" style={{ padding: "20px 20px" }}>
        <a
          href="https://twitter.com/ITUblockchain"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="width10060 sm-hover" alt="twitter" src={Twitter} />
        </a>

        <a
          href="https://www.youtube.com/channel/UCeoUqhlsA4Ci2nBIBtJDTcw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="width10060 sm-hover" alt="youtube" src={Youtube} />
        </a>

        <a
          href="https://www.instagram.com/itublockchain"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="width10060 sm-hover"
            alt="instagram"
            src={Instagram}
          />
        </a>
        <a
          href="https://www.linkedin.com/company/itublockchain"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="width10060 sm-hover" alt="linkedin" src={Linkedin} />
        </a>

        <a
          href="https://medium.com/itu-blockchain"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="width10060 sm-hover" alt="youtube" src={Medium} />
        </a>

        <a
          href="https://discord.gg/yXkQ6VU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="width10060 sm-hover" alt="mail" src={Discord} />
        </a>

        <a
          href="mailto:blockchain@itu.edu.tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="width10060 sm-hover" alt="mail" src={Mail} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
