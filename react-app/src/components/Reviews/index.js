import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { viewReviews } from "../../store/reviews"

const Reviews = ({ id }) => {
    const dispatch = useDispatch()

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
            {reviews.map((review) => (
                <div key={review.id}>
                    <div>{review.body}</div>
                </div>
            ))}
        </div>
    )
}

export default Reviews
