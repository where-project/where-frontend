import React from 'react'
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
let tmp = [{
    day: "Monday",
    status: "string",
    startTime: "08:00",
    closingTime: "23:00"
}, {
    day: "Tuesday",
    status: "string",
    startTime: "08:00",
    closingTime: "23:00"
}, {
    day: "Wednesday",
    status: "string",
    startTime: "08:00",
    closingTime: "23:00"
}, {
    day: "Thursday",
    status: "string",
    startTime: "08:00",
    closingTime: "23:00"
}, {
    day: "Friday",
    status: "string",
    startTime: "08:00",
    closingTime: "23:00"
}, {
    day: "Saturday",
    status: "string",
    startTime: "08:00",
    closingTime: "23:00"
}, {
    day: "Sunday",
    status: "string",
    startTime: "08:00",
    closingTime: "23:00"
}]
const BusinessHour = ({ businessHour, setBusinessHour, ...props }) => {

    const handleChange = (value, day, status) => {
        if (day === "Monday") {
            if (status === "Opening") {
                tmp[0].startTime = value;
            } else
                tmp[0].closingTime = value;

        } else if (day === "Tuesday") {
            if (status === "Opening") {
                tmp[1].startTime = value;
            } else
                tmp[1].closingTime = value;
        } else if (day === "Wednesday") {
            if (status === "Opening") {
                tmp[2].startTime = value;
            } else
                tmp[2].closingTime = value;
        } else if (day === "Thursday") {
            if (status === "Opening") {
                tmp[3].startTime = value;
            } else
                tmp[3].closingTime = value;
        } else if (day === "Friday") {
            if (status === "Opening") {
                tmp[4].startTime = value;
            } else
                tmp[4].closingTime = value;
        } else if (day === "Saturday") {
            if (status === "Opening") {
                tmp[5].startTime = value;
            } else
                tmp[5].closingTime = value;
        } else if (day === "Sunday") {
            if (status === "Opening") {
                tmp[6].startTime = value;
            } else
                tmp[6].closingTime = value;
        }
        setBusinessHour(tmp);
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
                                <select onChange={(event) => handleChange(event.target.value, "Monday", "Closing")}>
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
                                <select onChange={(event) => handleChange(event.target.value, "Tuesday", "Closing")}>
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
                                <select onChange={(event) => handleChange(event.target.value, "Wednesday", "Closing")}>
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
                                <select onChange={(event) => handleChange(event.target.value, "Thursday", "Closing")}>
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
                                <select onChange={(event) => handleChange(event.target.value, "Friday", "Closing")}>
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
                                <select onChange={(event) => handleChange(event.target.value, "Saturday", "Closing")}>
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
                                <select onChange={(event) => handleChange(event.target.value, "Sunday", "Closing")}>
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
                    </ul>
                </div>
            </fieldset>
        </section>
    )
}

export default BusinessHour