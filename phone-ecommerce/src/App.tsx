import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <>
      <Navbar />
      <ProductList />
      <Details />
      <Cart />
      <Default />
    </>
  );
};

export default App;
