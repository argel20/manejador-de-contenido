import React from "react";
import $ from 'jquery';
import Radio from "./Radio";

export default class GenerateText extends React.Component {
  constructor() {
    super();
    this.state = {text: ''}, {value1: 'header', value2: 'body', value3:'Side Bar'}
  }
  handleTextChange (e){
    this.setState({text: e.target.value})
  }
  handleButton(){
    let radio = this.props.value
    let text = this.state.text.trim();

    {console.log(text)};
    {console.log(radio)};

  }
  handleRadio(e){
    {this.props.value}
    this.setState({value: e.target.value})
    {console.log(this.state.value)};
  }

  render() {
    return (

      <div className="inputs row">
        <div className="options col-md-3">
          <input
            type="text"
            placeholder="Text..."
            value={this.state.text}
            onChange={this.handleTextChange.bind(this)}
          />
        </div>
          <div className="col-md-6 text-center">
          <Radio />
          </div>
          <button onClick={this.handleButton.bind(this)}>Ok
          </button>

      </div>
    );
  }
};
