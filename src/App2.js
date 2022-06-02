import React, { Component } from 'react';

export default class App2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            age2:this.props.age
        }
    }
    

  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps props",props,state);
    if(props.age !== state.age2){
        return {age2:props.age}
    }
    return null; 
  }


  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate");
    console.log(nextProps,nextState);
    if(this.state.age2 < 30){
        return true;
    }
    return false;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("getSnapshotBeforeUpdate",prevProps,prevState)
      return 50;
  }


  componentDidUpdate(prevProps,prevState,snapshot){
    console.log("componentDidUpdate",prevProps,prevState,snapshot)
  }


  render() {
    return (
      <div>
        {/* {console.log(this.state.age2)} */}
        {this.state.age2}
      </div>
    );
  }
}
