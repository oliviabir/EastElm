from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, EqualTo
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use')

def long_password(form, field):
    password = field.data
    if len(password) > 20:
        raise ValidationError('Password exceeds maximum length of 20 characters')

def short_password(form, field):
    password = field.data
    if len(password) < 6:
        raise ValidationError('Password must be more than 6 characters')

class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired('Please enter a username'), username_exists])
    email = StringField('email', validators=[DataRequired('Please enter an email'), user_exists, Email(message='Email is not a valid email address')])
    password = StringField('password', validators=[DataRequired('Password must be between 6 and 20 characters'), long_password, short_password])
    repeat_password = StringField('repeat_password', validators=[DataRequired('Please re-enter your password'), EqualTo('password', message='Passwords must match')])
