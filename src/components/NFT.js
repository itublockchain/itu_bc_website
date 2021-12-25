import '../App.css';
import React from "react";
import Card from 'react-bootstrap/Card';
import Conteiner from "react-bootstrap/Container";
import Informations from "./Informations";
import ConnectMetaMask from "./ConnectMetamask";
import AppNavbar from "./AppNavbar";
import ABI from "../contracts/token";
import { ethers } from "ethers";
import { toast } from "react-toastify";
toast.configure()

export default class NFT extends React.Component {
  state = {
    account: "",
    balance: "",
    color: false,
    nftBalance: 0
  };


  connectMetaMask = async () => {
    if (window.ethereum) {
      if (window.ethereum.selectedAddress === null) {
        let accounts = await window.ethereum
          .request({ method: "eth_requestAccounts" })
          .catch((err) => {
            console.log(err.code);
          });
        this.setState({ account: accounts[0] })
        console.log(accounts[0]);
      }

      if (window.ethereum.chainId === "0xa86a") { // 0xa86a olacak
        let accounts = await window.ethereum
          .request({ method: "eth_requestAccounts" })
          .catch((err) => {
            console.log(err.code);
          });

        this.setState({ account: accounts[0] })
        console.log("account: " + accounts[0]);

        let balance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [accounts[0]]
        }).catch((err) => {
          console.log(err);
        });

        balance = parseInt(balance);
        balance = balance / Math.pow(10, 18);
        console.log("balance: " + balance);
        this.setState({ balance: balance });

        let TOKEN_ADDRESS = "0x68F48d43B48E428e88F1A8e98f04306Ce6cA1ac1";
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          TOKEN_ADDRESS,
          ABI,
          signer
        );
        var response = await contract.getMintCounts(this.state.account);
        response = parseInt(response)
        this.setState({nftBalance: response})


        if(window.ethereum.selectedAddress !== null){
          this.setState({color: true})
        }else {
          this.setState({color: false})
        }
      } else {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xa86a' }], // 0xa86a olacak
          });
        } catch (error) {
          if (error.code === 4902) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: '0xa86a',
                    chainName: 'Avalanche Network',
                    nativeCurrency: {
                      name: 'Avalanche',
                      symbol: 'AVAX', // 2-6 characters long
                      decimals: 18
                    },
                    blockExplorerUrls: ['https://snowtrace.io/'],
                    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
                  },
                ]
              });
            } catch (error) {
              console.error(error);
            }
          }
        }
      }
    } else {
      console.log("Metamask ile ilgili bir problem var !!!")
    }
  }

  mintNFT = async () => {
    let TOKEN_ADDRESS = "0x68F48d43B48E428e88F1A8e98f04306Ce6cA1ac1";


          if (window.ethereum) {

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
              TOKEN_ADDRESS,
              ABI,
              signer
            );
            console.log(contract)
            this.connectMetaMask()

            try {
              const response = await contract.mintGenesis({ from: this.state.account, value: "177300000000000000" });

              console.log("response: ", response);

            } catch (err) {
              console.log("error: " + err);
            }
          }

  }
  
  accountsChanged = async () => {
    console.log("account changed")
    this.connectMetaMask()
    if (window.ethereum.selectedAddress === null || window.ethereum.chainId !== "0xa86a") { //0xa869
      this.setState({ color: false })
    } else {
      this.setState({ color: true })
    }
  }

  chainChanged = async () => {
    console.log("chain changed")
    if (window.ethereum.selectedAddress === null || window.ethereum.chainId !== "0xa86a") {//0xa869
      this.setState({ color: false })
    } else {
      this.setState({ color: true })
    }
  }
  connect = async () => {
    console.log("connect")
    if (window.ethereum.selectedAddress === null || window.ethereum.chainId !== "0xa86a") {//0xa869
      this.setState({ color: false })
    } else {
      this.setState({ color: true })
    }
  }

  disconnect = async () => {
    console.log("disconnect")
    if (window.ethereum.selectedAddress === null || window.ethereum.chainId !== "0xa86a") {//0xa869
      this.setState({ color: false })
    } else {
      this.setState({ color: true })
    }
  }

  componentDidMount() {
    let TOKEN_ADDRESS = "0x68F48d43B48E428e88F1A8e98f04306Ce6cA1ac1";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      TOKEN_ADDRESS,
      ABI,
      signer
    );
    contract.on("Minted", () => {
      toast.success("NFT mint edildi!", { position: toast.POSITION.TOP_RIGHT });
    })

    window.ethereum.on("accountsChanged", this.accountsChanged);
    window.ethereum.on("chainChanged", this.chainChanged);
    window.ethereum.on("connect", this.connect);
    window.ethereum.on("disconnect", this.disconnect);

  }


  componentWillUnmount() {
    
  }


  render() {

    if (window.ethereum) {
      return (
        <div>
          {this.state.color && this.state.account !== "" ?
            <AppNavbar bg={"success"} />
            : <AppNavbar bg={"danger"} />}
          <Conteiner>


            <Card className="text-center" id="total">
              {this.state.color && this.state.account !== "" ?
                <Card.Header style={{ fontSize: "1.25rem", backgroundColor: "#D4EDDA" }} id="header">Get ITU Blockchain Genesis Token</Card.Header>
                : <Card.Header style={{ fontSize: "1.25rem" }} id="header">Get ITU Blockchain Genesis Token</Card.Header>}
            
          

              {this.state.color && this.state.account !== "" ?
                <ConnectMetaMask nftBalance={this.state.nftBalance} imghoodie={"imgHoodie"} color={this.state.color} connectMetaMask={this.connectMetaMask} imgMM={"imgMMGreen"} />
                : <ConnectMetaMask nftBalance={this.state.nftBalance} imghoodie={"imgHoodie"} color={this.state.color} connectMetaMask={this.connectMetaMask} imgMM={"imgMMRed"} />}

              <Informations mintNFT={this.mintNFT}></Informations>

              {this.state.color && this.state.account !== "" ?
                <Card.Footer className="text-muted mt-3" style={{ fontSize: "1.15rem", backgroundColor: "#D4EDDA" }} id="footer">
                  Active Account :  {this.state.account.slice(0, 7)}...{this.state.account.slice(-6)}
                  {<br/>}Balance: {Number.parseFloat(this.state.balance).toFixed(4)} AVAX
                </Card.Footer>
                : <Card.Footer className="text-muted mt-3" style={{ fontSize: "1.15rem" }} id="footer">No Connection</Card.Footer>}

            </Card>

          </Conteiner>
        </div>
      )
    } else {
      return (<div>
        <h1>Metamask Yükleyiniz</h1>
      </div>)
    }
  }
}

