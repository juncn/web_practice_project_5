import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Product } from '../type';
import { ButtonContainer } from './Button';
import { closeModal } from '../features/modalSlice';
import { useAppDispatch } from '../hooks';

interface Props {
  product: Product;
}

const Modal = ({ product }: Props) => {
  const { img, title, price, inCart } = product;
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <ModalContainer>
      <div className="container">
        <div className="row">
          <div
            id="modal"
            className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
          >
            <h5>item add to the cart</h5>
            <img src={img} alt={title} className="img-fluid" />
            <h5>{title}</h5>
            <h5 className="text-muted">price: ${price}</h5>
            <Link to="/">
              <ButtonContainer onClick={handleCloseModal}>
                continue shopping
              </ButtonContainer>
            </Link>
            <Link to="/cart">
              <ButtonContainer isInCart={inCart} onClick={handleCloseModal}>
                go to cart
              </ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: var(--mainWhite);
  }
`;

export default Modal;
