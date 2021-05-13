import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Login } from "../src/Common/Login/Login";
import { Signup } from "./Common/Signup";
import Navbar from "../src/Common/NavBar/Navbar";
import { LoggedScreen } from "./Common/logged_screen";
import { AddProduct } from "./components/addProducts/add_product";
import AfterLoggedScreen from "./components/AfterLoggedScreen/AfterLoggedScreen";
import "./App.css";
import Footer from "./Common/Footer/Footer";
import ProductImportCsv from "./components/BatchSearchProducts/ProductImportCsv";
import ProductBatch from "./components/ProductsSearch/ProductBatch";
import Cookies from "js-cookie";
import ForPriceOnly from "./components/ForPriceOnly/ForPrice/ForPriceOnly";
import UserList from "./components/ForPriceOnly/UserList";
import ForPriceOnlyData from "./components/ForPriceOnly/ForPrice/ForPriceOnlyData";
import UserSearchHistory from "./components/ForPriceOnly/UserSearchHistory"
function App() {
  return (
    <div className="App">
      <Router baseName="/">
        <Switch>
          <Route exact path="/" component={Navbar}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/list" component={LoggedScreen}></Route>

          <Route
            render={() =>
              Cookies.get("PriceAuth") ? (
                <div>
                  <Route exact path="/add" component={AddProduct}></Route>
                  <Route
                    exact
                    path="/logged-into-product"
                    component={AfterLoggedScreen}
                  ></Route>
                  {/* <Route exact path="/admin" component={AddProduct}></Route>
      <AddProduct/> */}
                  <Route
                    exact
                    path="/batchimport-product"
                    component={ProductImportCsv}
                  ></Route>
                  <Route
                    exact
                    path="/products-batch-search"
                    component={ProductBatch}
                  ></Route>
                  <Route exact path ="/forprice-only" component={ForPriceOnly}></Route>
                  <Route exact path ="/userlist" component={UserList}></Route>
                  <Route exact path ="/forPrice-data" component={ForPriceOnlyData}></Route>
                  <Route exact path ="/userserach-history" component={UserSearchHistory}></Route>
                </div>
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
