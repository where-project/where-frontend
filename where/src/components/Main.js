import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div id="content">
        <h1>Add Reservation</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const name = this.reservationName.value;
            const price = window.web3.utils.toWei(
              this.reservationPrice.value.toString(),
              "Ether"
            );
            this.props.createReservation(name, price);
          }}
        >
          <div className="form-group mr-sm-2">
            <input
              id="reservationName"
              type="text"
              ref={(input) => {
                this.reservationName = input;
              }}
              className="form-control"
              placeholder="Reservation Name"
              required
            />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="reservationPrice"
              type="text"
              ref={(input) => {
                this.reservationPrice = input;
              }}
              className="form-control"
              placeholder="Reservation Price"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Reservation
          </button>
        </form>
        <p>&nbsp;</p>
        <h2>Book Reservation</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Owner</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="reservationList">
            {this.props.reservations.map((reservation, key) => {
              return (
                <tr key={key}>
                  <th scope="row">{reservation.id.toString()}</th>
                  <td>{reservation.name}</td>
                  <td>
                    {window.web3.utils.fromWei(
                      reservation.price.toString(),
                      "Ether"
                    )}
                    Eth
                  </td>
                  <td>{reservation.owner}</td>
                  <td>
                    {!reservation.booked ? (
                      <button
                        name={reservation.id}
                        value={reservation.price}
                        onClick={(event) => {
                          this.props.bookedReservation(
                            event.target.name,
                            event.target.value
                          );
                        }}
                      >
                        Booked
                      </button>
                    ) : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
