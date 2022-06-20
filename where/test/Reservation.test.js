const Reservation = artifacts.require("./ReservationDetail.sol");
require("chai")
  .use(require("chai-as-promised"))
  .should();
contract("ReservationDetail", ([deployer, seller, buyer]) => {
  let reservation;

  before(async () => {
    reservation = await Reservation.deployed();
  });

  describe("deployment", async () => {
    it("deployes successfully", async () => {
      const address = await reservation.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    it("has a name", async () => {
      const name = await reservation.name();
      assert.equal(name, "WHERE RESERVATION SYSTEM");
    });

    describe("reservations", async=>{
      let result, reservationCount
      before(async()=>{
        result = await reservation.createReservation(1,"19.06.2022","08:00",{ from: seller })
        reservationCount = await reservation.reservationCount()
      })
      it('creates reservation', async () => {
        // SUCCESS
        assert.equal(reservationCount, 1)
        const event = result.logs[0].args
        assert.equal(event.id.toNumber(), reservationCount.toNumber(), 'id is correct')
        assert.equal(event.placeId, 1, 'place id is correct')
        assert.equal(event.date, '19.06.2022', 'reservation date is correct')
        assert.equal(event.time, '08:00', 'reservation time is correct')
        assert.equal(event.owner, seller, 'owner is correct')
  
        // FAILURE: Reservation must have a place id
        await reservation.createReservation(0, "19.06.2022","08:00", { from: seller }).should.be.rejected;
        // FAILURE: Reservation must have a date
        await reservation.createReservation(1, "", "08:00",{ from: seller }).should.be.rejected;
         // FAILURE: Reservation must have a time
         await reservation.createReservation(1, "19.06.2022", "",{ from: seller }).should.be.rejected;
      })

      it('get reservations',async ()=>{
        const reservationInformation = await reservation.reservations(reservationCount)
        assert.equal(reservationInformation.id.toNumber(),reservationCount.toNumber(),'id is correct')
        assert.equal(reservationInformation.placeId,1,'place id is correct')
        assert.equal(reservationInformation.date,'19.06.2022', 'reservation date is correct')
        assert.equal(reservationInformation.time, '08:00', 'reservation time is correct')
        assert.equal(reservationInformation.owner,seller,'owner is correct')
      })
    })
  });
});
