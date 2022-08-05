import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
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
      <div>
        {this.state.tags.length === 0 && <center>Map some tags</center>}
        {this.populateTags()}
        <span className={this.findBadgeCls()}>{this.findCounter()}</span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.handleInc}
        >
          Increment
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.handleDec}
          disabled = {this.state.count < 1}
        >
          Decrement
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.reset}
          disabled = {this.state.count < 1}
        >
          Reset
        </button>
      </div>
    );
  }

  findCounter() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  findBadgeCls() {
    let badgeCls = "badge m-2 badge-";
    badgeCls += this.state.count === 0 ? "warning" : "primary";
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

  handleInc = () => {
    //this.state.count += 1;
    this.setState({ count: this.state.count + 1 });
  };

  handleDec = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({count : 0});
  }

}

export default Counter;
