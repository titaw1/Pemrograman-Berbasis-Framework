import React ,{ Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ac from "./img/air-conditioner.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Produk from "./components/Product";
import Keranjang from "./components/Keranjang";


class App extends Component {
  Navbar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <center>
        <div style={{ width: 450, height: 150 }} className="image">
          <img width src={ac} style={{width: 350, height: 150,}}></img>
        </div>
        </center>
        <a class="navbar-brand" href="#">Tita's AC Store</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/" class="nav-item nav-link">Home</Link>
            <Link to="/produk" class="nav-item nav-link">List Produk</Link>
            <Link to="/keranjang" class="nav-item nav-link ">Keranjang</Link>
            <Link to="/about" class="nav-item nav-link ">About</Link>
          </div>
        </div>
      </nav>
    );
  }

  render() {
    return (
      <Router>
        <div className="col-12">
          {this.Navbar()}
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/about"><About /></Route>
            <Route exact path="/produk"><Produk /></Route>
            <Route exact path="/keranjang"><Keranjang /></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;