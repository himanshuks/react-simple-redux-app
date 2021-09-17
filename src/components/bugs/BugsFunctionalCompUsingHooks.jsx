// UseState() -> declares variable and function names in a hooks
// It takes argument which represent initial state
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bugAdded, bugResolved, bugRemoved } from "../../redux/action";

// useSelector() -> to access the store variables
import { useSelector } from "react-redux";

export default function BugsFunctionalComponent() {
  // useState() -> pass initial state
  // After destructing - we set Variable, Function

  const [bugDesc, setBugDesc] = useState("");
  const [bugIDResolve, setBugIDResolve] = useState("");
  const [bugIDRemove, setBugIDRemove] = useState("");

  // useDispatch() -> to pass dispatch functions into redux store
  // User defined variable name can be used

  const dispatch = useDispatch();

  // PreventDefault() -> prevents the basic behavior like form submit, button click

  const handleAddNewBug = (event) => {
    event.preventDefault();
    dispatch(bugAdded(bugDesc));
  };

  const handleResolveBug = (event) => {
    event.preventDefault();
    dispatch(bugResolved(Number(bugIDResolve)));
  };

  const handleRemoveBug = (event) => {
    event.preventDefault();
    dispatch(bugRemoved(Number(bugIDRemove)));
  };

  // UseSelector -> returns the object from store
  // We must pass selector
  // Here it's complete store object
  const showData = useSelector((x) => x);

  return (
    <div>
      <p>
        <label>New Bug</label>
        <input
          type="text"
          name="bugDesc"
          // Value - holds the dynamic value at realtime
          // OnChange - function with parameter as event and target value to capture data
          // OnChange - calls the function created using hooks
          value={bugDesc}
          onChange={(e) => setBugDesc(e.target.value)}
        />
        <button onClick={handleAddNewBug}>Add Bug</button>
      </p>
      <p>
        <label>Bug Resolved (give ID)</label>
        <input
          type="text"
          name="bugID"
          value={bugIDResolve}
          onChange={(e) => setBugIDResolve(e.target.value)}
        />
        <button onClick={handleResolveBug}>Resolve Bug</button>
      </p>
      <p>
        <label>Bug Removed (give ID)</label>
        <input
          type="text"
          name="bugDesc"
          value={bugIDRemove}
          onChange={(e) => setBugIDRemove(e.target.value)}
        />
        <button onClick={handleRemoveBug}>Remove Bug</button>
      </p>
      <div>
        <h2>List of active bugs:</h2>

        {/* Variable stored as return of useSelector can be accessed as array or object */}
        {showData.map((x) => (
          <p key={x.id}>
            <span>{x.id}</span>
            <span>{x.description}</span>
            <span>{x.resolved ? "Resolved" : "Opened"}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
