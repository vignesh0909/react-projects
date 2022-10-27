import React from 'react';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return{
        name:state.UserReducer.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onGetCard:()=>{
          return dispatch({
              type:"GET_CARD"
          })
    }
}
}

export class AddressRow extends React.Component{
  constructor(props){
    super(props);
    this.deleteAddress=this.deleteAddress.bind(this);
    this.saveAddress=this.saveAddress.bind(this);
    this.handleLine1Change=this.handleLine1Change.bind(this);
    this.handleLine2Change=this.handleLine2Change.bind(this);
    this.handleCityChange=this.handleCityChange.bind(this);
    this.handleStateChange=this.handleStateChange.bind(this);
 this.handleZipcodeChange=this.handleZipcodeChange.bind(this);
    this.handlePhoneNumberChange=this.handlePhoneNumberChange.bind(this);
    this.showForm=this.showForm.bind(this);
    this.state={
      name:this.props.name,
      line1:this.props.line1,
      line2:this.props.line2,
      city:this.props.city,
      state:this.props.state,
      zipcode:this.props.zipcode,
      phoneNumber: this.props.phoneNumber,
      enableSave: false
    }
  }
  handleLine1Change(e){
      this.setState({line1:e.target.value});
  }
  handleLine2Change(e){
    this.setState({line2:e.target.value});
  }
  handleCityChange(e){
    this.setState({city:e.target.value});
  }
  handleStateChange(e){
    this.setState({state:e.target.value});
  }
  handleZipcodeChange(e){
    this.setState({zipcode:e.target.value});
  }
  handlePhoneNumberChange(e){
    this.setState({phoneNumber:e.target.value});
  }
  showForm(){
    this.setState({enableSave:!this.state.enableSave});
    this.props.onGetCard();
  }
  deleteAddress(){
    const oldAddress={
      name: this.props.name,
      line1:this.props.line1,
      line2:this.props.line2,
      city:this.props.city,
      state:this.props.state,
      zipcode:this.props.zipcode,
      phoneNumber: this.props.phoneNumber
    }
    var address={};
    this.props.onModifyAddress(address, oldAddress,"delete");
  }
    saveAddress(event){
      event.preventDefault();
    const oldAddress={
      name: this.props.name,
      line1:this.props.line1,
      line2:this.props.line2,
      city:this.props.city,
      state:this.props.state,
      zipcode:this.props.zipcode,
      phoneNumber: this.props.phoneNumber
    }
   /* const address={
      name: this.props.name,
      line1:this.refs.line1.value,
      line2:this.refs.line2.value,
      city:this.refs.city.value,
      state:this.refs.state.value,
      zipcode:this.refs.zipcode.value,
      phoneNumber: this.refs.phoneNumber.value
    }*/
    const address={
      name: this.props.name,
      line1:this.state.line1,
      line2:this.state.line2,
      city:this.state.city,
      state:this.state.state,
      zipcode:this.state.zipcode,
      phoneNumber: this.state.phoneNumber
    }
  this.setState({enableSave:!this.state.enableSave});
  this.props.onModifyAddress(address, oldAddress,"edit")
  }
  render(){
    console.log("render AddressRow")
    console.log(this.state.enableSave)
    var states=[];
    this.props.statesOfIndia.map((state,index)=>{
        states.push(<option key={state} defaultValue={state}>{state}</option>);
    });
    console.log(this.props)
    return (
     
        <div>
         <h1>{console.log(this.state.enableSave)}</h1>
        {this.state.enableSave?
        <form onSubmit={this.saveAddress} name={this.props.name}>
          <table style={{marginTop:"-25px"}}>
            <tbody className={'fieldShortner'} >

           
              <tr>
              <td>Line1:</td>
              <td>
              <input type="text" onChange={this.handleLine1Change} value={this.state.line1} ref = "line1" />
               {/* issue no:17a*/}
              </td>
              </tr>
              <tr>
              <td>Line2:</td>
              <td>
                 {/* issue no:17b*/}
        <input type="text" onChange={this.handleLine2Change} value={this.state.line2} ref = "line2" />
                 
                   </td>
              </tr>
              <tr>
              <td>City:</td>
                 
                <td>
                   {/* issue no:17c*/}
           <input type="text" onChange={this.handleCityChange} value={this.state.city} ref = "city" />
                   
                </td>
              </tr>
              <tr>
                <td>State: </td>
                <td> 
                   {/* issue no:17d*/}
                   <select ref = "state" onChange={this.handleStateChange} style={{width:"120px", border:"1px solid #cccccc", borderRadius:"3px", height:"24px"}}>
          {
            states}
        </select>
       </td>
              </tr>
              <tr>
                <td>Zipcode: </td>
                <td> 
                   {/* issue no:17e*/}
           <input type="text" value={this.state.zipcode} onChange={this.handleZipcodeChange} ref = "zipcode" />
                  
                </td>
              </tr>
              <tr>
                <td>PhoneNumber: </td>
                <td> {/* issue no:17f*/}
                <input type="text" value={this.state.phoneNumber} ref = "phoneNumber" onChange={this.handlePhoneNumberChange} pattern="[0-9]{10}"/>

                </td>
              </tr>
              <tr>
                <td> {/* issue no:17g*/}
                <button type="submit" className="modButton" style={{marginTop:"10px"}}>Submit</button>
                </td>
                <td> {/* issue no:17h*/}
                <button className="modButton" style={{marginTop:"10px",marginLeft:"30px"}} onClick={this.showForm}></button>
                </td>
              </tr>
              </tbody>

            </table>
           
        </form>:<table>
            <tbody>
                <tr>
                    <td><b>{
                    //  issue no:17i
                    this.props.name
                    }</b></td>
                </tr>
            <tr>
                <td>{
                  this.props.line1
                //  issue no:17j 
                }, {
                  this.props.line2
                //  issue no:17k
                }</td>
            </tr>
            <tr>
                <td>{
                  this.props.city
                  // issue no:17l
                }</td>
            </tr>
                <tr>
                <td>{
                  this.props.state
                  // issue no:17m
                }</td>
            </tr>
                <tr>
                <td>{
                  this.props.zipcode
                  // issue no:17n
                }</td>
            </tr>
            <tr>
                
                <td>Phone: {
                  this.props.phoneNumber
                  //issue no:17o
                }</td>
            </tr>
            
            
            
            <tr style={{marginTop:"20px"}}><td>
              {/*issue no:17p */}
              <button className="modButton" onClick={this.showForm}>Modify</button>
              
              </td>
              <td>
                {/* issue no:17q */}
              <button className="modButton" onClick={this.deleteAddress}>Delete</button>

                 </td></tr>
            </tbody>
            </table>}
        </div>);
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddressRow);
