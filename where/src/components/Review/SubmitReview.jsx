import React from 'react'
import "../../css/reviews.css";

function SubmitReview({ categories, user, ...props }) {
    return (
        <div className="formreviewarea">
            <h3>Add Review</h3>
            <form className="formtheme formaddreview">
                <fieldset>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="rating">
                                <p>Your rating for this listing</p>
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
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                                <span className="selection">
                                    <select>
                                        {categories.map((category, index) => {
                                            <option>All Categories</option>
                                            return (
                                                <option key={index} value={category.id}>{category.categoryName}</option>
                                            );
                                        })}
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group">
                                <textarea name="review" className="form-control" placeholder="Review"></textarea>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button className="btn btngreen" type="button">Submit Review</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default SubmitReview