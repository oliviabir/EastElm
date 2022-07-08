import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editReview } from "../../store/reviews";

const EditReviewForm = ({ review }) => {
    const dispatch = useDispatch()

    const [rating, setRating] = useState(review.rating)
    const [body, setBody] = useState(review.body)
    const [errors, setErrors] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            user_id: review.user_id,
            product_id: review.product_id,
            rating,
            body
        }

        let editedReview = await dispatch(editReview(payload, review.id))

        if (editedReview) {
            setErrors([])
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <label>
                    Rating
                    <input
                        name='rating'
                        type='number'
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        name='body'
                        type='text'
                        value={body}
                        placeholder={'Leave a review'}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default EditReviewForm
