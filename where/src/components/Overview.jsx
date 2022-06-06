import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/overview.css";
import "../css/style.css"
function Overview({ amenities, description, businessHours, ...params }) {
    return (
        <>
            <div className="container">
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <div role="tabpanel" class="tab-pane active detail-overview" id="overview">
                        <div class="detail-leftbox">
                            <p>{description}</p>
                            <div class="detail-videobox">
                                <iframe width="932" height="524" src="https://www.youtube.com/embed/iA7XCf78ITU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="detail-rightbox">
                            <div class="detail-amenitiesarea">
                                <div class="detail-title">
                                    <h3>Amenities</h3>
                                </div>
                                <ul class="detail-amenities">
                                    {amenities !== undefined && amenities.map((amenity, index) => {
                                        return <li key={index}>{amenity.name}</li>
                                    }
                                    )}
                                </ul>
                            </div>
                            <div class="detail-openinghoursarea">
                                <div class="detail-title">
                                    <h3>Opening Hours</h3>
                                </div>
                                <ul class="detail-openinghours">
                                    {businessHours !== undefined && businessHours.map((businessHour, index) => {
                                        return (
                                            <li key={index}>
                                                <span>{businessHour.day}</span>
                                                <span>{businessHour.startTime}.00-{businessHour.closingTime}.00</span>
                                            </li>
                                        )
                                    }
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div> </div>
            </div>
        </>
    )
}

export default Overview