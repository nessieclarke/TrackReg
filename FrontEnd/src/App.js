import React from 'react';
import './index.css';




class Form extends React.Component{

}
class CardList extends React.Component{
  render
}
class App extends React.Component{
  constructor(props){
  super(props)
  

  }
  render (){
    return (
      <div>
        hello

      </div>
      <div>
      <div className="header">{this.props.title}</div>
      <Form onSubmit={this.addNewProfile} callback={this.filterNumPlates}/>
      <CardList profile={this.state.profile}/>
    </div>
    )
  }
}




export default App;