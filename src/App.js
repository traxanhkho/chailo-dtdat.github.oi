import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Header } from "app/components/header";
import { Navbar } from "app/components/navbar";
import { Footer } from "app/components/footer";
import Products from "app/page/products/product";
import Home from "app/page/home";
import ProductDetail from "./app/page/productDetail/productDetail";
import { Contact } from "app/page/contact";
import ScrollToTop from "app/page/utils/ScrollToTop";
import NotFound from "app/page/notFound/NotFound";
import LoginPage from "app/page/login/login";
import Form from 'app/page/common/form' ; 
import "./styles/_reset.scss";
import "./styles/_variable.scss";
import "./styles/_common.scss"
import Admin from "./app/page/admin/index.jsx";
function App() {
  return (
    <React.Fragment>
      <ScrollToTop />
      {/* <Header />
      <Navbar /> */}
      <Switch>
        <Route path="/form" component={Form} />
        <Route path="/admin" component={Admin} />
        <Route path="/product/:_id" exact component={ProductDetail} />
        <Route path="/lien-he" component={Contact} />
        <Route path="/dang-nhap" component={LoginPage} />
        <Route path="/san-pham" component={Products} />
        <Route path="/" exact component={Home} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
