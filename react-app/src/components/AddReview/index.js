import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../store/reviews";

const AddReviewForm = ({ productId }) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)

    const [rating, setRating] = useState(5)
    const [body, setBody] = useState('')
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            user_id: sessionUser.id,
            product_id: productId,
            rating,
            body
        }

        let newReview = await dispatch(addReview(payload))

        if (newReview) {
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

export default AddReviewForm
