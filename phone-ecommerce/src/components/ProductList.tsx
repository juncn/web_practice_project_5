import { useAppSelector } from '../hooks';
import Title from './Title';
import Product from './Product';

const ProductList = () => {
  const products = useAppSelector(state => state.products);

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
    </div>
  );
};

export default ProductList;
