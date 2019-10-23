import Data from './Data';
import React, {useState} from 'react';

const employeeProfile = [ 
  {firstName: "helen", lastName: "clarke", numPlate: "wk57 000", permitNum: 244, workPhone: 07800000000},
  {firstName: "hannah", lastName: "ruby", numPlate: "B055 000", permitNum: 300, workPhone: 0798000000},
  {firstName: "vanessa", lastName: "tsang", numPlate: "RO65 000", permitNum: 100, workPhone: 076000000}];

const CardList = (props) =>(
  <div>
     <Card {...employeeProfile} />
  </div>
);



class Card extends React.Component {
  render(){
    const profile = employeeProfile[0];//this.props; //employeeProfile data
    return(
      <div className="employee-profile">
        Owner's details...
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
  render () {
    return (
      <form action="">
        <input type="text" placeholder='name/reg plate/permit'/>
        <button>search</button>
      </form>
    )
  }
}

class App extends React.Component {
  render(){
    
    return (
      <div>
      <div className="header">{this.props.title}</div>
      <Form />
      <CardList profile={employeeProfile}/>
    </div>
    );
  }

}
export default App; 

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