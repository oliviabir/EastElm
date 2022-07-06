from .db import db

class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    num_of_product = db.Column(db.Integer)
    instructions = db.Column(db.String(200))
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)

    users = db.relationship("User", back_populates="orders")
    products = db.relationship("Product", back_populates="orders")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'num_of_product': self.num_of_product,
            'instructions': self.instructions,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
