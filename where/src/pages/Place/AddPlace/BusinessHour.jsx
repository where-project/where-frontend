import React from 'react'
import BusinessHourService from '../../../services/BusinessHourService';
const hours = [
    {
        hour: "Closed"
    },
    {
        hour: "00:00"
    },
    {
        hour: "01:00"
    },
    {
        hour: "02:00"
    },
    {
        hour: "03:00"
    },
    {
        hour: "04:00"
    },
    {
        hour: "05:00"
    },
    {
        hour: "06:00"
    },
    {
        hour: "07:00"
    },
    {
        hour: "08:00"
    },
    {
        hour: "09:00"
    },
    {
        hour: "10:00"
    },
    {
        hour: "11:00"
    },
    {
        hour: "12:00"
    },
    {
        hour: "13:00"
    },
    {
        hour: "14:00"
    },
    {
        hour: "15:00"
    },
    {
        hour: "16:00"
    },
    {
        hour: "17:00"
    },
    {
        hour: "18:00"
    },
    {
        hour: "19:00"
    },
    {
        hour: "20:00"
    },
    {
        hour: "21:00"
    },
    {
        hour: "22:00"
    },
    {
        hour: "23:00"
    },
    {
        hour: "24:00"
    }
];

const BusinessHour = ({ businessHour, setBusinessHour, setHello, ...props }) => {
    const handleChange = (value, day, status) => {
        console.log(value, day, status);
        /*setBusinessHour([...businessHour], {
            [businessHour.day]: {
                [businessHour.status]: status,
                [businessHour.hour]: value
            }
        })*/

        setBusinessHour([...businessHour, {
            day: day,
            status: status,
            hour: value,
            placeId: 2
        }]);
    }

    const sendData = () => {
        let businessHourService = new BusinessHourService();
        businessHourService.add(businessHour).then(res => {
            console.log(res);
        });
    }
    return (
        <section>
            <fieldset className='listing'>
                <div className="boxtitle">
                    <h3>Business Hours</h3>
                </div>
                <div className="row">
                    <ul className="businesshours">
                        <li>
                            <label>Monday</label>
                            <div className="select">
                                <select onChange={(event) => handleChange(event.target.value, "Monday", "Opening")} placeholder="asdas">
                                    <option>Please select time</option>
                                    {hours.map((hour, i) => {
                                        return (
                                            <option key={i} value={hour.hour}>
                                                {hour.hour}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="select">
                                <select onChange={(event) => handleChange(event.target.value, "Monday", "Closed")}>
                                    <option>Please select time</option>
                                    {hours.map((hour, i) => {
                                        return (
                                            <option key={i} value={hour.hour}>
                                                {hour.hour}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </li>
                        <li>
                            <label>Tuesday</label>
                            <div className="select">
                                <select onChange={(event) => handleChange(event.target.value, "Tuesday", "Opening")}>
                                    <option>Please select time</option>
                                    {hours.map((hour, i) => {
                                        return (
                                            <option key={i} value={hour.hour}>
                                                {hour.hour}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="select">
                                <select onChange={(event) => handleChange(event.target.value, "Tuesday", "Closed")}>
                                    <option>Please select time</option>
                                    {hours.map((hour, i) => {
                                        return (
                                            <option key={i} value={hour.hour}>
                                                {hour.hour}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </li>
                        <li>
                            <label>Wednesday</label>
                            <div className="select">
                                <select onChange={(event) => handleChange(event.target.value, "Wednesday", "Opening")}>
                                    <option>Please select time</option>
                                    {hours.map((hour, i) => {
                                        return (
                                            <option key={i} value={hour.hour}>
                                                {hour.hour}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="select">
                                <select onChange={(event) => handleChange(event.target.value, "Wednesday", "Closed")}>
                                    <option>Please select time</option>
                                    {hours.map((hour, i) => {
                                        return (
                                            <option key={i} value={hour.hour}>
                                                {hour.hour}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </li>
                        <li>
                            <label>Thursday</label>
                            <div className="select">
                                <select onChange={(event) => handleChange(event.target.value, "Thursday", "Opening")}>
                                    <option>Please select time</option>
                                    {hours.map((hour, i) => {
                                        return (
                                            <option key={i} value={hour.hour}>
                                                {hour.hour}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="select">
                                <select onChange={(event) => handleChange(event.target.value, "Thursday", "Closed")}>
                                    <option>Please select time</option>
                                    {hours.map((hour, i) => {
                                        return (
                                            <option key={i} value={hour.hour}>
                                                {hour.hour}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </li>
                        <li>
                            <label>Friday</label>
                            <div className="select">
                                <select onChange={(event) => handleChange(event.target.value, "Friday", "Opening")}>
                                    <option>Please select time</option>
                                    {hours.map((hour, i) => {
                                        return (
                                            <option key={i} value={hour.hour}>
                                                {hour.hour}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="select">
                                <select onChange={(event) => handleChange(event.target.value, "Friday", "Closed")}>
                                    <option>Please select time</option>
                                    {hours.map((hour, i) => {
                                        return (
                                            <option key={i} value={hour.hour}>
                                                {hour.hour}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </li>
                        <li>
                            <label>Saturday</label>
                            <div className="select">
                                <select onChange={(event) => handleChange(event.target.value, "Saturday", "Opening")}>
                                    <option>Please select time</option>
                                    {hours.map((hour, i) => {
                                        return (
                                            <option key={i} value={hour.hour}>
                                                {hour.hour}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="select">
                                <select onChange={(event) => handleChange(event.target.value, "Saturday", "Closed")}>
                                    <option>Please select time</option>
                                    {hours.map((hour, i) => {
                                        return (
                                            <option key={i} value={hour.hour}>
                                                {hour.hour}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </li>
                        <li>
                            <label>Sunday</label>
                            <div className="select">
                                <select onChange={(event) => handleChange(event.target.value, "Sunday", "Opening")}>
                                    <option>Please select time</option>
                                    {hours.map((hour, i) => {
                                        return (
                                            <option key={i} value={hour.hour}>
                                                {hour.hour}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="select">
                                <select onChange={(event) => handleChange(event.target.value, "Sunday", "Closed")}>
                                    <option>Please select time</option>
                                    {hours.map((hour, i) => {
                                        return (
                                            <option key={i} value={hour.hour}>
                                                {hour.hour}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <div className="btnarea">
                                    <div className="form-group dashboardfield">
                                        <button className='btnadd' type="button" onClick={sendData}>+</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </fieldset>
        </section>
    )
}

export default BusinessHour