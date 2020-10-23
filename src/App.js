import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
//import 'bootstrap/dist/css/bootstrap.min.css';
// import api from './Api'

class App extends Component{
  // state = {
  //   uses: [],
  //   topics: []
  // }

  // async componentDidMount(){
    
//uses
// const response = await api.get('uses');
// console.log(response.data);
// this.setState({ uses: response.data});
// //topics
// const topics = await api.get('topics');
// console.log(topics.data);
// this.setState({ topics: topics.data});
//   }

// //getuses
// getUses = async () => {
//   try{
//   const response = await api.get('/routes');

//   const { id_use, use } = response.data;
//   this.setState({use});
//   }catch(response){
//     this.setState({errorMessage: response.data.error})
//   }
// };



  
  render(){
    return(
      <div className="App">
      <div className="container">
      <Form/>
      </div>
      </div>
    );
  }
}

export default App;

