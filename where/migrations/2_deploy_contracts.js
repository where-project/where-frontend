const Reservation = artifacts.require("ReservationDetail");

module.exports = function (deployer) {
  deployer.deploy(Reservation);
};
