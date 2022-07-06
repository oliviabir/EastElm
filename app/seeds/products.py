from app.models import db, Product

def seed_products():

    product_1 = Product(
        name='The Blair', description='Vintage swivel chair', category='chairs', price='1035', img_one='https://images.unsplash.com/photo-1580480055273-228ff5388ef8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyODI5Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_2 = Product(
        name='The Brunetti', description='Modern tall back sofa', category='sofas', price='12550', img_one='https://images.unsplash.com/photo-1540638349517-3abd5afc5847?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyODM0NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_3 = Product(
        name='The Aleida', description='Wood framed green upholstered chair', category='chairs', price='2070', img_one='https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNDk5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_4 = Product(
        name='The Chaudhari', description='Modern velvet sofa', category='sofas', price='1199', img_one='https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNDkzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_5 = Product(
        name='The Kasabian', description='Clean line black sofa', category='sofas', price='4799', img_one='https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNTAzOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_6 = Product(
        name='The Henson', description='Vintage wooden stool', category='chairs', price='3599', img_one='https://images.unsplash.com/photo-1552324190-9e86fa095c4a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNTEzNA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_7 = Product(
        name='The Davina', description='Grey upholstered chair', category='chairs', price='4926', img_one='https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNTE3Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_8 = Product(
        name='The Cecilia', description='Classic brown leather sofa', category='sofas', price='3789', img_one='https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNTI1Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_9 = Product(
        name='The Edmundo', description='Minimalist dining chair', category='chairs', price='3789', img_one='https://images.unsplash.com/photo-1596079890687-58c51d24889a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNTM4MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_10 = Product(
        name='The Waverly', description='Architectural wooden nightstand', category='tables', price='6105', img_one='https://images.unsplash.com/photo-1611486212557-88be5ff6f941?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNTQzNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_11 = Product(
        name='The Elva', description='Wooden nesting tables', category='tables', price='3190', img_one='https://images.unsplash.com/photo-1611486212355-d276af4581c0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNTQ5NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_12 = Product(
        name='The Haimo', description='Midcentury tan leather sofa', category='sofas', price='4945', img_one='https://images.unsplash.com/photo-1549187774-b4e9b0445b41?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNTU0NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_13 = Product(
        name='The Glen', description='Cozy white sectional', category='sofas', price='3599', img_one='https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNTgyNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_14 = Product(
        name='The Clarette', description='Brown leather stool', category='chairs', price='1599', img_one='https://images.unsplash.com/photo-1598300056393-4aac492f4344?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNTk2Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_15 = Product(
        name='The Hippolyta', description='Sculptural wooden chair', category='chairs', price='5500', img_one='https://images.unsplash.com/photo-1597072689227-8882273e8f6a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjAxNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_16 = Product(
        name='The Valencia', description='Tan leather sofa', category='sofas', price='5700', img_one='https://images.unsplash.com/photo-1597425842320-de0c26b33327?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjE0Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_17 = Product(
        name='The Demeter', description='White leather fainting sofa', category='sofas', price='11900', img_one='https://images.unsplash.com/photo-1609103131880-c541ea179cd2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjIwMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_18 = Product(
        name='The Renard', description='Sheepskin chair', category='chairs', price='1660', img_one='https://images.unsplash.com/photo-1429709535771-15665442d6b1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjI4OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_19 = Product(
        name='The Sarto', description='White entry console', category='tables', price='5199', img_one='https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjMzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_20 = Product(
        name='The Hudson', description='Black sculptural chairs', category='chairs', price='2999', img_one='https://images.unsplash.com/photo-1591964702073-e654131f18df?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjM5Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_21 = Product(
        name='The Muriel', description='Black kitchen chair', category='chairs', price='2799', img_one='https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjUwNA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_22 = Product(
        name='The Serra', description='Paddle leg wood stool', category='chairs', price='2700', img_one='https://images.unsplash.com/photo-1540809799-5da9372c3f64?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjc0NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_23 = Product(
        name='The Nika', description='Handcrafted wooden chair', category='chairs', price='2099', img_one='https://images.unsplash.com/photo-1572297794744-a19043e308f8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=580&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjkxMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_24 = Product(
        name='The Aditya', description='70\'s metal and leather chair', category='chairs', price='3599', img_one='https://images.unsplash.com/photo-1569597970494-29fe318c2595?&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjk5MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_25 = Product(
        name='The Raniya', description='Midcentury plush chair', category='chairs', price='4599', img_one='https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNzA3MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_26 = Product(
        name='The Mihaela', description='Classic vanity chair', category='chairs', price='1200', img_one='https://images.unsplash.com/photo-1619596658767-f3bbb82b0dee?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNzEyMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_27 = Product(
        name='The Darcy', description='Handcrafted driftwood nightstand', category='tables', price='3000', img_one='https://images.unsplash.com/photo-1532372320572-cda25653a26d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNzE2NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_28 = Product(
        name='The Mathias', description='60\'s kitchen chair', category='chairs', price='3500', img_one='https://images.unsplash.com/photo-1611464908623-07f19927264e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNzQ0Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_29 = Product(
        name='The Dolan', description='Leather pedestal chair', category='chairs', price='9500', img_one='https://images.unsplash.com/photo-1572297794908-f2ee5a2930d6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=520&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNzY2OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_30 = Product(
        name='The Simas', description='Rustic coffee table', category='tables', price='7599', img_one='https://images.unsplash.com/photo-1619911013257-8f1fbc919fc9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNzkyOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_31 = Product(
        name='The Whelan', description='Metal top side table', category='tables', price='4800', img_one='https://images.unsplash.com/photo-1585167095899-a33318ea90b0?&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNzk3Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')
    product_32 = Product(
        name='The Kalin', description='Round coffee table', category='tables', price='4900', img_one='https://images.unsplash.com/photo-1620812067822-899be8a6a9a7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyODA1Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480', created_at= '2022-07-06', updated_at= '2022-07-06')

    db.session.add(product_1)
    db.session.add(product_2)
    db.session.add(product_3)
    db.session.add(product_4)
    db.session.add(product_5)
    db.session.add(product_6)
    db.session.add(product_7)
    db.session.add(product_8)
    db.session.add(product_9)
    db.session.add(product_10)
    db.session.add(product_11)
    db.session.add(product_12)
    db.session.add(product_13)
    db.session.add(product_14)
    db.session.add(product_15)
    db.session.add(product_16)
    db.session.add(product_17)
    db.session.add(product_18)
    db.session.add(product_19)
    db.session.add(product_20)
    db.session.add(product_21)
    db.session.add(product_22)
    db.session.add(product_23)
    db.session.add(product_24)
    db.session.add(product_25)
    db.session.add(product_26)
    db.session.add(product_27)
    db.session.add(product_28)
    db.session.add(product_29)
    db.session.add(product_30)
    db.session.add(product_31)
    db.session.add(product_32)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
