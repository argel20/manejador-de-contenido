import React from "react";
import $ from 'jquery';


export default class Radio extends React.Component {
  constructor() {
    super();
    this.state = {value1: 'header', value2: 'body', value3:'Side Bar'}
  }

  handleRadio(e){
    {this.props.value}
    this.setState({value: e.target.value})
    {console.log(this.state.value)};
  }

    render() {
    //  const radio = this.state.value.map((valuer) => {
    //    return (
    //      <Namer/>
    //    )
    //  })

      return (

        <div className="options">
          <input type="radio" name="opt" value={this.state.value1} onClick={this.handleRadio.bind(this)}/>
            <label>
              header
            </label>

          <input type="radio" name="opt" value={this.state.value2} onClick={this.handleRadio.bind(this)}/>
            <label>
              body
            </label>

          <input type="radio" name="opt" value={this.state.value3} onClick={this.handleRadio.bind(this)}/>
            <label>
              Side Bar
            </label>

        </div>

      )
  }
};
