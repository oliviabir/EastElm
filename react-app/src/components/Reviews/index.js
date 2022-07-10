import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from '../../context/Modal';
import { viewReviews } from "../../store/reviews"
import AddReviewForm from "../AddReview";
import DeleteReview from "../DeleteReview"
import EditReviewForm from "../EditReview"
import './Reviews.css'

const Reviews = ({ id, product }) => {
    const dispatch = useDispatch()

    const [showModal, setShowModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)

    const sessionUser = useSelector(state => state.session.user)
    const reviewsState = useSelector((state) => {
        return Object.values(state.reviews)
    })

    const reviews = reviewsState.filter(review => review.product_id == id)

    useEffect(() => {
        dispatch(viewReviews())
    }, [dispatch])

    return (
        <div className='reviews-container'>
            <h2 className='reviews-heading'>Reviews</h2>
            <button onClick={() => setShowModal(true)} className='reviews-buttons'>Leave a Review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddReviewForm productId={product?.id} setShowModal={setShowModal} />
                </Modal>
            )}
            {reviews.map((review) => (
                <div key={review.id}>
                    <div>{review.body}</div>
                    {(sessionUser.id == review.user_id) ? (
                        <div>
                            <button onClick={() => setShowEditModal(true)} className='reviews-buttons'>Edit Review</button>
                            {showEditModal && (
                                <Modal onClose={() => setShowEditModal(false)}>
                                    <EditReviewForm review={ review } setShowEditModal={setShowEditModal} />
                                </Modal>
                            )}
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
