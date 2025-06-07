import React, { useState } from 'react';
import '../styles/CartPage.css'; // CSS file for CartPage
import { useCart } from '../Context/CartContext';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const shippingCharges = 50;
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const finalAmount = totalAmount + shippingCharges - discount;

  const applyCoupon = () => {
    if (coupon === 'FREESHIP') {
      setDiscount(50); // Free shipping
    } else {
      setDiscount(0);
    }
  };

  return (
  <>  
  <Navbar />
  <div className="cart">
  
    <div className="cart-page">
      <h2 className="cart-title">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="cart-details">
                  <h4>{item.title}</h4>
                  <p>Price: ₹{item.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <p>Total: ₹{item.price * item.quantity}</p>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  ❌ Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Cart Summary</h3>

            <div className="summary-line">
              <span>Subtotal:</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="summary-line">
              <span>Shipping:</span>
              <span>₹{shippingCharges}</span>
            </div>

            <div className="coupon-input">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <small>Use code <strong>FREESHIP</strong> to remove shipping cost</small>
              <button className="checkout-btn" onClick={applyCoupon}>
                Apply Coupon
              </button>
            </div>

            {discount > 0 && (
              <div className="summary-line">
                <span>Discount:</span>
                <span>- ₹{discount}</span>
              </div>
            )}

            <div className="summary-total">
              <span>Total Payable:</span>
              <span>₹{finalAmount}</span>
            </div>

            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
</div>
    <Footer />
    </>
  );
};

export default CartPage;
