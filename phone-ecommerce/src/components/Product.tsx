import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Product as ProductType } from '../type';
import { useAppDispatch } from '../hooks';
import { addToCart } from '../productsSlice';

interface Props {
  product: ProductType;
}

const Product = ({ product }: Props) => {
  const { id, title, img, price, inCart } = product;
  const dispatch = useAppDispatch();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(addToCart(id));
  };

  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div
          className="img-container p-5"
          onClick={() => console.log('product clicked')}
        >
          <Link to="/details">
            <img src={img} alt="product" className="card-img-top" />
          </Link>
          <button
            className="cart-btn"
            disabled={inCart}
            onClick={e => handleAddToCart(e)}
          >
            {inCart ? (
              <p
                className={`text-capitalize mb-0 ${
                  inCart ? 'btn-disabled' : ''
                }`}
              >
                in cart
              </p>
            ) : (
              <i className="fas fa-cart-plus" />
            )}
          </button>
        </div>
        {/* card footer */}
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.3s linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.3s linear;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
    }

    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .card-img-top {
    transition: all 0.3s linear;
  }

  .img-container {
    position: relative;
    overflow: hidden;

    &:hover .card-img-top {
      transform: scale(1.2);
    }

    &:hover .cart-btn {
      transform: translate(0, 0);
    }
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.3s linear;

    &:hover {
      color: var(--mainBlue);
      cursor: pointer;
    }
  }

  .btn-disabled {
    pointer-events: none;
  }
`;

export default Product;
