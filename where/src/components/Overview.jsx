import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/overview.css";
import "../css/style.css"
function Overview() {
    return (
        <>
            <div className="container">
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <div role="tabpanel" class="tab-pane active detail-overview" id="overview">
                        <div class="detail-leftbox">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Etiam porta sem malesuada magna mollis euismod.</p>
                            <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue Sed non mauris vitae;erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
                            <p>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi.</p>
                            <p>Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam.</p>
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
                                    <li>Pets allowed</li>
                                    <li>Kitchen</li>
                                    <li>Internet</li>
                                    <li>Suitable for events</li>
                                    <li>Gym</li>
                                    <li>Dryer</li>
                                    <li>Hot tub</li>
                                    <li>Family/kid friendly</li>
                                    <li>Doorman</li>
                                    <li>Cable TV</li>
                                    <li>Wheelchair accessible</li>
                                    <li>Wireless Internet</li>
                                    <li>Pool</li>
                                </ul>
                            </div>
                            <div class="detail-openinghoursarea">
                                <div class="detail-title">
                                    <h3>Opening Hours</h3>
                                </div>
                                <ul class="detail-openinghours">
                                    <li>
                                        <span>Monday</span>
                                        <span>10:00 AM - 5:00 PM</span>
                                    </li>
                                    <li>
                                        <span>Tuesday</span>
                                        <span>10:00 AM - 5:00 PM</span>
                                    </li>
                                    <li>
                                        <span>Wednesday</span>
                                        <span>10:00 AM - 5:00 PM</span>
                                    </li>
                                    <li>
                                        <span>Thursday</span>
                                        <span>10:00 AM - 5:00 PM</span>
                                    </li>
                                    <li>
                                        <span>Friday</span>
                                        <span>10:00 AM - 5:00 PM</span>
                                    </li>
                                    <li>
                                        <span>Saturday</span>
                                        <span>10:00 AM - 3:00 PM</span>
                                    </li>
                                    <li>
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> </div>
            </div>
        </>
    )
}

export default Overview