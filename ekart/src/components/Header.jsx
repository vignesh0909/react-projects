import React from 'react';
import { Link } from 'react-router-dom';
import SearchBoxComponent from './Search.jsx'
import {connect} from 'react-redux';
import {emptyState} from '../actions/UserActions.js';
import { FormGroup, Glyphicon,FormControl, Button ,Badge} from 'react-bootstrap';
var EventEmitter = require('eventemitter2').EventEmitter2
//var events = require('events');
//var eventEmitter = new events.EventEmitter();
window.emitter = new EventEmitter;

let numItems = 0;

const mapStateToProps = (state) => {
    console.log("Header mapStateToProps")
    console.log(state)
  return {
    UserReducer:state.UserReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
        emptystate : () => {
            dispatch(emptyState());
        }
    }
}

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numIt:0
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.listner1 = this.listner1.bind(this);
        window.emitter.on('connection', this.listner1);
    }
    
    handleLogout(){
        
        sessionStorage.clear();
        this.props.emptystate();
        this.props.history.push('/landingPage');
    }
    
    listner1() {
        console.log('in here');
        if(localStorage.getItem("cart")){
       let ar =JSON.parse(localStorage.getItem("cart"));
        this.setState({numIt:ar.length});
        }
        else{
            this.setState({numIt:0});
        }
    }
    
    componentDidMount(){
        console.log('hihihiih');
    }
    
    componentWillUnmount(){
        console.log("componentWillUnmount")
        window.emitter.off('connection', this.listner1);
    }
    
    render(){
        console.log("render")
        console.log(this.props)
        numItems = this.state.numIt;
        let loggedIn = typeof sessionStorage == "object"?sessionStorage.getItem("userName")?sessionStorage.getItem('userName'):false:false;
        var rows = [];
        var notif = 0;
       if(Object.keys(this.props.UserReducer).length > 0){  
           console.log("inside header if")
           console.log(this.props.UserReducer)
           this.props.UserReducer.notification.forEach((x) =>  {
        if(x.notification_seen==false){
               notif += 1
           }});
         }
         
        if(loggedIn){
            console.log("inside loggedIn if")
            console.log(loggedIn)
            console.log(this.props.UserReducer);
            setTimeout(() => {
                numItems = this.props.UserReducer.cart.length;
            console.log(numItems);
            }, 5000);
            
             rows.push(
             
             <span><Link to="/profile" style={{ textDecoration: 'none' }}>
             <li><span><Glyphicon glyph="user" /></span> Profile</li></Link>

         {/* Issue no:7a */}
                <Link to ="/historypage" style={{ textDecoration: 'none' }}>
                    <li><span><Glyphicon glyph="book" /></span>My Orders</li>
                </Link>
                <Link to ="/wishlist" style={{ textDecoration: 'none' }}>
                    <li><span><Glyphicon glyph="heart" /></span>Wishlist</li>
                </Link>
                <Link to ="/notify" style={{ textDecoration: 'none' }}>
                    <li><span><Glyphicon glyph="tags" /></span>Notification</li>
                </Link>
                <button onClick={this.handleLogout}>
                    <li><span><Glyphicon glyph="log-out" /></span>Logout</li>
                </button>
             </span>)
        }
        else{
            console.log("inside loggedIn else")
            console.log(loggedIn)

            if(typeof(Storage) !== "undefined"){
            if(localStorage.getItem("cart")){
                let cart=JSON.parse(localStorage.getItem("cart"));
                numItems=cart.length;
                }
            }
            
            rows.push(<span>
                {/* Issue no:7b */}
                <Link to ="/login" style={{ textDecoration: 'none' }}>
                    <li><span><Glyphicon glyph="log-in" /></span>Login</li>
                </Link>
                <Link to ="/signup" style={{ textDecoration: 'none' }}>
                    <li><span><Glyphicon glyph="user" /></span>Signup</li>
                </Link>
            </span>)
        }
        
        
        return(
        <div>
        <nav className={"navbar1"}>
            <div><span className={'navbar1header'}><img src='./images/logo.png' height="46px"/></span><span><SearchBoxComponent history={this.props.history}/></span></div>
            <div>
            <ul className="nav1ul">
                <Link to='/landingPage' > <li ><span><Glyphicon glyph="home" /></span> Home</li></Link>
              
               
              {/* Issue no:7c */
                rows}
                <Link to="/cart" className={numItems==0?'disabled-link':''}style={{ textDecoration: 'none' }}><li><span><Glyphicon glyph="shopping-cart" /></span> Cart <Badge>{numItems} </Badge></li></Link>
                
                
            </ul>
            </div>
        </nav>
        </div>
        );
        
    }
} 
export default connect(mapStateToProps,mapDispatchToProps)(Header);