// By default, a connected component receives props.dispatch and can dispatch actions itself

import React, { Component } from "react";
import { connect } from "react-redux";
import { bugAdded } from "../../redux/action";

class BugsClassCompDirectDispatch extends Component {
  state = { name: "" };

  handleSetName = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  handleAddBug = (event) => {
    event.preventDefault();

    // Dispatch -> can be used directly if not mentioned as second parameter in CONNECT
    this.props.dispatch(bugAdded(this.state.name));
  };

  render() {
    return (
      <div>
        <h3>Using Redux Store in Class Component</h3>
        {this.props.bugs.map((x) => (
          <p>
            <span>{x.id}</span>
            <span>{x.description}</span>
            <span>{x.resolved}</span>
          </p>
        ))}
        <h4>Operations</h4>
        <div>
          <label>Enter Bug</label>
          <input
            type="text"
            name="bugName"
            value={this.state.name}
            onChange={this.handleSetName}
          />
          <button onClick={this.handleAddBug}>Add</button>
        </div>
      </div>
    );
  }
}

// Used for selecting the part of the data from the store that the connected component needs
// Called every time the store state changes
// Receives the entire store state, and should return an object of data this component needs

// Instance of STATE is used as BUG
// const mapStateToProps = (state) => ({ state: state });
// const mapStateToProps = (state) => ({ state });

const mapStateToProps = (state) => ({ bugs: state });

// Provide NULL as second parameter -> To use DISPATCH directly from PROPS

export default connect(mapStateToProps, null)(BugsClassCompDirectDispatch);
