import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editReview } from "../../store/reviews";

const EditReviewForm = ({ review, setShowEditModal }) => {
    const dispatch = useDispatch()

    const [rating, setRating] = useState(review.rating)
    const [body, setBody] = useState(review.body)
    const [errors, setErrors] = useState([])

    const ratingArr = [1, 2, 3, 4, 5]

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
            setShowEditModal(false)
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
                {ratingArr.map((index) => {
                            index += 1
                            return (
                                <button
                                    type='button'
                                    key={index}
                                    className={index <= rating ? 'on' : 'off'}
                                    id='rating-button'
                                    onClick={() => setRating(index)}
                                >
                                    <span className='star'>&#9733;</span>
                                </button>
                            )
                        })}
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
