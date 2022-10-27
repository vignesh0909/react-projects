import {connect} from 'react-redux';
import React from 'react';
import Product from './Product';
import ajaxHelper from '../utilities/ajaxHelper';

export default class SearchPage extends React.Component {
  constructor(props){
    super(props);
    this.state={products:[]};
  }
    
    componentDidMount(){
        console.log("search page componentWillMount", this.props.match.params.searchtext )
       let data=ajaxHelper.getProductNames('http://10.82.181.77:8097/getProductByNames?searchText='+this.props.match.params.searchtext); 
       console.table(data);
       this.setState({products:data})
    }
    
    
    render(){
        let history = this.props.history;
        var rows = []
        if(this.state.products.length>0){
            rows = []
            this.state.products.forEach((item,i)=>{
                rows.push(<div key={i}><Product id={item._id} url={item.image_url} proname={item.name} history= {history}/></div>)
            })
           
        }
        else{
              //Issue no:4a
              rows.push(<div>"No Product found"</div>)
            
        }
        
        return(<div style={{padding:"20px",marginTop:"50px"}}>
                <div className={'resultFound'}>{this.state.products.length} Results Found</div>
                <div style={{borderBottom:'1px solid #cccccc',height:'20px',width:"100%"}}></div>
           
            {/* Issue no:4b */}
            {rows.map((item)=>item
            
            )}
            
            
            </div>);
    }
}