import React from 'react';
import { connect } from 'react-redux';
import Rater from './Rater';

export default class FeedBack extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        console.log(this.props)
        return(<div style={{marginLeft:'5px',marginTop:'30px',borderTop:"1px solid #d9d9d9",paddingTop:"10px"}}>
                <Rater value={this.props.rating}/>
                <span style={{marginLeft:'20px'}}>
              {/* Issue no:9a */}
    {this.props.rating}/5</span><br/>
                <div>By <b>
                {this.props.username}
               {/* Issue no:9b */}
                </b></div>
                <div style={{marginTop:'20px'}}>
                    {this.props.comment}
                {/* Issue no:9c */}
                </div>
            
            </div>);
    }
}