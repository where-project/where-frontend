import React, { Component } from "react";
import Web3 from "web3";
import "./App.css";
import Reservation from "../abis/Reservation.json";
import Navbar from "./Navbar";
import Main from "./Main";

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
    const networkData = Reservation.networks[networkId];
    if (networkData) {
      const reservation = web3.eth.Contract(
        Reservation.abi,
        networkData.address
      );
      this.setState({ reservation });
      const reservationCount = await reservation.methods
        .reservationCount()
        .call();
      this.setState({ reservationCount });
      //Load products
      for (var i = 1; i <= reservationCount; i++) {
        const reservationInformation = await reservation.methods
          .reservations(i)
          .call();
        this.setState({
          reservations: [...this.state.reservations, reservationInformation],
        });
      }
      this.setState({ loading: false });
    } else {
      window.alert("Reservation contract not deployed to detected network.");
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      reservationCount: 0,
      reservations: [],
      loading: true,
    };
    this.createReservation = this.createReservation.bind(this);
    this.bookedReservation = this.bookedReservation.bind(this);
  }

  createReservation(name, price) {
    this.setState({ loading: true });
    this.state.reservation.methods
      .createReservation(name, price)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
  }

  bookedReservation(id, price) {
    this.setState({ loading: true });
    this.state.reservation.methods
      .bookedReservation(id)
      .send({ from: this.state.account, value: price })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
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
                <Main
                  reservations={this.state.reservations}
                  createReservation={this.createReservation}
                  bookedReservation={this.bookedReservation}
                />
              )}
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
