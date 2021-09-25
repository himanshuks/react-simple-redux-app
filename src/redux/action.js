// We can use import alias for all available exports
import * as actions from "./actionTypes";

// Arrow functions are used
// Parameters are passed after function name -> NAME = (param) =>
// To return an object -> use ({})

// Action function takes parameter passed from dispatch function
// Return an object having TYPE and PAYLOAD
// TYPE is mandatory
// PAYLOAD is optional

// As good practice, provide minimum data which is sufficient to trigger the action

export const bugAdded = (desc) => ({
  type: actions.BUG_ADDED,
  payload: {
    description: desc,
  },
});

export const bugRemoved = (idReceived) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id: idReceived,
  },
});

export const bugResolved = (idReceived) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id: idReceived,
  },
});

// Below is the normal function way

// export function bugAdded(desc) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: desc,
//     },
//   };
// }

export const displayEmployee = (emp) => ({
  type: actions.SHOW_EMPLOYEE,
  payload: {
    employee: emp,
  },
});
