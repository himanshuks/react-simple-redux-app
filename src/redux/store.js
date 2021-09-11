// Use createStore function from redux
// Import the main reducer
import { createStore } from "redux";
import reducer from "./reducer";

// CreatStore function takes reducer as argument and returns store object
const store = createStore(reducer);

export default store;
