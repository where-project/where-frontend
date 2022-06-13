import React, { useEffect, useState } from "react";
import ReservationDetail from "../../abis/ReservationDetail.json"
import { Alert, Col, Container, Row } from "react-bootstrap";
import { DatePicker, TimePicker } from 'react-rainbow-components';
import PlaceReservationStatus from "../../components/Reservation/PlaceReservationStatus";
import "../../css/login_register.css";
import Web3 from "web3";

const ReservationPage = ({ place, ...args }) => {
  const [error, setError] = useState("");
  const [date, setDate] = useState(new Date());
  let time = "08:00";
  const [reservation, setReservation] = useState({});
  const [reservationTime, setReservationTime] = useState(time);
  const [reservationDate, setReservationDate] = useState(date);
  const [reservations, setReservations] = useState([]);
  const [account, setAccount] = useState("");
  let web3;

  useEffect(() => {
    loadBlockchainData();
  }, [])

  //window.ethereum
  const connectWalletHandler = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        web3 = new Web3(window.ethereum);
      } catch (error) {
        setError(error.message);
      }
    } else {
      window.alert("Please install MetaMask!");
    }
  }

  const loadBlockchainData = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      const networkId = await web3.eth.net.getId(); //5777
      const networkData = ReservationDetail.networks[networkId];

      if (networkData) {
        const reservation = new web3.eth.Contract(
          ReservationDetail.abi,
          networkData.address
        );
        setReservation(reservation);
        const reservationCount = await reservation.methods
          .reservationCount()
          .call();
        //Load place's reservations
        for (var i = 1; i <= reservationCount; i++) {
          reservation.methods.reservations(i).call().then(res => {
            let placeId = res[1];
            if (placeId === place.id.toString()) {
              setReservations([res]);
            }
          });
        }
      } else {
        window.alert("Reservation contract not deployed to detected network.");
      }
    } else {
      window.alert("Please install MetaMask!");
    }
  }

  const containerStyles = {
    maxWidth: 400,
  };

  const handleDate = (value) => {
    setDate(value);
    setReservationDate(value);
    setError("");
  }

  const handleTime = (value) => {
    setReservationTime(value);
  }

  const createReservation = (placeId, date, time) => {
    const reservationDate = date.toLocaleString();
    const dateTimeForCompare = new Date(date);
    if (dateTimeForCompare.getTime() >= new Date().getTime() - 1000 * 60 * 60 * 24) {
      reservation.methods
        .createReservation(placeId, reservationDate.toString(), time)
        .send({ from: account })
        .once("receipt", (receipt) => {
          setReservations([receipt.events.ReservationCreated.returnValues]);
        });
    }
    else {
      setError("Date is invalid!");
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <button onClick={connectWalletHandler} className="login-btn btngreen">Connect</button>
          <div id="content">
            <h1>Booking</h1>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                createReservation(place.id, reservationDate, reservationTime);
              }}
            >
              <div className="form-group mr-sm-2">
                <input
                  id="reservationName"
                  type="text"
                  className="form-control"
                  placeholder={place.placeName}
                  required
                  disabled
                />
              </div>
              <div className="form-group mr-sm-2">
                <div
                  className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
                >
                  <DatePicker
                    formatStyle="small"
                    onChange={handleDate}
                    required
                    value={date}
                    label="Please select date"
                  />
                </div>
                <TimePicker
                  value={reservationTime}
                  label="Please select time"
                  onChange={handleTime}
                  required
                  style={containerStyles}
                  className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                  hour24
                />
              </div>
              <button type='submit' className="login-btn btngreen">Book</button>
            </form>
            {error !== "" && <Alert style={{ marginTop: "10px", border: "10px" }} key="danger" variant="danger">
              {error}
            </Alert>}
          </div>
        </Col>
        <Col>
          <div>
            <PlaceReservationStatus reservations={reservations} businessHours={place.businessHours} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ReservationPage