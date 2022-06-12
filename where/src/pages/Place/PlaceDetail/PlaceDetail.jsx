import React, { useEffect, useState } from 'react'
import "../../../css/style.css"
import "../../../css/icon.css"
import "../../../css/Place/placeDetail.css"
import image from "../../../images/1.jpg"
import Pricing from '../../../pages/Pricing/Pricing'
import Reviews from '../../../pages/Reviews/Reviews'
import Overview from '../../../components/Overview'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip';
import ReservationPage from '../../ReservationPage/ReservationPage'
import { useParams } from 'react-router-dom'
import PlaceService from '../../../services/PlaceService'
import PlaceLocation from './Location/PlaceLocation'

const PlaceDetail = () => {
    const [currentPage, setCurrentPage] = useState(1);
    let { placeId } = useParams();
    const [place, setPlace] = useState({});
    const changeActive = (id) => {
        setCurrentPage(id);
    }
    const activeComponent = () => {
        if (currentPage === 1) {
            return <Overview amenities={place.placeAmenities} description={place.description} businessHours={place.businessHours} />
        }
        else if (currentPage === 2) {
            return <Pricing menuItems={place.menuItems} />
        }
        else if (currentPage === 3) {
            return <PlaceLocation place={place} />
        }
        else if (currentPage === 4) {
            return <Reviews placeId={placeId} />
        }
        else if (currentPage === 5) {
            return <ReservationPage place={place} />
        }
    }

    useEffect(() => {
        let placeService = new PlaceService();
        placeService.getById(placeId).then((result) => {
            setPlace(result.data)
        }, err => {
            console.log(err.response.data.error_message);
        });
    }, [])

    return (
        <main className="main haslayout">
            <div className="themepost placespost detail detailvone">
                <figure className="place-featuredimg"><img src={image} alt="image description" /></figure>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="postcontent">
                                <h1>{place.placeName}
                                    <OverlayTrigger
                                        delay={{ hide: 450, show: 300 }}
                                        overlay={(props) => (
                                            <Tooltip style={{ top: "-19.5px", left: "359.281px", display: "block", color: "#fff", backgroundColor: "#2457cf" }} {...props}>
                                                Verified
                                            </Tooltip>
                                        )}
                                        placement="top"
                                    ><i className="icon-checkmark postverified themetooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Verified"></i>
                                    </OverlayTrigger> </h1>
                                <div className="reviewcategory">
                                    <div className="review">
                                        <span className="stars"><span></span></span>
                                        <em>(6 Review)</em>
                                    </div>
                                    <ul className="postinfotags">
                                        <li><a href="#3"><i className="icon-heart2"></i><span>23</span></a></li>
                                        <li>
                                            <div className="btnquickinfo">
                                                <a className="btnshare" href="#3">
                                                    <i className="icon-share3"></i>
                                                    <span>share</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li><span className="tagviews"><i className="icon-eye2"></i><span>52</span></span></li>
                                    </ul>
                                </div>
                                <div className="themepostfoot">
                                    <ul>
                                        <li>
                                            <i className="icon-telephone114"></i>
                                            <span>{place.phoneNumber}</span>
                                        </li>
                                        <li>
                                            <i className="icon-icons74"></i>
                                            <span>{place.locationAddress} {place.locationCityName} {place.locationCountry}</span>
                                        </li>
                                        <li>
                                            <i className="icon-icons20"></i>
                                            {
                                                place.businessHours !== undefined && place.businessHours.map((businessHour, index) => {
                                                    const activeBusinessHoursDay = businessHour.day.match(/.{1,3}/g);
                                                    const activeDays = new Date().toString().match(/.{1,3}/g);
                                                    const activeBusinessHourDay = activeBusinessHoursDay[0];
                                                    const activeDay = activeDays[0];
                                                    if (activeBusinessHourDay === activeDay) {
                                                        return <span> {activeDay}: {businessHour.startTime} - {businessHour.closingTime}</span>
                                                    }
                                                })
                                            }
                                        </li>
                                        <li>
                                            <i className="icon-global"></i>
                                            <span><a href="#1">www.where.com</a></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="themetabs">
                                <ul className="themetabnav" role="tablist">
                                    <li role="presentation" className={currentPage === 1 && "active"}><a href="#overview" aria-controls="overview" role="tab" data-toggle="tab" onClick={() => changeActive(1)}>Overview</a></li>
                                    <li role="presentation" className={currentPage === 2 && "active"}><a href="#pricing" role="tab" data-toggle="tab" onClick={() => changeActive(2)}>Pricing</a></li>
                                    <li role="presentation" className={currentPage === 3 && "active"}><a href="#location" role="tab" data-toggle="tab" onClick={() => changeActive(3)}>Location</a></li>
                                    <li role="presentation" className={currentPage === 4 && "active"}><a href="#reviews" role="tab" data-toggle="tab" onClick={() => changeActive(4)}>Reviews</a></li>
                                    <li role="presentation" className={currentPage === 5 && "active"}><a href="#gallery" role="tab" data-toggle="tab" onClick={() => changeActive(5)}>Reservation</a></li>
                                </ul>
                                <div className="themetabcontent">
                                    {
                                        activeComponent()
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default PlaceDetail
