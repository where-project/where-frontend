import React, { useState } from 'react'
import "../../css/reviews.css";
import CommentService from '../../services/CommentService';

function SubmitReview({ categories, user, placeId, setIsCommentSubmit, ...props }) {
    const [comment, setComment] = useState("")
    let commentData = {
        "commentText": comment,
        "userId": user.id,
        "placeId": placeId
    }
    const handleSetComment = (event) => {
        setComment(event.target.value);
    }
    const submitReview = () => {
        let commentService = new CommentService();
        commentService.add(commentData).then((result) => {
            setIsCommentSubmit(true);
            setComment("");
        }, err => {
            console.log(err.response);
        });
    }
    return (
        <div className="formreviewarea">
            <h3>Add Review</h3>
            <form className="formtheme formaddreview">
                <fieldset>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="rating">
                                <p>Your rating for this place</p>
                                <span className="stars"></span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                                <input type="text" name="yourname" className="form-control" placeholder={user.firstName} disabled />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                                <input type="text" name="emailaddress" className="form-control email-text" placeholder={user.email} disabled />
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