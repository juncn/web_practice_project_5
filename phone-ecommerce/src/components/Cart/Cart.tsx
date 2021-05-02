import { useAppSelector } from '../../hooks';
import Title from '../Title';
import CartColumn from './CartColumn';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotal from './CartTotal';

const Cart = () => {
  const products = useAppSelector(state => state.products);
  const itemsInCart = products.filter(item => item.inCart);

  return (
    <section>
      {itemsInCart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <Title name="your" title="cart" />
          <CartColumn />
          <CartList />
          <CartTotal />
        </>
      )}
    </section>
  );
};

export default Cart;
