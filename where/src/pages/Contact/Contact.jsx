import React, { useState } from 'react'
import "../../css/contact.css"
import "../../css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailService from '../../services/EmailService';
const Contact = () => {
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
    const [name, setName] = useState("");
    const [emailTo, setEmailTo] = useState("");

    let reservationModel = {
        "email": "noreply.where26@gmail.com",
        "body": body,
        "subject": subject,
        "name": name,
        "emailTo": emailTo
    }
    const handleClick = (event) => {
        event.preventDefault();
        let emailService = new EmailService();

        emailService.sendEmail1(reservationModel).then((result) => {
            console.log(result);
        }, err => {
            console.log(err.response);
        });
    }

    const handleSetBody = (event) => {
        setBody(event.target.value);
    }

    const handleSetSubject = (event) => {
        setSubject(event.target.value);
    }

    const handleSetNameSurname = (event) => {
        setName(event.target.value);
    }

    const handleSetEmail = (event) => {
        setEmailTo(event.target.value);
    }

    return (
        <main>
            <div className="locationmap" style={{ position: "relative", overflow: "hidden" }}>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="content">
                            <div className="contactuserarea">
                                <div className="d-flex justify-content-between" >
                                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 pull-left">
                                        <div className="row">
                                            <form className="formtheme formcontactus" >
                                                <fieldset>
                                                    <h2>Contact Form</h2>
                                                    <div className="row">
                                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                            <div className="form-group">
                                                                <input type="text" name="yourname" className="form-control" placeholder="Your Name" onChange={handleSetNameSurname} />
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                            <div className="form-group">
                                                                <input type="email" name="email" className="form-control" placeholder="Email Address" onChange={handleSetEmail} />
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                            <div className="form-group">
                                                                <input type="text" name="subject" className="form-control" placeholder="Subject" onChange={handleSetSubject} />
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                            <div className="form-group">
                                                                <textarea className="form-control contact-textarea" name="message" placeholder="Message" onChange={handleSetBody}></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                            <button className="btn" type="button" onClick={handleClick}>Send Message</button>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4 pull-right">
                                        <div className="row">
                                            <div className="contactinfo">
                                                <h2>Get in Touch</h2>
                                                <div className="description">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eius. Illo quae sequi dolorum doloribus soluta voluptate, ratione et! Accusantium iusto cupiditate a placeat beatae? Ipsam esse ut hic commodi?</p>
                                                </div>
                                                <ul className="contactinfolist">
                                                    <li>
                                                        <i className="icon-phone2"></i>
                                                        <span>+ 90 123 456 77 89</span>
                                                    </li>
                                                    <li>
                                                        <i className="icon-icons208"></i>
                                                        <span><a href="mailto:noreply.where26@gmail.com">noreply.where26@gmail.com</a></span>
                                                    </li>
                                                    <li>
                                                        <i className="icon-world"></i>
                                                        <span><a href="" target="_blank">www.where.com</a></span>
                                                    </li>
                                                    <li>
                                                        <i className="icon-icons74"></i>
                                                        <span>Odunpazarı, Eskişehir TR</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact

