pragma solidity >=0.5.0;

contract ReservationDetail {
    string public name;
    uint256 public reservationCount = 0;
    mapping(uint256 => Reservation) public reservations;

    struct Reservation {
        uint256 id;
        uint256 placeId;
        string date;
        string time;
        address payable owner;
    }

    event ReservationCreated(
        uint256 id,
        uint256 placeId,
        string date,
        string time,
        address payable owner
    );

    constructor() public {
        name = "WHERE RESERVATION SYSTEM";
    }

    function createReservation(
        uint256 _placeId,
        string memory _date,
        string memory _time
    ) public {
        //Require a place id
        require(_placeId > 0);
        //Require a date
        require(bytes(_date).length > 0);
        //Require a time
        require(bytes(_time).length > 0);
        //Increment product count
        reservationCount++;
        //create the product
        reservations[reservationCount] = Reservation(
            reservationCount,
            _placeId,
            _date,
            _time,
            msg.sender
        );
        //trigger an event
        emit ReservationCreated(
            reservationCount,
            _placeId,
            _date,
            _time,
            msg.sender
        );
    }
}
