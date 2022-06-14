import React, { useState } from 'react'
import { Rating } from 'react-rainbow-components';
import "../../css/reviews.css";
import CommentService from '../../services/CommentService';

function SubmitReview({ categories, user, placeId, setIsCommentSubmit, userDetails, ...props }) {
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState(0);
    let data = {
        createCommentRequest: {
            "commentText": comment,
            "userId": userDetails.id,
            "placeId": placeId
        },
        createScoreRequest: {
            "venueScore": rating,
            "coronaScore": 0,
            "userId": userDetails.id,
            "placeId": placeId
        }
    }
    const handleSetComment = (event) => {
        setComment(event.target.value);
    }
    const submitReview = () => {
        let commentService = new CommentService();
        commentService.add(data).then((result) => {
            setIsCommentSubmit(true);
            setComment("");
            console.log("eklendi");
        }, err => {
            console.log(err.response);
        });
    }

    const handleScore = (event) => {
        console.log(event.target.value);
        setRating(event.target.value);
    }

    return (
        <div className="formreviewarea">
            <h3>Add Review</h3>
            <form className="formtheme formaddreview">
                <fieldset>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="rating">
                                <div className="rainbow-flex rainbow-justify_space-around rainbow-m-bottom_x-small">
                                    <div className="rainbow-m-around_small">
                                        <Rating value={rating} label="Your rating for this place" labelAlignment="left" onChange={handleScore} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                                <input type="text" name="yourname" className="form-control" placeholder={userDetails.firstName + " " + userDetails.lastName} disabled />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                                <input type="text" name="emailaddress" className="form-control email-text" placeholder={userDetails.email} disabled />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group">
                                <textarea id="review" name="review" className="form-control" placeholder="Review" onChange={handleSetComment} value={comment}></textarea>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button className="btn btngreen border_white" type="button" onClick={submitReview}>Submit Review</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default SubmitReview