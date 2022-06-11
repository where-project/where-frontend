import React, { useEffect, useState } from 'react'
import "../../css/reviews.css";
import "../../css/icon.css";
import "../../css/responsive.css"
import CategoryService from '../../services/CategoryService';
import CommentService from "../../services/CommentService";
import SubmitReview from '../../components/Review/SubmitReview';
import Pagination from '../../components/Pagination/Pagination';
import { Alert } from 'react-bootstrap';

function Reviews({ placeId, ...props }) {

    const [categories, setCategories] = useState([]);
    const [comments, setComments] = useState([]);
    const [isCommentSubmit, setIsCommentSubmit] = useState(false);
    const user = {
        id: 1,
        firstName: "Yasemin Gerboğa",
        email: "yasemingerboga@gmail.com"
    }
    const getCategories = () => {
        let categoryService = new CategoryService();
        categoryService.getAll().then((result) => {
            setCategories(result.data)
        }, err => {
            console.log(err.response);
        });
    };

    const getComments = (placeId) => {
        let commentsService = new CommentService();
        commentsService.getCommentsByPlaceId(placeId).then((result) => {
            setComments(result.data)
        }, err => {
            console.log(err.response);
        });
    };

    useEffect(() => {
        getCategories();
    }, []);
    useEffect(() => {
        getComments(placeId);
    }, [isCommentSubmit])


    return (
        <div role="tabpanel" className="tab-pane" id="reviews">
            {comments.length > 0 ?
                <ul id="comments" className="comments">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <div className="comment">
                                    <div className="commentauthorbox">
                                        <figure><a href="">
                                            <img src="https://media-cdn.tripadvisor.com/media/photo-s/10/e5/73/92/photo1jpg.jpg" alt="image description" />
                                        </a>
                                        </figure>
                                        <div className="authorinfo">
                                            <h3>{comment.firstName} {comment.lastName}</h3>
                                            <em>Family Vacation</em>
                                            <span className="stars"><span></span></span>
                                        </div>
                                    </div>
                                    <a className="helpful" href="">
                                        <i className="icon-thumb-up2"></i>
                                        <span>Helpful</span>
                                        <span>1</span>
                                    </a>
                                    <div className="commentcontent">
                                        <time dateTime={comment.createDate}>
                                            <i className="icon-alarmclock"></i>
                                            <span>{comment.createDate}</span>
                                        </time>
                                        <div className="description">
                                            <p>{comment.commentText}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        )
                    })}
                </ul> : <Alert style={{ borderRadius: "10px" }} key="info" variant="info">
                    No comments yet. Be the first to comment!
                </Alert>}
            <Pagination />
            <SubmitReview placeId={placeId} user={user} categories={categories} setIsCommentSubmit={setIsCommentSubmit} />
        </div>
    )
}

export default Reviews;