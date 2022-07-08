from flask import Blueprint, request
from app.models import db, Review
from app.forms import CreateReviewForm
from datetime import datetime

review_routes = Blueprint('reviews', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@review_routes.route('/')
def reviews():
    reviews = Review.query.all()
    return {'reviews': [review.to_dict() for review in reviews]}

@review_routes.route('/<int:id>', methods=['DELETE'])
def delete_review(id):
    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return "Review was successfully deleted"

@review_routes.route('/new', methods=['POST'])
def create_review():
    form = CreateReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_review = Review(
            user_id=data['user_id'],
            product_id=data['product_id'],
            rating=data['rating'],
            body=data['body'],
            created_at=datetime.now(),
            updated_at=datetime.now()
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
