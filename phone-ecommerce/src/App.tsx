import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/" exact>
          <ProductList />
        </Route>
        <Route path="*">
          <Default />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
