import { useAppSelector } from '../hooks';
import { Link, useParams } from 'react-router-dom';
import { ButtonContainer } from './Button';
import { useAppDispatch } from '../hooks';
import { addToCart } from '../features/productsSlice';

interface ParamsType {
  id: string;
}

const Details = () => {
  const products = useAppSelector(state => state.products);
  const { id } = useParams<ParamsType>();
  const product = products.find(el => el.id === parseInt(id));
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(parseInt(id)));
  };

  if (product) {
    const { title, img, company, price, info, inCart } = product;

    return (
      <div className="container py-5">
        {/* title */}
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{title}</h1>
          </div>
        </div>
        {/* end title */}
        {/* product info */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img src={`../${img}`} alt={title} className="img-fluid" />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <h2>model: {title}</h2>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
              made by: <span className="text-uppercase">{company}</span>
            </h4>
            <h4 className="text-blue">
              <strong>
                price: <span>${price}</span>
              </strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              some info about the product:
            </p>
            <p className="text-muted lead">{info}</p>
            {/* buttons */}
            <div>
              <Link to="/">
                <ButtonContainer>back to products</ButtonContainer>
              </Link>
              <ButtonContainer
                disabled={inCart}
                onClick={handleAddToCart}
                isInCart={inCart}
              >
                {inCart ? 'in cart' : 'add to cart'}
              </ButtonContainer>
            </div>
            {/* end buttons */}
          </div>
        </div>
        {/* end product info */}
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>product not found</h1>
        </div>
      </div>
    </div>
  );
};

export default Details;
