const VIEW_REVIEWS = 'reviews/VIEW_REVIEWS'
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'

const view = (reviews) => ({
    type: VIEW_REVIEWS,
    reviews
})

const remove = (review) => ({
    type: REMOVE_REVIEW,
    review
})

export const viewReviews = () => async (dispatch) => {
    const response = await fetch('/api/reviews')

    if (response.ok) {
        const reviews = await response.json()
        dispatch(view(reviews))
    }
}

export const removeReview = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE'
    })
    console.log('RESPONSE', response)
    if (response.ok) {
        dispatch(remove(id));
        return response
    }
}

const reviewsReducer = (state = {}, action) => {
    switch(action.type) {
        case VIEW_REVIEWS:
            const normalizedReviews = {}
            action.reviews.reviews.forEach((review) => {
                normalizedReviews[review.id] = review
            })
            return {...normalizedReviews}
        case REMOVE_REVIEW:
            const deleteState = {...state}
            delete deleteState[action.review]
            return deleteState
        default:
            return state
    }
}

export default reviewsReducer
