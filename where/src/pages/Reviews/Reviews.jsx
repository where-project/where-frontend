import React, { useEffect, useState } from 'react'
import "../../css/reviews.css";
import "../../css/icon.css";
import "../../css/responsive.css"
import CategoryService from '../../services/CategoryService';
import CommentService from "../../services/CommentService";
import SubmitReview from '../../components/Review/SubmitReview';
import Pagination from '../../components/Pagination/Pagination';
import { Alert } from 'react-bootstrap';
import UserService from '../../services/UserService';
import ScoreService from "../../services/ScoreService"
import { Rating } from 'react-rainbow-components';
import userImage from "../../images/icons/avatar.png"

function Reviews({ placeId, user, ...props }) {

    const [categories, setCategories] = useState([]);
    const [comments, setComments] = useState([]);
    const [isCommentSubmit, setIsCommentSubmit] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const [scores, setScores] = useState([]);

    const getCategories = () => {
        let categoryService = new CategoryService();
        categoryService.getAll().then((result) => {
            setCategories(result.data)
        }, err => {
            console.log(err.response);
        });
    };
    let scoreService = new ScoreService();

    const getComments = (placeId) => {
        let commentsService = new CommentService();
        commentsService.getCommentsByPlaceId(placeId).then((result) => {
            setComments(result.data)
            setIsCommentSubmit(false);
        }, err => {
            console.log(err.response);
        });

        scoreService.getByPlaceId(placeId).then((result) => {
            setScores(result.data)
        }, err => {
            console.log(err.response);
        }
        )
    };
    const getUserInfo = () => {
        let userService = new UserService();
        userService.getUserByUsername(user.username).then((result) => {
            setUserDetails(result.data)
        }).catch(err => {
            console.log(err.response);
        })
    }
    useEffect(() => {
        getCategories();
        getUserInfo();
    }, []);
    useEffect(() => {
        getComments(placeId);
        console.log(scores);
    }, [isCommentSubmit])

    return (
        <div role="tabpanel" className="tab-pane" id="reviews">
            {comments.length > 0 ?
                <ul id="comments" className="comments">
                    {comments.map((comment) => {
                        return (
                            scores.map((score) => {
                                if (score.id === comment.scoreId && score.placeId === comment.placeId) {
                                    return (
                                        <li key={comment.id}>
                                            <div className="comment">
                                                <div className="commentauthorbox">
                                                    <figure><a href="">
                                                        <img src={userImage} alt="image description" />
                                                    </a>
                                                    </figure>
                                                    <div className="authorinfo">
                                                        <h3>{comment.firstName} {comment.lastName}</h3>
                                                        <em></em>
                                                        <Rating value={score.venueScore} readOnly label={score.venueScore + " of 5"} />
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
                                                        <p style={{ textTransform: 'capitalize' }}>{comment.commentText}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                            })
                        )
                    }
                    )}
                </ul> : <Alert style={{ borderRadius: "10px" }} key="info" variant="info">
                    No comments yet. Be the first to comment!
                </Alert>
            }
            <Pagination />
            <SubmitReview placeId={placeId} user={user} categories={categories} setIsCommentSubmit={setIsCommentSubmit} userDetails={userDetails} />
        </div>
    )
}

export default Reviews;


