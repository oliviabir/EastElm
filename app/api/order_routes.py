from flask import Blueprint, request
from app.models import db, Order
from app.forms import OrderForm, EditOrderForm
from datetime import datetime

order_routes = Blueprint('orders', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@order_routes.route('/')
def orders():
    orders = Order.query.all()
    return {'orders': [order.to_dict() for order in orders]}

@order_routes.route('/new', methods=['POST'])
def create_order():
    form = OrderForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_order = Order(user_id=data['user_id'],
                          product_id=data['product_id'],
                          num_of_product=data['num_of_product'],
                          instructions=data['instructions'],
                          created_at=datetime.now(),
                          updated_at=datetime.now())
        db.session.add(new_order)
        db.session.commit()
        return new_order.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@order_routes.route('/<int:id>', methods=['DELETE'])
def delete_order(id):
    order = Order.query.get(id)
    db.session.delete(order)
    db.session.commit()

    return "Order was successfully deleted."

@order_routes.route('/<int:id>', methods=['PUT'])
def edit_order(id):
    order = Order.query.get(id)
    form = EditOrderForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        order.num_of_product = data['num_of_product']
        order.instructions = data['instructions']
        order.updated_at = datetime.now()
        db.session.commit()
        return order.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
