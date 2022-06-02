import React,{ Component } from 'react';
import './App.css';
import App2 from './App2';


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      age : 20
    }
  }


  clickHere = ()=>{
    // console.log("Clicked");
    this.setState({age:this.state.age + 1})
  }
  render(){
    console.log("this is render method")
    return (
      <>
        <h1 className='App App-header'>{this.state.age}<br />
        <button onClick={this.clickHere}>Click Here</button></h1>
        
        <App2 age={this.state.age} />
      </>
    )
  }
}






















// import logo from './logo.svg';
// 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//       </header>
//     </div>
//   );
// }

// export default App;
