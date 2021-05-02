import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { clearCart } from '../../features/productsSlice';

const CartTotal = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products);
  const itemInCart = products.filter(product => product.inCart);
  const subTotal = itemInCart.reduce((acc, cur) => {
    return acc + cur.total;
  }, 0);
  const tax = parseFloat((subTotal * 0.1).toFixed(2));
  const total = parseFloat((subTotal + tax).toFixed(2));

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => dispatch(clearCart())}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal: </span>
              <strong>$ {subTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax: </span>
              <strong>$ {tax}</strong>
            </h5>
            <h5>
              <span className="text-title">total: </span>
              <strong>$ {total}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
