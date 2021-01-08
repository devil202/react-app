import React from "react";

export default class SuccessComponent extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="w-80 mx-auto">
                <img src="https://i.pinimg.com/originals/35/f3/23/35f323bc5b41dc4269001529e3ff1278.gif" alt="success" width="250" />
                <h3 className="my-5"> Your Response has been submitted successfully ! </h3>
                <button className="d-flex m-20 btn btn-primary mx-auto" onClick={this.reset.bind(this)}> Submit Another Response </button>
            </div>
        )
    }

    reset() {
        this.props.reset();
    }
}