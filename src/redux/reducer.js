// IMPORT AS - import * as actions from './actionTypes';
// USE AS - actions.BUG_ADDED, actions.BUG_REMOVED

import { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } from "./actionTypes";

// Incremental ID for newly added bugs
var lastID = 0;

// Reducer function takes 2 parameters
// STATE and ACTION
// State needs to initialize be default
// Action will take the dispatched type
// Switch case is being used for different values of incoming action

export default function reducer(state = [], action) {
  switch (action.type) {
    case BUG_ADDED:
      // console.log("BUG_ADDED called...");
      // console.log(`action.payload`, action.payload);
      return [
        ...state,
        {
          id: ++lastID,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case BUG_REMOVED:
      // console.log("BUG_REMOVED called...");
      // console.log(`action.payload`, action.payload);
      return state.filter((bug) => bug.id !== action.payload.id);

    case BUG_RESOLVED:
      // console.log("BUG_RESOLVED called...");
      // console.log(`action.payload`, action.payload);
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );

    default:
      return state;
  }
}
