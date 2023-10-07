import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';


const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cartItems.length === 0
          &&
          <h2 style={{ color: 'red' }}>Emphty!</h2>
        }
        {cartItems.map(cart => (
          <CartItem
            id={cart.id}
            key={cart.id}
            item={{ title: cart.title, quantity: cart.quantity, total: cart.totalPrice, price: cart.price }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
