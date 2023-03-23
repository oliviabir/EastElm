from app.models import db, Review

def seed_reviews():
    review_1 = Review(
        user_id='1', product_id='2', rating='5', body='The sofa is great, soft and very comfy!!', created_at= '2022-07-06', updated_at= '2022-07-06')
    review_2 = Review(
        user_id='2', product_id='2', rating='5', body='Expensive but worth every penny.', created_at= '2022-07-06', updated_at= '2022-07-06')
    review_3 = Review(
        user_id='3', product_id='2', rating='4', body='This is still the nicest sofa I have ever sat on, and the proportions of the design are really wonderful.', created_at= '2022-07-06', updated_at= '2022-07-06')
    review_4 = Review(
        user_id='1', product_id='3', rating='4', body='Have had the chair for a little over two weeks and love it.', created_at= '2022-07-06', updated_at= '2022-07-06')
    review_5 = Review(
        user_id='1', product_id='1', rating='2', body='Product is nice but it\'s overall appearance and design doesn\'t justify the price tag.', created_at= '2022-07-06', updated_at= '2022-07-06')
    review_6 = Review(
        user_id='2', product_id='4', rating='4', body='It is our first sofa purchase from East Elm and we absolutely love it! Waited for 12 weeks at first and had to exchange it due to a noticeable dent on the left side.', created_at= '2022-07-06', updated_at= '2022-07-06')
    review_7 = Review(
        user_id='3', product_id='5', rating='5', body='We love the design of this sofa, it\’s beautiful from every angle. However our one disappointment is the sofa cushion; the stuffing does not uphold structure and we are seeing indentations after a week.', created_at= '2022-07-06', updated_at= '2022-07-06')
    review_8 = Review(
        user_id='1', product_id='6', rating='3', body='Great stool, very sturdy with clean lines.', created_at= '2022-07-06', updated_at= '2022-07-06')
    review_9 = Review(
        user_id='1', product_id='7', rating='4', body='We got our chair yesterday and we\'re obsessed! It\'s so beautiful, comfortable and iconic.', created_at= '2022-07-06', updated_at= '2022-07-06')
    review_10 = Review(
        user_id='2', product_id='8', rating='5', body='The design of this sofa is lovely. It\’s very comfortable and looks wonderful in our space, but the upholstery leaves something to be desired.', created_at= '2022-07-06', updated_at= '2022-07-06')
    review_11 = Review(
        user_id='3', product_id='7', rating='4', body='Beautiful, well-made chairs. And they are nice and light. Would recommend to anyone.', created_at= '2022-07-06', updated_at= '2022-07-06')
    review_12 = Review(
        user_id='1', product_id='12', rating='1', body='Got the tan leather one and it\’s so beautiful but so slippery.. I feel like I am sliding down when I sit on it.', created_at= '2022-07-06', updated_at= '2022-07-06')
    review_13 = Review(
        user_id='1', product_id='15', rating='4', body='Elevates space and looks elegant but not boring. If you want something stylish without sacrificing comfort then its the chair for you!', created_at= '2022-07-06', updated_at= '2022-07-06')
    review_14 = Review(
        user_id='2', product_id='12', rating='2', body='The sofa looks incredible however, I find it to be way too soft. The lack of support is very uncomfortable and the fabric is always wrinkled after even a brief sit, making it look old and broken.', created_at= '2022-07-06', updated_at= '2022-07-06')
    review_15 = Review(
        user_id='3', product_id='17', rating='5', body='It is one of the most comfortable nap sofa we have tried. It is soft but can still support your back.', created_at= '2022-07-06', updated_at= '2022-07-06')
    review_16 = Review(
        user_id='1', product_id='21', rating='4', body='Gorgeous chair! One year later and they look and feel brand new. Amazing design and construction.', created_at= '2022-07-06', updated_at= '2022-07-06')
    review_17 = Review(
        user_id='2', product_id='23', rating='4', body='Designer vibe & feel. Comfortable.', created_at= '2022-07-06', updated_at= '2022-07-06')
    review_18 = Review(
        user_id='1', product_id='25', rating='5', body='Finally got my dream chair. It\’s insanely expensive but it\’s a work of art that will last a lifetime. It\’s everything I hoped it would be. Gorgeous but also comfortable. A lot of modern form is gorgeous but not comfortable.', created_at= '2022-07-06', updated_at= '2022-07-06')
    review_19 = Review(
        user_id='2', product_id='27', rating='4', body='Wonderful to look at and beautiful anywhere.', created_at= '2022-07-06', updated_at= '2022-07-06')
    review_20 = Review(
        user_id='3', product_id='31', rating='4', body='Great piece of furniture for small space', created_at= '2022-07-06', updated_at= '2022-07-06')

    db.session.add(review_1)
    db.session.add(review_2)
    db.session.add(review_3)
    db.session.add(review_4)
    db.session.add(review_5)
    db.session.add(review_6)
    db.session.add(review_7)
    db.session.add(review_8)
    db.session.add(review_9)
    db.session.add(review_10)
    db.session.add(review_11)
    db.session.add(review_12)
    db.session.add(review_13)
    db.session.add(review_14)
    db.session.add(review_15)
    db.session.add(review_16)
    db.session.add(review_17)
    db.session.add(review_18)
    db.session.add(review_19)
    db.session.add(review_20)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
