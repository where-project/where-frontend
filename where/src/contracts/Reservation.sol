pragma solidity >=0.5.0;

contract Reservation {
    string public name;
    uint public reservationCount = 0;
    mapping(uint => Reservation) public reservations;

    struct Reservation {
        uint id;
        string name;
        uint price;
        address payable owner;
        bool booked;
    }

    event ReservationCreated(
		uint id,
        string name,
        uint price,
        address payable owner,
        bool booked
	);

    event ReservationBooked(
		uint id,
		string name,
		uint price,
		address payable owner,
		bool booked
	);

    constructor() public {
		name = "WHERE";
	}

    function createReservation(string memory _name, uint _price) public {
		//Requira a name
		require (bytes(_name).length>0);
		//Require a valid price
		require (_price > 0);
		//Increment product count
		reservationCount++;
		//create the product
		reservations[reservationCount] = Reservation(reservationCount, _name, _price, msg.sender, false);
		//trigger an event
		emit ReservationCreated(reservationCount, _name, _price, msg.sender, false);
	}

    function bookedReservation(uint _id) public payable {
		//Fetch the reservation
		Reservation memory _reservation = reservations[_id];
		//Fetch the owner
		address payable _seller = _reservation.owner; 
		//Make sure the reservation has valid id
		require(_reservation.id > 0 && _reservation.id <= reservationCount);
		//Require that there is enough Ether in transaction
		require(msg.value >= _reservation.price);
		//Require that the reservation has not been booked already
		require(!_reservation.booked);
		//Require that the buyer is not the seller
		require(_seller != msg.sender);
		//Transfer ownership to the buyer
		_reservation.owner = msg.sender;
		// Mark as booked
		_reservation.booked=true;
		//Update the reservations
		reservations[_id]=_reservation;
		//Pay the reservation seller by sending them Ether
		address(_seller).transfer(msg.value);
		//Trigger an event
		emit ReservationBooked(reservationCount, _reservation.name, _reservation.price, msg.sender, true);
	}
}
