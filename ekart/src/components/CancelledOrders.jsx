import React from 'react';
import {connect} from 'react-redux';
  
const mapStateToProps = (state) => {
  return {
    orderHistory: state.UserReducer.order_history
  };
}

class CancelledOrders extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    var rows=[];
    if(this.props.orderHistory)
    this.props.orderHistory.map((order,index) => {
      if(order.order_status=="cancelled"){
        let prodLength = order.product_details.length;
        let totalAmount = 0;
        let prodNames = [];
        order.product_details.forEach(function(eachProd){
          totalAmount += eachProd.quantity * eachProd.unit_price;
          prodNames.push(eachProd.name);
        })
        rows.push(
          <tr key={index}>
            <td>{order.order_id}</td>
            <td>{order.order_date}</td>
            <td>{order.order_status}</td>
            <td>{order.payment_detail.card_type}</td>
            <td>{prodNames.join()}</td>
          </tr>
        );
      }
    });
    console.log(this.props.orderHistory);
    return(
      <div className={"container"}>
      {/*
    issue no:5a
      
      */}
        <div class={"row"}>
          <div class={"col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-3"}>
            <div class={"table-responsive"}>
              <table class={"table"}>
                <thead>
                  <tr>
                    <th>Order Id</th>
                    <th>Order date</th>
                    <th>Order status</th>
                    <th>Card Type</th>
                    <th>Products</th>
                  </tr>
                </thead>
                <tbody>
                  {rows}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}
export default connect(mapStateToProps, null)(CancelledOrders);
