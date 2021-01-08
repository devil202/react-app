import logo from './logo.svg';
import './App.css';
import React from 'react';
import  FormComponent from "./components/forms/form";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentStep: 0, totalSteps: 4 };
  }
  render() {
    return (
    <div className="App">
      <div className="container">
          { this.state.currentStep >=4 ? null : this.getSteps()}
        </div>
      <div className="m-50">
          <FormComponent currentStep={this.state.currentStep} handleChange={this.proceedToNextStep.bind(this)}
            handlePrevChange={this.proceedToPrevStep.bind(this)}
            reset={this.reset.bind(this)}
          ></FormComponent>
        </div>
    </div>
  );
  }

  proceedToNextStep() {
    this.setState((state) => ({ currentStep: Math.min(state.totalSteps, state.currentStep += 1) })); 
  }

  proceedToPrevStep() {
    this.setState((state) => ({ currentStep: Math.max(0, state.currentStep -= 1) })); 
  }

  getSteps() {
    console.log("current steps", this.state.currentStep);
    const steps = [];
    const cureentStep = this.state.currentStep;
    for (let i = 0; i < this.state.totalSteps; i++) {
      steps.push(<div className="d-flex" key={i+"x"}><div className="position-relative"> <i  className={cureentStep <= i ?  "material-icons color-grey" : "material-icons color-green"}  > {cureentStep <= i ?  "panorama_fish_eye" : "check_circle"} </i> <div className="title position-absolute"> Step { i+1 } </div> </div> <div className={cureentStep <= i ?  "line" : "line trans"}></div> </div>
                )
    }
    return steps;
  }

  reset() {
  this.setState({ currentStep: 0, totalSteps: 4 });
}
  
}
