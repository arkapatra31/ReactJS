import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.counter.value, //to keep things dynamic
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  }; //this can be passed in style = {} or <span style={{ fontSize: 30 }} className="badge badge-primary m-2">

  //   constructor(){
  //     super();
  //     this.handleInc = this.handleInc.bind(this);
  //   }

  //   render() {
  //     return (
  //       <div>
  //    {this.state.tags.length === 0 && <center>Map some tags</center>}
  //        {this.populateTags()}
  //         <span className={this.findBadgeCls()}>{this.findCounter()}</span>
  //         <button className="btn btn-secondary btn-sm m-2">Increment</button>
  //         <ul>
  //             {this.populateTags()}
  //         </ul>
  //       </div>
  //     );
  //   }

  render() {
    return (
      <div style={{position : "relative", marginLeft : "500px", marginTop : "10px"}}>
        <span className={this.findBadgeCls()}>{this.findCounter()}</span>
        <button
          className="btn btn-secondary btn-sm m-2"
          //onClick={this.props.onIncrement}
          onClick={() => this.props.onIncrement(this.props.counter)} //this is removing local state
          disabled={this.props.counter.value >= 5}
        >
          +
        </button>
        <button
          className="btn btn-warning btn-sm m-2"
          onClick={() => {this.props.onDecrement(this.props.counter.id)}}
          disabled = {this.state.value < 1}
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => {  
            this.props.onDelete(this.props.counter.id); 
            }}
          disabled = {this.props.counter.value < 1}
        >
          Delete
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => {
            this.props.onReset(this.props.counter); 
            }}
          disabled = {this.props.counter.value < 1}
        >
          Reset
        </button>
        <span className="badge badge-pill badge-dark">Product{this.props.counter.id}</span>
      </div>
    );
  }

  checkState = () => {
    console.log(this.state.value + '\n' + this.props.counter.value);
    this.setState({value : this.props.counter.value});
  }

  findCounter() {
    let {value} = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  findBadgeCls() {
    let {value} = this.props.counter;
    let badgeCls = "badge m-2 badge-";
    badgeCls += value === 0 ? "warning" : "primary";
    return badgeCls;
  }

  populateTags() {
    //return this.state.tags.map(tag => <li>{tag}</li>);
    //this will work but in console it can be seen that React will throw an error as while using <li> it expects an unique key so that whenerver something is changed in virtual DOM it can reflected in the actual DOM. Hence use below

    //Conditional Rendering
    return this.state.tags.map((tag) => (
      <ul key={tag}>
        <li key={this.state.tags.indexOf(tag)}>{tag}</li>
      </ul>
    ));
  }

}

export default Counter;
