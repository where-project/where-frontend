import React, { Component } from "react";
import Web3 from "web3";
import "./App.css";
import Helloworld from "../abis/Helloworld.json";
import Navbar from "./Navbar";
import Main from "./Main";
import Login from "./Login/Login";

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  async loadBlockchainData() {
    const web3 = window.web3;
    //Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    //create contract
    const networkId = await web3.eth.net.getId(); //5777
    const networkData = Helloworld.networks[networkId];
    if (networkData) {
      const helloworld = web3.eth.Contract(Helloworld.abi, networkData.address);
      this.setState({ helloworld });
      const greeting = await helloworld.methods.greeting().call();
      this.setState({ greeting });
      this.setState({ loading: false });
    } else {
      window.alert("Marketplace contract not deployed to detected network.");
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      greeting: "",
      loading: true,
    };
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex">
              {this.state.loading ? (
                <div id="loader" className="text-center">
                  <p className="text-center">Loading...</p>
                </div>
              ) : (
                <Login />
              )}
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
