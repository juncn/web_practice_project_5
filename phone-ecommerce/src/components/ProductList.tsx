import { useAppSelector } from '../hooks';
import Title from './Title';
import Product from './Product';
import Modal from './Modal';

const ProductList = () => {
  const products = useAppSelector(state => state.products);
  const { id, isModalOpen } = useAppSelector(state => state.modal);
  const product = products.find(el => el.id === id);

  return (
    <div className="py-5">
      <div className="container">
        <Title name="our" title="products" />
        <div className="row">
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
      {product && isModalOpen ? <Modal product={product} /> : ''}
    </div>
  );
};

export default ProductList;
