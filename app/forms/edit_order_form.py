from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from sqlalchemy import DateTime
from wtforms.validators import DataRequired

class EditOrderForm(FlaskForm):
    user_id = IntegerField('User Id')
    product_id = IntegerField('Product Id')
    num_of_product = IntegerField('Num Product')
    instructions = StringField('Instructions')
    created_at = DateTime('created_at')
    updated_at = DateTime('updated_at')
    submit = SubmitField('Submit')
