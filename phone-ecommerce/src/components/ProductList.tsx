import { useAppSelector } from '../hooks';
import Title from './Title';

const ProductList = () => {
  const products = useAppSelector(state => state.products);
  console.log(products);
  
  return (
    <div className="py-5">
      <div className="container">
        <Title name="our" title="products" />
        <div className="row"></div>
      </div>
    </div>
  );
};

export default ProductList;
