import React from 'react';
// import necessary file or components
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    state : state
  };
}


export class SearchBoxComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={search:""}
        this.onSearch = this.onSearch.bind(this);
        this.onchange = this.onchange.bind(this);
    }
    onchange(e){
        // Issue No:3d
        
        this.props.history.push('searching')
        
        this.setState({search:e.target.value})
    }
    
    onSearch(){
      //Issue No:3c
      this.props.history.push('searchPage/'+this.state.search)
    }
    
    render(){
    return(<div className={'searchBox'}>
        (<div className={'searchBox'}>
          <span style={{backgroundColor:"#ffffff"}}>
          {/* Issue No:3a */}
          <input type='text' placeholder='Search Product' onChange={this.onchange} value={this.state.search} className='inputBox'/>
          {/* Issue No:3b */}
          <button  onClick={this.onSearch}>Search</button>
            </span></div>
            
             </div> 
    )
  }
}

export default connect(mapStateToProps)(SearchBoxComponent)