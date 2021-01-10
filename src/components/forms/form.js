import "./form.css";
import React from "react";
import MaterialIcon from 'material-icons-react';
import SuccessComponent from "../success/success";

export default class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", currentStep: props.currentStep, hobbies: "", visits: [], suggestion: "" };
    }

    render() {
        return (
            <div className="form-group">
                {this.getStepsData()}
                { this.state.currentStep === 5 ? null : <div className="d-flex align-items-center justify-content-center">
                    {this.state.currentStep ? <button className="d-flex m-20 btn btn-primary mr-4" onClick={this.proceedToPrevStep.bind(this)}> <i className="material-icons color-white mr-2 max-w-35"  > arrow_backward</i> Prev </button> : null}
                    <button className="d-flex m-20 btn btn-primary" onClick={this.proceedToNextStep.bind(this)}> <span className="mr-2"> {this.state.currentStep >= 4 ? "Submit" : "Next"} </span>  <i className="material-icons color-white" > arrow_forward</i> </button></div>}
            </div>
        );
    }

    getStepsData() {
        if (!this.state.currentStep) {
            return <div className="w-50 mx-auto">
                <h4 className="mb-3">Enter Your Name</h4>
                <input type="text" className="form-control" value={this.state.name} onChange={this.updateName.bind(this)} />
            </div>
        } else if (this.state.currentStep === 1) {
            return this.getStep2Data();
        } else if (this.state.currentStep === 2) {
            return this.getStep3Data();
        } else if (this.state.currentStep === 3) {
            return this.getStep4Data();
        } else if (this.state.currentStep === 4) {
            return this.showSummary();
        } else {
            return this.showSuccess();
        }
    }


    getStep2Data() {
        return <div className="form-group" >
            <h4 className="mb-3"> Which you like most? </h4>
            <label className="mr-3 cursor-pointer">  <input type="radio" className="form-control cursor-pointer" value="beach" checked={this.state.hobbies === "beach"} onChange={this.handleHobbie.bind(this)} /> Beaches</label>
            <label className="cursor-pointer" ><input type="radio" className="form-control cursor-pointer" value="mountain" checked={this.state.hobbies === "mountain"} onChange={this.handleHobbie.bind(this)} /> Mountains </label>
        </div>
    }

    getStep3Data() {
        let response = "";
        if (this.state.hobbies === "beach") {
            response = <div className="d-flex flex-column"  >
                <h4 className="mb-3"> Places you would like to visit ?</h4>
                <div className="d-flex flex-column align-items-start mx-auto">
                    <div className="form-group d-flex justify-content-center align-items-center" >
                        <input type="checkbox" className="checkbox mr-3 cursor-pointer" id="check-1" value="goa" checked={this.state.visits.includes("goa")} onChange={this.handleVisits.bind(this)} />
                        <label className="form-group-label cursor-pointer" htmlFor="check-1">Goa</label>
                    </div>
                    <div className="form-group d-flex justify-content-center align-items-center" >
                        <input type="checkbox" className="checkbox mr-3 cursor-pointer" id="check-2" value="pondicherry" checked={this.state.visits.includes("pondicherry")} onChange={this.handleVisits.bind(this)} />
                        <label className="form-group-label cursor-pointer" htmlFor="check-2">Pondicherry</label>
                    </div>
                    <div className="form-group d-flex justify-content-center align-items-center" >
                        <input type="checkbox" className="checkbox mr-3 cursor-pointer" id="check-3" value="kerala" checked={this.state.visits.includes("kerala")} onChange={this.handleVisits.bind(this)} />
                        <label className="form-group-label cursor-pointer" htmlFor="check-3">Kerala</label>
                    </div>
                </div>
            </div>
        } else {
            response = <div className="d-flex flex-column" >
                <h4 className="mb-3"> Places you would like to visit ?</h4>
                <div className="d-flex flex-column align-items-start mx-auto">
                    <div className="form-group d-flex justify-content-center align-items-center" >
                        <input type="checkbox" className="checkbox mr-3 cursor-pointer" id="check-1" value="shimla" checked={this.state.visits.includes("shimla")} onChange={this.handleVisits.bind(this)} />
                        <label className="form-group-label cursor-pointer" htmlFor="check-1">Shimla</label>
                    </div>
                    <div className="form-group d-flex justify-content-center align-items-center" >
                        <input type="checkbox" className="checkbox mr-3 cursor-pointer" id="check-2" value="manali" checked={this.state.visits.includes("manali")} onChange={this.handleVisits.bind(this)} />
                        <label className="form-group-label cursor-pointer" htmlFor="check-2">Manali</label>
                    </div>
                    <div className="form-group d-flex justify-content-center align-items-center" >
                        <input type="checkbox" className="checkbox mr-3 cursor-pointer" id="check-3" value="nainital" checked={this.state.visits.includes("nainital")} onChange={this.handleVisits.bind(this)} />
                        <label className="form-group-label cursor-pointer" htmlFor="check-3">Nainital</label>
                    </div>
                </div>
            </div>
        }
        return response;
    }

    getStep4Data() {
        return <div className="form-group w-50 mx-auto">
            <h4 className="mb-3" >Suggestions</h4>
            <textarea className="form-control" id="Textarea1" rows="3" value={this.state.suggestion} onChange={this.handleSuggestions.bind(this)} ></textarea>
        </div>
    }

    showSummary() {
        return (<div className="w-80 mx-auto">
            <h1 className="mb-3" >Summary</h1>

            <div className="d-flex flex-column mx-auto w-50">
                <div className="d-flex justify-content-between mb-2">
                    <label htmlFor=""> Name:  </label>
                    <div className="value ml-3"> {this.state.name} </div>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <label htmlFor=""> Hobbies:  </label>
                    <div className="value ml-3"> {this.state.hobbies} </div>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <label htmlFor=""> Place To Visit:  </label>
                    <div className="value ml-3"> {this.state.visits.join(", ")} </div>
                </div>
                <div className="d-flex justify-content-between">
                    <label htmlFor=""> Suggestions:  </label>
                    <div className="value ml-3"> {this.state.suggestion} </div>
                </div>
            </div>
        </div>)
    }

    handleSuggestions(e) {
        this.setState({ suggestion: e.target.value })
    }

    handleHobbie(e) {
        this.setState({ hobbies: e.target.value, visits: [] })
    }

    proceedToNextStep() {
        if (!this.allFieldsPresent()) {
            alert("field is required")
            return;
        }
        this.setState((state) => ({ currentStep: Math.min(5, state.currentStep += 1) }));
        this.props.handleChange();
    }

    proceedToPrevStep() {
        this.setState((state) => ({ currentStep: Math.max(0, state.currentStep -= 1) }));
        this.props.handlePrevChange();
    }

    allFieldsPresent() {
        return (this.state.currentStep === 0 && this.state.name) || (this.state.currentStep === 1 && this.state.hobbies)
            || (this.state.currentStep === 2 && this.state.visits.length) || (this.state.currentStep === 3 && this.state.suggestion)
            || this.state.currentStep > 3
    }

    updateName(e) {
        this.setState({ name: e.target.value });
    }

    handleVisits(e) {
        this.setState((state) => {
            return this.updateVisits(state, e);

        })
    }

    updateVisits(state, e) {
        if (e.target.checked) {
            const visits = [...state.visits, e.target.value]
            return {
                visits
            }
        } else {
            const visits = state.visits.filter((visit) => visit !== e.target.value)
            return {
                visits
            }
        }
    }

    reset() {
        this.setState({ name: "", currentStep: 0, hobbies: "", visits: [], suggestion: "" });
        this.props.reset();
    }

    showSuccess() {
        return (<SuccessComponent reset={this.reset.bind(this)} ></SuccessComponent>)
    }
}
