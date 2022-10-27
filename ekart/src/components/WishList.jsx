import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {addWishlist}  from '../actions/UserActions';
import {removefromWishlist}  from '../actions/UserActions';
import AjaxHelper from '../utilities/ajaxHelper';
import Product from './Product';

const mapStateToProps = (state) => {
    return {
        state:state.UserReducer,
        productarray:state.ProductReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    wishlisttocart : (data) =>{
    dispatch(addWishlist(data));
  },
  removewishlist : (user,pid,uid) =>{
    dispatch(removefromWishlist(user,pid,uid));
  }

    }
}

export class Wishlist extends Component {
  constructor(){
  super();
    this.addtocart=this.addtocart.bind(this);
    this.removewishlist=this.removewishlist.bind(this);
  }

  addtocart(e){
    var cart=this.props.state.cart;
    var data={};
    var Obj={};
    var p='';
    var quantity=0;
    this.props.productarray.Products.forEach((item)=>{
      if(e.target.value==item._id){
          var discount = 0;
          if(item.isDeal == 'true'){
              discount = item.deals.deal_discount
          }
          Obj = {       _id:item._id,
                        name:item.name,
                         description:item.description,
                         categories:item.category,
                         image_url:item.image_url,
                         price:Math.round(item.price*(100-discount)/100),
                         deals:item.deals,
                         quantity:1
                        };
        }
    })
    data={'userId':this.props.state._id,
          'prodObj':Obj,
          'quantity':quantity
          }
    this.props.wishlisttocart(data);
  }

  removewishlist(e){
    console.log("removewishlist")
    var wishlist=this.props.state.wishlist;
    var new_wish=[];
    wishlist.map((item)=>{if(item._id!=e.target.value){
      new_wish.push(item);
    }})
    this.props.removewishlist(new_wish,e.target.value,this.props.state._id);
  }

	render() {
    console.log("wishlist render")
    console.log(this.props)
    let history = this.props.history;
    var obj=this;
        //console.log(this.props.state);
    var products=[];
    this.props.state.wishlist.forEach(function(item){
      products.push(<div style={{width:'300px',float:'left'}} >

      {/*
      Issue no:11a
     */}
        <Product id={item._id} url={item.image_url} proname={item.name} deal={item.deals} history={history} />
        <button class="btn btn-success" value={item._id} onClick={this.addtocart}>Move To Cart</button>
        <button class="btn btn-danger" value={item._id} onClick={this.removewishlist}>Remove</button>
      </div>);
    })
		return(
			<div className="container">
				<div className="page-header">
				  <h1><small>Your favourites</small></h1>
				</div>
				{/* Issue no:11b */}
        {products}
			</div>
			);
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(Wishlist);
