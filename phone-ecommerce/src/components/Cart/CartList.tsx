import { useAppSelector } from '../../hooks';
import CartItem from './CartItem';

const CartList = () => {
  const products = useAppSelector(state => state.products);
  const itemInCart = products.filter(product => product.inCart);

  return (
    <div className="container-fluid">
      {itemInCart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
