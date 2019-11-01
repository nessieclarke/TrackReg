import React from 'react';
import './index.css';
//import React, {useState} from 'react';
// { <link
//   rel="stylesheet"
//   href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//   integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
//   crossorigin="anonymous"
// /> }

const employeeProfile = [ 
  {firstName: "helen", lastName: "clarke", numPlate: "wk57 000", permitNum: 244, workPhone: 7800000000},
  {firstName: "hannah", lastName: "roby", numPlate: "B055 000", permitNum: 300, workPhone: 798000000},
  {firstName: "vanessa", lastName: "tsang", numPlate: "RO65 000", permitNum: 100, workPhone: 76000000}];

const CardList = (props) => (
  <div>
     {props.profile.map(profile => <Card key={profile.numPlate}{...profile} />)}
    
  </div>
);


class Card extends React.Component {
  render(){
    const profile = this.props; //employeeProfile data
    return(
      <div className="employee-profile">
        details...
        <div className="info">
          <div className="firstName">{profile.firstName}</div>
          <div className="lastName">{profile.lastName}</div>
          <div className="workEmail">{profile.workEmail}</div>
          <div className="workPhone">{profile.workPhone}</div>
          <div className="workSkype">{profile.workSkype}</div>
          <div className="numPlate">{profile.numPlate}</div>
          <div className="permitNum">{profile.permitNum}</div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props){
  super(props);
  this.state = { numPlate: ''};
}
myChangeHandler = (event) => {

  this.setState({numPlate: event.target.value});
}
searchNumPlate = (e) => {
  this.props.callback(this.state.numPlate);
  e.preventDefault();
  console.log(this.state.numPlate);
}
render(){
  return(
    <form onSubmit={this.searchNumPlate}>
      <h1> hello {this.state.numPlate}</h1>
      <input
      type='text'
      onChange={this.myChangeHandler} />
      <button type='submit'>search</button>
    </form>
    
  );
}
}
 
state = {firstName: ''};
  handleSubmit = (event) => {
    event.preventDefault();//prevents page refreshing might not need this
    data.get('employeeProfile.js');
    this.props.onSubmit(resp.employeeProfile //to be linked to app componenet
    );
  }
  render(state){
    return (
      <form onSubmit={this.handleSubmit}>

        <input 
        type="text" 
        value={this.state.firstName}
        onChange={event => this.setState({ firstName: event.target.value })}
        placeholder='name/reg plate/permit'
        //ref={this.firstNameIput}
        required
        />
        <button>search</button>
        
      </form>
    );
  }


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profile: employeeProfile,
    };
  }
  // state = {
  //   profile: employeeProfile,
  // };
  addNewProfile = (profileData) => {
    console.log('App',profileData);
  };

  filterNumPlates = numPlate => {
    this.setState({
      profile: this.state.profile.filter(employee => employee.numPlate === numPlate)
    });
  }
  render(){
    
    return (
      <div>
      <div className="header">{this.props.title}</div>
      <Form onSubmit={this.addNewProfile} callback={this.filterNumPlates}/>
      <CardList profile={this.state.profile}/>
    </div>
    );//call in state that submit button look at tictactoe 
  }

}
export default App; 
// ReactDOM.render(
// 	<App title="Parking Reg Card Profiles" />, 

//   mountNode,
// );//dont think it likes mountNode
  // think that was just while working in playground
//-----------------------------------------------------------