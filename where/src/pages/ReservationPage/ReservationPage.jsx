import React, { useEffect, useState } from "react";
import ReservationDetail from "../../abis/ReservationDetail.json"
import { Alert, Col, Container, Row } from "react-bootstrap";
import { DatePicker, TimePicker } from 'react-rainbow-components';
import PlaceReservationStatus from "../../components/Reservation/PlaceReservationStatus";
import "../../css/login_register.css";
import Web3 from "web3";
import EmailService from "../../services/EmailService";
import UserService from "../../services/UserService";
const ReservationPage = ({ place, user, ...args }) => {
  const [error, setError] = useState("");
  const [date, setDate] = useState(new Date());
  let time = "08:00";
  const [reservation, setReservation] = useState({});
  const [reservationTime, setReservationTime] = useState(time);
  const [reservationDate, setReservationDate] = useState(date);
  const [reservations, setReservations] = useState([]);
  const [account, setAccount] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [isReserved, setIsReserved] = useState(false);
  let web3;
  let reservationModel = {
    "email": userDetails.email,
    "reservationDate": reservationDate.toString(),
    "reservationTime": reservationTime,
    "placeName": place.placeName,
  }
  let emailService;
  useEffect(() => {
    loadBlockchainData();
    getUserInfo();
  }, [])
  const getUserInfo = () => {
    let userService = new UserService();
    userService.getUserByUsername(user.username).then((result) => {
      setUserDetails(result.data)
      reservationModel.email = result.data.email;

    }).catch(err => {
      console.log(err.response);
    })
  }
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
    reservationModel.reservationDate = value.toString();
    setError("");
  }

  const handleTime = (value) => {
    setReservationTime(value);
    reservationModel.reservationTime = value;
  }

  const sendEmail = () => {
    emailService = new EmailService();
    emailService.sendEmail(reservationModel).then((result) => {
      setIsReserved(true);
    }, err => {
      console.log(err.response);
    });
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
          sendEmail();
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
            <h1 style={{ textAlign: "center", marginTop: "20px" }}>Booking</h1>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                createReservation(place.id, reservationDate, reservationTime, place.placeName);
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
                  style={{ marginTop: "10px" }}
                />
              </div>
              <div className="form-group mr-sm-2">
                <div
                  className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
                  style={{ marginTop: "10px" }}
                >
                  <DatePicker
                    formatStyle="small"
                    onChange={handleDate}
                    required
                    value={date}
                    label="Please Select Date"
                  />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <TimePicker
                    value={reservationTime}
                    label="Please Select Time"
                    onChange={handleTime}
                    required
                    style={containerStyles}
                    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                    hour24
                  />
                </div>

              </div>
              <button type='submit' className="login-btn btngreen">Book</button>
            </form>
            {error !== "" && <Alert style={{ marginTop: "10px", border: "10px" }} key="danger" variant="danger">
              {error}
            </Alert>}
            {isReserved && <Alert style={{ marginTop: "30px", border: "10px" }} key="success" variant="success">
              Reservation completed! Email sent.
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