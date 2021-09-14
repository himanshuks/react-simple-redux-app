import React from "react";
import store from "./redux/store";

import { Routing } from "./containers/routes.jsx";

// import { bugAdded, bugRemoved, bugResolved } from "./action";

function App() {
  store.subscribe(() => {
    console.log("Store changed...", store.getState());
  });

  // Store provides major functions:
  // 1. dispatch() -> to send action to store
  // 2. getState() -> to get current state
  // 3. subscribe() -> when store gets changed, this get triggered

  // Example are given below:-
  // store.dispatch(bugAdded("Bug One"));
  // console.log(`store.getState()`, store.getState());

  return (
    <React.Fragment>
      <Routing />
    </React.Fragment>
  );
}

export default App;
