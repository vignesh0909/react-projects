import React from 'react';
import {connect} from 'react-redux';

export default class Product extends React.Component{
  constructor(props){
    super(props);
    this.handleid = this.handleid.bind(this);
  }
    handleid(){
    //  Issue no:6b  
    let url = '/productdesc/'+this.props.id 
    this.props.history.replace(url)
    }
  render(){
    console.log("Product render")
    console.log(this.props)
    return(
      <div className={'containerBig'}>
        {this.props.deal=='true'?<img className={'dis'} src='./images/discount.png' height="60px" width="60px" />:null}
        <div className={'container1'}>
        <center><img src={this.props.url} alt="..." className={'imgBox'} /></center>
        <div onClick={this.handleid} className={"caption"}>
          Know more
        </div>
        </div>
        <div className={'prodName'}>
        {/* Issue no:6a */}
        {this.props.proname}
        </div>
      </div>
  )}
}
