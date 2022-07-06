from .db import db

class Product(db.Model):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    category = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    img_one = db.Column(db.String(2000))
    img_two = db.Column(db.String(2000))
    img_three = db.Column(db.String(2000))
    img_four = db.Column(db.String(2000))
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)

    reviews = db.relationship("Review", back_populates="products")
    orders = db.relationship("Order", back_populates="products")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'category': self.category,
            'price': self.price,
            'img_one': self.img_one,
            'img_two': self.img_two,
            'img_three': self.img_three,
            'img_four': self.img_four,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
