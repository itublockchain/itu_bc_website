import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from './components/AppNavbar';
import NFT from './components/NFT';
import Submit from './components/SubmitYeni';
import Hoodie from './components/Hoodie';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<div>
          <AppNavbar bg={"success"}/>
          <Home/>
        </div>} />
        <Route path="/nft" element={<NFT/>} />
        <Route path="/submit" element={<div>
        <Submit/> </div>} />
        <Route path="/hoodie" element={<div><AppNavbar bg={"success"}/>
      <Hoodie/> </div>} />
      </Routes>
  </Router>
  )
}
export default App;
// export default class App extends React.Component {
//   state = { 
//     account: "",
//     balance: "",
//     color: false
//   };


  

// connectMetaMask = async () => {
  
//   if(window.ethereum){
//     if(window.ethereum.selectedAddress === null){
//       let accounts = await window.ethereum
//       .request({ method: "eth_requestAccounts" })
//       .catch((err) => {
//       console.log(err.code);
//       });
//       this.setState({account: accounts[0]})
//       console.log(accounts[0]);
//     }
//     if(window.ethereum.chainId === "0xa869"){ // 0xa86a olacak
//       console.log("çalyorum ");
//       let accounts = await window.ethereum
//       .request({ method: "eth_requestAccounts" })
//       .catch((err) => {
//       console.log(err.code);
//       });

//       this.setState({account: accounts[0]})
//       console.log("setState: "+ this.state.account);
//       console.log(accounts[0]);

//       let balance = await window.ethereum.request({
//         method: "eth_getBalance",
//         params: [accounts[0]]
//       }).catch((err) => {
//       console.log(err);
//       });
  
//       balance = parseInt(balance);
//       balance = balance/Math.pow(10,18);
//       console.log(balance);
//       this.setState({balance: balance})
//       console.log("setState: "+ this.state.balance);
//       //this.colors("yes",accounts,balance);
//     }else{
//       //this.colors("no");
//       try {        
//         await window.ethereum.request({
//           method: 'wallet_switchEthereumChain',
//           params: [{ chainId: '0xa869' }], // 0xa86a olacak
//         });
//       } catch (error) {
//         if (error.code === 4902) {
//           try {
//             await window.ethereum.request({
//               method: 'wallet_addEthereumChain',
//               params: [
//                         {
//                           chainId: '0xa86a',
//                           chainName: 'Avalanche Network',
//                           nativeCurrency: {
//                             name: 'Avalanche',
//                             symbol: 'AVAX', // 2-6 characters long
//                             decimals: 18
//                           },
//                           blockExplorerUrls: ['https://snowtrace.io/'],
//                           rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
//                         },
//                       ]
//             });
//           } catch (error) {
//             console.error(error);
//           }
//         }
//      }
//     }
//   }else{
//     console.log("Metamask ile ilgili bir problem var !!!")
//   }
// }


// mintNFT = async () =>{
//   let TOKEN_ADDRESS = "0x437E16C5FBf214bF25466bD9A8bBC05300151E42";

//   confirmAlert({
//     title: 'Confirm to submit',
//     message: 'Are you sure to do this.',
//     buttons: [{label: 'Yes', onClick: async () => {
    

//       if(window.ethereum) {
      
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         const contract = new ethers.Contract(
//           TOKEN_ADDRESS,
//           ABI,
//           signer
//         );
//         console.log(contract)
        
//         try {
//           const response = await contract.renounceOwnership()
//           console.log("response: ", response);
//         } catch(err) {
//           console.log("error: " + err);
//         }
//       }
    
//     }}, {label: 'No'}]
//   });
// };


// accountsChanged = async ()=>{
//   console.log("account changed")
//   this.connectMetaMask()
//   if(window.ethereum.selectedAddress === null || window.ethereum.chainId !== "0xa869" ){
//     this.setState({color: false})          
//   }else{
//     this.setState({color: true})
//   }
// }

// chainChanged = async ()=>{
//   console.log("chain changed")
//   if(window.ethereum.selectedAddress === null || window.ethereum.chainId !== "0xa869" ){
//     this.setState({color: false})          
//   }else{
//     this.setState({color: true})
//   }
// }

// connect = async ()=>{
//   console.log("connect")
//   if(window.ethereum.selectedAddress === null || window.ethereum.chainId !== "0xa869" ){
//     this.setState({color: false})          
//   }else{
//     this.setState({color: true})
//   }
// }
// componentDidMount() {

//   window.ethereum.on("accountsChanged", this.accountsChanged)
//   window.ethereum.on("chainChanged", this.chainChanged)
//   window.ethereum.on("connect", this.connect)

//   setTimeout(()=> {
//     if(window.ethereum.selectedAddress === null || window.ethereum.chainId !== "0xa869" ){
//       this.setState({color: false})          
//     }else{
//       this.setState({color: true})
//     }
//   }, 1000)
// }


// componentWillUnmount() {
//   window.ethereum.off("accountsChanged", this.accountsChanged)
//   window.ethereum.off("chainChanged", this.chainChanged)
//   window.ethereum.off("connect", this.chainChanged)
// }


  // render(){
    

  //   return (
      


      // <div>
      //   {this.state.color ? 
      //     <AppNavbar bg={"success"}/> 
      //     : <AppNavbar bg={"danger"}/>}
      // <Conteiner>
        
        
      //   <Card className="text-center" id="total">
      //     {this.state.color ? 
      //     <Card.Header style={{fontSize: "1.25rem", backgroundColor:"#D4EDDA"}} id="header">ITU BLOCKCHAIN HOODIE</Card.Header> 
      //     : <Card.Header style={{fontSize: "1.25rem"}} id="header">ITU BLOCKCHAIN HOODIE</Card.Header>}

      //     {this.state.color ? 
      //     <ConnectMetaMask connectMetaMask={this.connectMetaMask} imgMM={"imgMMGreen"}/> 
      //     : <ConnectMetaMask connectMetaMask={this.connectMetaMask} imgMM={"imgMMRed"}/>}

      //     <Informations mintNFT={this.mintNFT}></Informations>   
          
      //     {this.state.color ? 
      //     <Card.Footer className="text-muted mt-3" style={{fontSize: "1.15rem", backgroundColor:"#D4EDDA"}} id="footer">
      //     Active Account :  {this.state.account.slice(0,7)}...{this.state.account.slice(-6)} {<br/>}Balance: {Number.parseFloat(this.state.balance).toFixed(4)} AVAX
      //     </Card.Footer>
      //     : <Card.Footer className="text-muted mt-3" style={{fontSize: "1.15rem"}} id="footer">No Connection</Card.Footer>}

      //   </Card>

      // </Conteiner>
      // </div>
//     );
//   }
  
// }

