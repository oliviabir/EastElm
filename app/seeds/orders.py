from app.models import db, Order

def seed_orders():
    order_1 = Order(
        user_id='1', product_id='24', num_of_product='1', instructions= '', created_at= '2022-07-06', updated_at= '2022-07-06')
    order_2 = Order(
        user_id='1', product_id='17', num_of_product='1', instructions= '', created_at= '2022-07-06', updated_at= '2022-07-06')
    order_3 = Order(
        user_id='1', product_id='32', num_of_product='1', instructions= '', created_at= '2022-07-06', updated_at= '2022-07-06')

    db.session.add(order_1)
    db.session.add(order_2)
    db.session.add(order_3)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_orders():
    db.session.execute('TRUNCATE orders RESTART IDENTITY CASCADE;')
    db.session.commit()
