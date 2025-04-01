import CartItem from './CartItem';

import '../styles/cart.css';

export default function Cart(props) {
  const totalVal = Math.round((props.totalPrice + Number.EPSILON) * 100) / 100;

  if (totalVal > 0) {
    return (
      <div className="cart-body">
        <div className="cart-header">
          <h1 data-testid="totalValue" className="total">
            Total: ${totalVal}
          </h1>
          <button>Checkout {props.itemsCount} items</button>
        </div>
        <h2>Order summary</h2>

        {props.cart.map((item) => {
          return (
            <CartItem
              key={item.sku}
              sku={item.sku}
              image={item.image}
              quantity={item.quantity}
              price={item.price}
              remove={props.remove}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="cart-body" style={{ textAlign: 'center' }}>
        You don't have anything in your cart yet!
      </div>
    );
  }
}
