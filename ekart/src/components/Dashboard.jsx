import React from 'react';
import Header from './Header';
import * as UserActions from '../actions/UserActions';
import * as ProductActions from '../actions/ProductActions';
import {connect} from 'react-redux';
import AjaxHelper from '../utilities/ajaxHelper';
import Product from './Product';
import Recommendations from './recomm.js'


const mapStateToProps = (state) => {
  return {
    state:state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMount : (data) => {
      dispatch(ProductActions.loadProducts(data));
    }
  }
}



export class Dashboard extends React.Component{
  constructor(props){
    super(props);
      
    
  }
  render(){
      let loggedIn = typeof sessionStorage == "object"?sessionStorage.getItem("userName")?sessionStorage.getItem('userName'):false:false;
let history = this.props.history;
  var dealProducts=[];
var normalProducts = {};
var prods = [];

  if(this.props.state.ProductReducer.Products)
  {
  if(this.props.state.ProductReducer.Products.length>0)
  {
    console.log("Dashboard")
    console.log(this.props.state)
    this.props.state.ProductReducer.Products.map(function(item,i){

        if(item.isDeal=='true'){
          dealProducts.push(<div key={i}><Product id={item._id} url={item.image_url} deal={item.isDeal} proname={item.name} history = {history}/></div>);
        }
        else{
            if(item.category in normalProducts){
                normalProducts[item.category].push(<div key={i}><Product id={item._id} deal={item.isDeal} url={item.image_url} proname={item.name} history = {history}/></div>)}
            else{
            normalProducts[item.category] = [<div key={i}><Product id={item._id} url={item.image_url} proname={item.name} history = {history}/></div>];
            }
        }
        
    });
    Object.keys(normalProducts).forEach((item)=>{
      console.log("products")
     
        prods.push(<div key={item._id} style={{margin:"30px"}}>
            <div className={'otherHead'} style={{color:"#1a75ff"}}><h4>{item}s</h4></div>
                {normalProducts[item]}
            <br/><br/><br/><br/></div>)
         console.log(prods)
         console.log(normalProducts[item])
    });
  }
  }

    return (
     
      <div>
      <div style={{marginLeft:"50px",marginTop:"50px"}}>
        <div className={'dealHead'}><h3>Today's deal </h3></div>
      {dealProducts}
        <div style={{height:'50px',clear:'both'}}></div>
        <div className={'otherHead'}><h3>Other Products</h3></div>
          <div id="products">
          {prods}
          <h1>{'test'}</h1>
        </div>
          
          <div style={{clear:'both'}}></div>
      </div>
            {loggedIn?<div><Recommendations history={this.props.history}/></div>:null}
            <div style={{clear:'both'}}></div>
      </div>
    )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
