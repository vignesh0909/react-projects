import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import * as ProductActions from '../actions/ProductActions';
import { connect } from 'react-redux';
import AjaxHelper from '../utilities/ajaxHelper';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginUser from './LoginUser';
import Dashboard from './Dashboard';
import UserProfile from './UserProfile';
import ProductDes from './Productdes'
import Cart from './Cart.jsx';
import Signup from './signup';
import Recommendation from './recomm';
import Payment from './Payment.jsx';
import OrderHistory from './OrderHistory.jsx';
import SearchPage from './SearchPage.jsx';
import Searching from './searching.jsx';
import Wishlist from './WishList.jsx';
import Notify from './Notify';

const mapStateToProps = (state) => {
  console.log("mapStateToProps login")
  console.log(state)
  return {
    state: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: (data) => {
      console.log("onMount mapDispatchToProps")
      console.log(data)
      dispatch(ProductActions.loadProducts(data));
    }
  }
}


export class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("componentDidMount Main.jsx")
    this.props.onMount(AjaxHelper.loadProducts('http://10.82.181.77:8097/initialProducts'));
  }

  render() {
    return (<div>
      
      <div style={{ minHeight: "300px" }}>

        <BrowserRouter>
        <Header history={this.props.history} />
          <Route name="landingPage" exact path="/" component={Dashboard} />
          <Route name="landingPage" path="/landingPage" component={Dashboard} />
          <Route path="/login" component={LoginUser} />
          <Route component={Cart} path="/cart" />
	  <Route path="/recommendation" component={Recommendation} />
	  <Route path="/makePayment" component={Payment} />
          <Route path="/wishlist" component={Wishlist} />
          <Route component={UserProfile} path='/profile' />
          <Route component={SearchPage} path='/searchPage/:searchtext' />
          <Route component={OrderHistory} path='/historypage' />
          <Route component={Notify} path="/notify" />
          <Route component={ProductDes} path="/productdesc/:id" />
          <Route component={Signup} path='/signup' />
          <Route component={Searching} path='/searching' />
        </BrowserRouter>
      </div>
      <Footer />
    </div>);

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);