import React from 'react'
import "../../../css/style.css"
import "../../../css/icon.css"
import "../../../css/Place/placeDetail.css"
import image from "../../../images/1.jpg"
import Reviews from '../../../pages/Reviews/Reviews'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip';

const PlaceDetail = () => {
    const changeActive = () => {
        document.getElementById("reviews").classList.add("active")
    }
    return (
        <main className="main haslayout">
            <div className="themepost placespost detail detailvone">
                <figure className="place-featuredimg"><img src={image} alt="image description" /></figure>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="postcontent">
                                <h1>Salt &amp; Pepper Emporium
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
                                            <span>+ 7890 456 133</span>
                                        </li>
                                        <li>
                                            <i className="icon-icons74"></i>
                                            <span>Manhattan Hall, London W1K 2EQ UK</span>
                                        </li>
                                        <li>
                                            <i className="icon-icons20"></i>
                                            <span>Today <span>Closed Now</span> 10:00 AM - 5:00 PM</span>
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
                                    <li role="presentation" ><a href="#overview" aria-controls="overview" role="tab" data-toggle="tab">Overview</a></li>
                                    <li role="presentation" ><a href="#pricing" role="tab" data-toggle="tab" onClick={changeActive}>Pricing</a></li>
                                    <li role="presentation"><a href="#location" role="tab" data-toggle="tab" onClick={changeActive}>Location</a></li>
                                    <li role="presentation" className="active"><a href="#reviews" role="tab" data-toggle="tab" onClick={changeActive}>Reviews</a></li>
                                    <li role="presentation"><a href="#gallery" role="tab" data-toggle="tab" onClick={changeActive}>Reservation</a></li>
                                </ul>
                                <div class="themetabcontent">
                                    <Reviews placeId={1} />
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