import React from 'react';
import './index.css';
import axios from 'axios';
//card list to display an array of records into an array of card components
const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
);
//card component to render info about employee and there contact details.
class Card extends React.Component {
	render() {
  	const profile = this.props;
  	return (
    	<div className="Employee Profile">
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="numPlate">{profile.numPlate}</div>
          <div className="phone">{profile.phone}</div>
        </div>
    	</div>
    );
  }
}
//form component to read input from the user.
class Form extends React.Component {
	state = { numPlate: '' };
	handleSubmit = async (event) => {
  	event.preventDefault();
    const resp = await axios.get(`http://localhost:8080/all`);
    this.props.onSubmit(resp.data);
    this.setState({numPlate: '' });
  };
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input 
          type="text" 
          value={this.state.numPlate}
          onChange={event => this.setState({ numPlate: event.target.value })}
          placeholder="Employee Number Plate" 
          required 
        />
        <button>search</button>
    	</form>
    );
  }
}
//this app manages all the components

class App extends React.Component {
  constructor(props){
        super(props);
        this.state = {
          profile: employeeProfile,
        };
      }
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}

export default App;












//----------starting again 30/10/19 re install of react.
// //npm run dev-server   in first terminal   npm run dev-bundle  in 2nd terminal.

// //import employeeProfile from './employeeProfile';  //this was gonna call in employee data

// import React, {useState} from 'react';
// import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// {/* <link
//   rel="stylesheet"
//   href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//   integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
//   crossorigin="anonymous"
// /> */}

// // const employeeProfile = [ 
// //   {firstName: "helen", lastName: "clarke", numPlate: "wk57 000", permitNum: 244, workPhone: 7800000000},
// //   {firstName: "hannah", lastName: "roby", numPlate: "B055 000", permitNum: 300, workPhone: 798000000},
// //   {firstName: "vanessa", lastName: "tsang", numPlate: "RO65 000", permitNum: 100, workPhone: 76000000}];

// const CardList = (props) => (
//   <div>
//      {props.profile.map(profile => <Card key={profile.numPlate}{...profile} />)}
    
//   </div>
// );


// class Card extends React.Component {
//   render(){
//     const profile = this.props; //employeeProfile data
//     return(
//       <div className="employee-profile">
//         details...
//         <div className="info">
//           <div className="firstName">{profile.firstName}</div>
//           <div className="lastName">{profile.lastName}</div>
//           <div className="workEmail">{profile.workEmail}</div>
//           <div className="workPhone">{profile.workPhone}</div>
//           <div className="workSkype">{profile.workSkype}</div>
//           <div className="numPlate">{profile.numPlate}</div>
//           <div className="permitNum">{profile.permitNum}</div>
//         </div>
//       </div>
//     );
//   }
// }

// class Form extends React.Component {
//   constructor(props){
//   super(props);
//   this.state = { numPlate: ''};
// }
// myChangeHandler = (event) => {

//   this.setState({numPlate: event.target.value});
// }
// searchNumPlate = (e) => {
//   this.props.callback(this.state.numPlate);
//   e.preventDefault();
//   console.log(this.state.numPlate);
// }
// render(){
//   return(
//     <form onSubmit={this.searchNumPlate}>
//       <h1> hello {this.state.numPlate}</h1>
//       <input
//       type='text'
//       onChange={this.myChangeHandler} />
//       <button type='submit'>search</button>
//     </form>
    
//   );
// }
// }
// //-----------------------------------------
// // onSubmit = event => {
// //   event.preventDefault();
// //   const name = this.name.value;
// //   const age = this.age.value;
// //   const info = {name: name, age: age};
// //   const data = this.state.data;
// //   data.push(info);
// //   this.setState({
// //     data: data
// //   });
// //  };
// // //----------------------------------------
//   // //firstNameInput = React.createRef();   //tried searching the input bar for firstName. 
//   // state = {firstName: ''};
//   // handleSubmit = (event) => {
//   //   event.preventDefault();//prevents page refreshing might not need this
//   //   data.get('employeeProfile.js');
//   //   this.props.onSubmit(resp.employeeProfile //to be linked to app componenet
//   //   );
//   // }
//   // render () {
//   //   return (
//   //     <form onSubmit={this.handleSubmit}>

//   //       <input 
//   //         type="text" 
//   //         value={this.state.firstName}
//   //         onChange={event => this.setState({ firstName: event.target.value })}
//   //         placeholder='name/reg plate/permit'
//   //         //ref={this.firstNameIput}
//   //         required
//   //         />
//   //       <button>search</button>
        
//   //     </form>
//   //   )
//   // }

//   // console.log(Form);
// // }
// //drop down menu input bar just need to work out what part i need and where to put it.
// /*<InputGroup className="mb-3">
//           <DropdownButton
//               as={InputGroup.Prepend}
//               variant="outline-secondary"
//               title="Dropdown"
//               id="input-group-dropdown-1">
//               <Dropdown.Item href="#">Action</Dropdown.Item>
//               <Dropdown.Item href="#">Another action</Dropdown.Item>
//               <Dropdown.Item href="#">Something else here</Dropdown.Item>
//               <Dropdown.Divider />
//               <Dropdown.Item href="#">Separated link</Dropdown.Item>
//             </DropdownButton>
//           <FormControl aria-describedby="basic-addon1" />
//         </InputGroup>*/

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       profile: employeeProfile,
//     };
//   }
//   // state = {
//   //   profile: employeeProfile,
//   // };
//   addNewProfile = (profileData) => {
//     console.log('App',profileData);
//   };

//   filterNumPlates = numPlate => {
//     this.setState({
//       profile: this.state.profile.filter(employee => employee.numPlate === numPlate)
//     });
//   }
//   render(){
    
//     return (
//       <div>
//       <div className="header">{this.props.title}</div>
//       <Form onSubmit={this.addNewProfile} callback={this.filterNumPlates}/>
//       <CardList profile={this.state.profile}/>
//     </div>
//     );//call in state that submit button look at tictactoe 
//   }

// }
// //export default App; 
// ReactDOM.render(
// 	<App title="Parking Reg Card Profiles" />,
//   mountNode,
// );
//
// {/* import React, { useState } from 'react';
// export default function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       Track the Vehicle/Vehicle Owner
//       <br />
//       <br />
//       Here is a button that will track
//       how many times you click it:
//       <br />
//       <br />
//       <button onClick={() => setCount(count + 1)}>{count}</button>
//     </div>
//   ); */}