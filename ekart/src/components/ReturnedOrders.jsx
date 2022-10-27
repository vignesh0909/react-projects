import React from 'react';
import {connect} from 'react-redux';
  
const mapStateToProps = (state) => {
  return {
    orderHistory: state.UserReducer.order_history
  };
}

class ReturnedOrders extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    var rows=[];
    if(this.props.orderHistory)
    this.props.orderHistory.map((order,index) => {
      if(order.order_status=="returned"){
        let prodLength = order.product_details.length;
        let totalAmount = 0;
        let prodNames = [];
        order.product_details.forEach(function(eachProd){
          totalAmount += eachProd.quantity * eachProd.unit_price;
          prodNames.push(eachProd.name);
        })
        rows.push(
          // push OrderId,Order Date,Order Status,Card Type,Products from order object as rows 
        );
      }
    });
    console.log(this.props.orderHistory);
    return(
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-sm-8"}>
          <table className={"table table-striped"}>
            <thead>
              <tr><th>Order Id</th>
              <th>Order Date</th>
              <th>Order Status</th>
              <th>Card Type</th>
              <th>Products</th></tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps)(ReturnedOrders);
