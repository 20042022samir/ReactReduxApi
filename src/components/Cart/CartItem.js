import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const minusBtnHandler = () => {
    dispatch(cartActions.removeFromCart(props.id))
  }

  const plusBtnHandler = () => {
    dispatch(cartActions.addItemToCart({
      title,
      quantity,
      price,
      id:props.id
    }))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minusBtnHandler}>-</button>
          <button onClick={plusBtnHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
