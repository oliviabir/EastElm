import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { viewReviews } from "../../store/reviews"
import DeleteReview from "../DeleteReview"
import EditReviewForm from "../EditReview"

const Reviews = ({ id }) => {
    const dispatch = useDispatch()

    const sessionUser = useSelector(state => state.session.user)
    const reviewsState = useSelector((state) => {
        return Object.values(state.reviews)
    })

    const reviews = reviewsState.filter(review => review.product_id == id)

    useEffect(() => {
        dispatch(viewReviews())
    }, [dispatch])

    return (
        <div>
            <h2>Reviews</h2>
            <button>Leave a Review</button>
            {reviews.map((review) => (
                <div key={review.id}>
                    <div>{review.body}</div>
                    {(sessionUser.id == review.user_id) ? (
                        <div>
                            <EditReviewForm review={ review } />
                            <DeleteReview review={review} productId={id}/>
                        </div>
                    ) : null }
                    <br />
                </div>
            ))}
        </div>
    )
}

export default Reviews
