import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    //imageUrl: "https://picsum.photos/200",
  };

  styles = {
    fontFamily: "Calibri",
    color: "Red",
    fontSize: 20,
    fontWeight: "Bold",
  };

  render() {
    return (
      //Instead of using an extra div we can use React Fragments
      <React.Fragment>
        <center>
          <span style={this.styles} className={`${this.badgeClass} m-2`}>
            {this.state.count}
          </span>
          <button className="btn btn-primary btn-sm">Increment</button>
        </center>
      </React.Fragment>
    );
  }

  badgeClass() {
    let badgeClass = "badge badge-";
    badgeClass += this.state.count === 1 ? "primary" : "success";
    return badgeClass;
  }

  formatCount() {
    let { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
