import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import Title from './Title';
import Product from './Product';
import Modal from './Modal';
import { setProducts } from '../features/productsSlice';

const ProductList = () => {
  const products = useAppSelector(state => state.products);
  const { id, isModalOpen } = useAppSelector(state => state.modal);
  const product = products.find(el => el.id === id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!localStorage.getItem('products')) {
      const fetchProduct = () => {
        fetch('http://localhost:1800')
          .then(response => response.json())
          .then(data => {
            localStorage.setItem('products', JSON.stringify(data.products));
            dispatch(setProducts(data.products));
          });
      }
      fetchProduct();
    } else {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [dispatch, products]);

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
