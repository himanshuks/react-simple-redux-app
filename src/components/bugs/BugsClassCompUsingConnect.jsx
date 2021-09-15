// CONNECT can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.

import React, { Component } from "react";
import { connect } from "react-redux";
import { bugAdded, bugRemoved, bugResolved } from "../../redux/action";

// If we define our own mapDispatchToProps, the connected component will no longer receive dispatch.

class BugsClassCompUsingConnect extends Component {
  constructor() {
    super();
    this.name = "mycomponent";

    this.handleClick2 = this.handleClick1.bind(this);
  }
  state = { name: "", id: "", idRemove: "" };

  handleSetName = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  handleAddBug = (e) => {
    e.preventDefault();
    this.props.addNewBugNFC(this.state.name);
  };

  handleIDSet = (e) => {
    this.setState({ id: e.target.value });
  };

  handleResolveBug = (e) => {
    e.preventDefault();
    this.props.resolveBugNFC(Number(this.state.id));
  };

  handleIDSetRemove = (e) => {
    e.preventDefault();
    this.setState({ idRemove: e.target.value });
  };

  handleRemoveBug = (e) => {
    e.preventDefault();
    this.props.removeBugNFC(Number(this.state.idRemove));
  };

  handleClick1() {
    alert(this.name);
  }

  handleClick3 = () => {
    alert(this.name);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick1()}>Click 1</button>
        <button onClick={this.handleClick1}>Click 2</button>
        <button onClick={this.handleClick2}>Click 3</button>
        <button onClick={this.handleClick3}>Click 4</button>
        <h3>Using Redux Store in Class Component</h3>
        {this.props.bugs.map((x) => (
          <p key={x.id}>
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
        <div>
          <label>ID to Resolve</label>
          <input
            type="text"
            name="bugID"
            value={this.state.id}
            onChange={this.handleIDSet}
          />
          <button onClick={this.handleResolveBug}>Resolve</button>
        </div>
        <div>
          <label>ID to Remove</label>
          <input
            type="text"
            name="bugIDRemove"
            value={this.state.idRemove}
            onChange={this.handleIDSetRemove}
          />
          <button onClick={this.handleRemoveBug}>Remove</button>
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

// When DISPATCH is to be used directly from PROPS

const mapDispatchToProps = (dispatch) => ({
  // return {
  addNewBugNFC: (paramSent) => dispatch(bugAdded(paramSent)),
  resolveBugNFC: (paramSent) => dispatch(bugResolved(paramSent)),
  removeBugNFC: (paramSent) => dispatch(bugRemoved(paramSent)),
  // };
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BugsClassCompUsingConnect);
