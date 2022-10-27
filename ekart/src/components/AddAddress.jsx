import React from 'react';

class AddAddress extends React.Component{
  constructor(props){
    super(props);
    this.addAddress=this.addAddress.bind(this);   
/*    this.handleLine1Change=this.handleLine1Change.bind(this);
    this.handleLine2Change=this.handleLine2Change.bind(this);
    this.handleCityChange=this.handleCityChange.bind(this);
    this.handleStateChange=this.handleStateChange.bind(this);
    this.handleZipcodeChange=this.handleZipcodeChange.bind(this);
    this.handlePhoneNumberChange=this.handlePhoneNumberChange.bind(this);*/
    this.toggleAddress=this.toggleAddress.bind(this);
    this.state={
/*      line1:this.props.line1,
      line2:this.props.line2,
      city:this.props.city,
      state:this.props.state,
      zipcode:this.props.zipcode,
      phoneNumber: this.props.phoneNumber,*/
      enableSave: false
    }
  }
  addAddress(event){
    event.preventDefault();
    const address={
      line1:this.refs.line1.value,
      line2:this.refs.line2.value,
      city:this.refs.city.value,
      state:this.refs.state.value,
      zipcode:this.refs.zipcode.value,
      phoneNumber: this.refs.phoneNumber.value
    };
    this.props.onAddAddress(address);
  }
  toggleAddress(){
    this.props.onToggleAddress();
  }
  
  render(){
    var states=[];
    this.props.statesOfIndia.map((state,index)=>{
        states.push(<option key={state} defaultValue={state}>{state}</option>);
    })
    return (
        

        <form onSubmit={this.addAddress}>
        <table ><tbody className={'fieldShortner'} >
       
        <tr><td>Line1:</td><td>
          {/*Issue no:16a*/}
          <input type="text" value={this.props.line1} ref = "line1" />
      
        
      </td></tr>
        <tr><td>Line2:</td>
        <td>
        {/* Issue no:16b*/}
        <input type="text" value={this.props.line2} ref = "line2" />
        </td>
        </tr>
        <tr><td>City:</td><td>
           {/* Issue no:16c */}
           <input type="text" value={this.props.city} ref = "city" />
        </td></tr>
        <tr><td>State: </td><td>
        <select ref = "state" style={{width:"120px", border:"1px solid #cccccc", borderRadius:"3px", height:"24px"}}>
          {/* Issue no:16d*/
            states}
        </select>
        </td></tr>
        <tr><td>Zipcode:</td><td>
           {/*Issue no:16e*/}
           <input type="text" value={this.props.zipcode} ref = "zipcode" />
       </td></tr>
        <tr><td>PhoneNumber:</td><td>
            {/* Issue no:16f*/}
            <input type="text" value={this.props.phoneNumber} ref = "phoneNumber" pattern="[0-9]{10}"/>
      </td></tr>
        <tr><td>
          {/* Issue no:16g*/}
          <button type="submit" className={'modButton'} style={{marginTop:"10px"}}>
            Submit
          </button>
       </td>
        <td>
           {/* Issue no:16h*/}
           <button className={'modButton'} style={{marginTop:"10px",marginLeft:"30px"}} onClick={this.toggleAddress}>
            Cancel
          </button>
        </td></tr>
       
         </tbody>
        </table>
        </form>

    );
  }
}

export default AddAddress;
