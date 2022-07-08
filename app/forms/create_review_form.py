from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField, SubmitField
from sqlalchemy import DateTime
from wtforms.validators import DataRequired

class CreateReviewForm(FlaskForm):
    user_id = IntegerField('User Id')
    product_id = IntegerField('Product Id')
    rating = IntegerField('Rating')
    body = TextAreaField('Body')
    created_at = DateTime('created_at')
    updated_at = DateTime('updated_at')
    submit = SubmitField('Submit')
