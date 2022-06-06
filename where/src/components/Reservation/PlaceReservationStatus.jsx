import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import "../../css/Place/placeDetail.css"
import { WeeklyCalendar, Card } from 'react-rainbow-components';

const PlaceReservationStatus = ({ reservations, businessHours, ...props }) => {

    let counter = 100;
    const firstDay = new Date();
    const [currentWeek, setCurrentWeek] = useState(new Date());
    const [events, setEvents] = useState([]);

    firstDay.setDate(firstDay.getDate() - firstDay.getDay());
    const daysOfWeek = Array.from(Array(7), (_value, index) => {
        const day = new Date(firstDay);
        day.setDate(day.getDate() + index);
        return day;
    });

    useEffect(() => {
        daysOfWeek.map(day => {
            businessHours !== undefined && businessHours.map((businessHour, index) => {
                const activeBusinessHoursDay = businessHour.day.match(/.{1,3}/g);
                const activeDays = day.toString().match(/.{1,3}/g);
                const activeBusinessHourDay = activeBusinessHoursDay[0];
                const activeDay = activeDays[0];
                const startTime = Number(businessHour.startTime);
                if (activeBusinessHourDay === activeDay) {
                    let event = {
                        id: counter,
                        title: 'Closed',
                        startDate: new Date(day.setHours(0, 0, 0, 0)),
                        endDate: new Date(day.setHours(startTime, 0, 0, 0)),
                        backgroundColor: 'rgba(254,72,73,1)',

                    }
                    counter++;
                    setEvents(events => [...events, event]);
                }
            })
        })

        daysOfWeek.map((day => {
            businessHours !== undefined && businessHours.map((businessHour, index) => {
                const activeBusinessHoursDay = businessHour.day.match(/.{1,3}/g);
                const activeDays = day.toString().match(/.{1,3}/g);
                const activeBusinessHourDay = activeBusinessHoursDay[0];
                const activeDay = activeDays[0];
                const closingTime = Number(businessHour.closingTime);
                if (activeBusinessHourDay === activeDay) {
                    let event = {
                        id: counter,
                        title: 'Closed',
                        startDate: new Date(day.setHours(closingTime, 0, 0, 0)),
                        endDate: new Date(day.setHours(24, 0, 0, 0)),
                        backgroundColor: 'rgba(254,72,73,1)',

                    }
                    counter++;
                    setEvents(events => [...events, event]);
                }
            })
        }))
    }, []);

    useEffect(() => {
        daysOfWeek.map(day => {
            reservations.map((reservation, key) => {
                const reservationDateArray = reservation[2].split(" ");
                const reservationDate = reservationDateArray[0];
                const reservationTime = reservation[3].split(":");
                const reservationHour = Number(reservationTime[0]);
                const reservationMinute = Number(reservationTime[1]);
                const id = reservation[0];
                if (day.toLocaleDateString() === reservationDate) {
                    if (day.getTime() >= new Date().getTime() - 1000 * 60 * 60 * 24) {
                        let event = {
                            id: id,
                            title: 'Booked',
                            startDate: new Date(day.setHours(reservationHour, reservationMinute, 0, 0)),
                            endDate: new Date(day.setHours(reservationHour + 1, reservationMinute, 0, 0)),
                            backgroundColor: 'rgba(145,220,193,1)',
                            color: 'rgba(0,171,142,1)',
                        }
                        setEvents(events => [...events, event]);
                    }
                    else {
                        let event = {
                            id: id,
                            title: 'Booked',
                            startDate: new Date(day.setHours(reservationHour, reservationMinute, 0, 0)),
                            endDate: new Date(day.setHours(reservationHour + 1, reservationMinute, 0, 0)),
                            backgroundColor: 'rgba(253,230,230,1)',
                            color: 'rgba(254,72,73,1)',
                        }
                        setEvents(events => [...events, event]);
                    }

                }
            })
        })
    }, [reservations])

    const StyledCard = styled(Card)`
        height: "100%";
        padding: 1rem;
        margin: auto;
    `;

    return (
        <div className="rainbow-m-around_large">
            <StyledCard>
                <WeeklyCalendar
                    events={events}
                    currentWeek={currentWeek}
                    onWeekChange={({ week }) => setCurrentWeek(week)}
                    onEventClick={event => alert(event.title)}
                    locale="en"
                />
            </StyledCard>
        </div>
    );
}
export default PlaceReservationStatus;