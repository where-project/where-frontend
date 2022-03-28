const Reservation = artifacts.require("./Reservation.sol");
require("chai")
  .use(require("chai-as-promised"))
  .should();
contract("Reservation", ([deployer, seller, buyer]) => {
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
      assert.equal(name, "WHERE");
    });

    describe("reservations", async=>{
      let result, reservationCount
      before(async()=>{
        result = await reservation.createReservation("Restaurant",web3.utils.toWei('1', 'Ether'),{ from: seller })
        reservationCount = await reservation.reservationCount()
      })
      it('creates reservation', async () => {
        // SUCCESS
        assert.equal(reservationCount, 1)
        const event = result.logs[0].args
        assert.equal(event.id.toNumber(), reservationCount.toNumber(), 'id is correct')
        assert.equal(event.name, 'Restaurant', 'name is correct')
        assert.equal(event.price, '1000000000000000000', 'price is correct')
        assert.equal(event.owner, seller, 'owner is correct')
        assert.equal(event.booked, false, 'booked is correct')
  
        // FAILURE: Product must have a name
        await await reservation.createReservation('', web3.utils.toWei('1', 'Ether'), { from: seller }).should.be.rejected;
        // FAILURE: Product must have a price
        await await reservation.createReservation('Restaurant', 0, { from: seller }).should.be.rejected;
      })

      it('get reservations',async ()=>{
        const reservationInformation = await reservation.reservations(reservationCount)
        assert.equal(reservationInformation.id.toNumber(),reservationCount.toNumber(),'id is correct')
        assert.equal(reservationInformation.name,'Restaurant','name is correct')
        assert.equal(reservationInformation.price,'1000000000000000000','price is correct')
        assert.equal(reservationInformation.owner,seller,'owner is correct')
        assert.equal(reservationInformation.booked,false,'booked is correct')
      })

      it('book reservation',async ()=>{
        //Track the seller balance before puchase
        let oldSellerBalance
        oldSellerBalance=await web3.eth.getBalance(seller)
        oldSellerBalance = new web3.utils.BN(oldSellerBalance)
  
        //SUCCESS: Buyer makes purchase
        result = await reservation.bookedReservation(reservationCount,{from: buyer, value:web3.utils.toWei('1','Ether')})
        //Check logs
        const event = result.logs[0].args
        assert.equal(event.id.toNumber(),reservationCount.toNumber(),'id is correct')
        assert.equal(event.name,'Restaurant','name is correct')
        assert.equal(event.price,'1000000000000000000','price is correct')
        assert.equal(event.owner,buyer,'owner is correct')
        assert.equal(event.booked,true,'booked is correct')
  
        //Check that seller received funds
        let newSellerBalance
        newSellerBalance=await web3.eth.getBalance(seller)
        newSellerBalance = new web3.utils.BN(newSellerBalance)
  
        let price = web3.utils.toWei('1','Ether')
        price = new web3.utils.BN(price)
  
        const expectedBalance = oldSellerBalance.add(price)
        assert.equal(newSellerBalance.toString(), expectedBalance.toString())
  
        //FAILURE: Tries to book reservation that does not exist, i.e., product must have valid id
        await reservation.bookedReservation(99,{from: buyer, value:web3.utils.toWei('1','Ether')}).should.be.rejected;
        //FAILURE: Tries to buy without enough ether
        await reservation.bookedReservation(reservationCount,{from: buyer, value:web3.utils.toWei('0.5','Ether')}).should.be.rejected;
        //FAILURE: Deployer tries to buy the product, i.e., reservation can't be booked twice
        await reservation.bookedReservation(reservationCount,{from: deployer, value:web3.utils.toWei('1','Ether')}).should.be.rejected;
        //FAILURE: Buyer tries to buy again, i.e., buyer can't be the seller
        await reservation.bookedReservation(reservationCount,{from: buyer, value:web3.utils.toWei('1','Ether')}).should.be.rejected;
  
      })
    })

  });
});
