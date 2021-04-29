import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">column one</div>
        <div className="col-6">
          <span>
            <i className="fas fa-home"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
