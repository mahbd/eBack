import Navbar from "./navbar/navbar";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "./css/style.css";
import HomePage from "./homepage/homepage";
import Tech from "./homepage/tech/tech"
import Footer from "./Footer/footer";
import Cart from "./cart/cart";
import { Route, Switch } from "react-router-dom";
import ShopItem from "./shop/shop";
import Login from "./login/login";
import Order from "./ordertakepage/order";
import FAQ from "./homepage/FAQ/FAQ";
import Register from "./login/register";
import Search from "./search/search";
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App(props) {
  return (
    <div>
      <ToastContainer />
      <Route path="/" component={Navbar} />
      <MessengerCustomerChat
        pageId="117189823741050"
        appId="429031561679245"
      />
      <Switch>
        <Route path="/faq" component={FAQ} />
        <Route path="/contactus" component={Tech} />
        <Route path="/cart" component={Cart} />
        <Route path="/item/:itemId" component={ShopItem} render={() => <ShopItem />} />
        <Route path="/login" component={Login} />
        <Route path="/search/:itemName" component={Search} render={() => <Search />} />
        <Route path="/register" component={Register} />
        <Route path="/checkout" component={Order} />
        <Route path="/" component={HomePage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
