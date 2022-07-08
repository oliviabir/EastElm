import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { removeReview } from '../../store/reviews'

function DeleteReview({ review, productId }) {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleDelete = async (e) => {
        e.preventDefault()

        let reviewDeleted = await dispatch(removeReview(review.id))
        if (reviewDeleted) {
            return history.push(`/products/${productId}`)
        }
    }

    return (
        <button onClick={handleDelete}>Delete Review</button>
    )
}

export default DeleteReview
