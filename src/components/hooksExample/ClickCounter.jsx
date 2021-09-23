// A Hook is a special function that lets us “hook into” React features. For example, useState is a Hook that lets us add React state to function components

import { useEffect, useState } from "react";

// Only Call Hooks at the Top Level
// Only Call Hooks from React Functions

export const ClickCounter = () => {
  // The only argument to the useState() Hook is the initial state
  // It returns a pair of values: the current state and a function that updates it
  // This is similar to this.state.count and this.setState in a class, except we get them in a pair

  // This is called “array destructuring”. It means that we’re making two new variables count and setCounter, where count is set to the first value returned by useState, and setCounter is the second
  const [count, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(count + 1);
  };

  // We tell React that our component needs to do something after render.
  // React will remember the function we passed and call it later after performing the DOM updates
  // By default, it runs both after the first render and after every update
  // React guarantees the DOM has been updated by the time it runs the effects

  useEffect(() => {
    document.title = `You clicked ${count} times`;

    // This is optional
    // React performs the cleanup when the component unmounts

    return () => {
      console.log(
        "We can return a function in useEffect for cleanup activities. Like removing subscriptions."
      );
    };

    // Forgetting to handle componentDidUpdate properly is a common source of bugs in React applications
    // React can skip applying an effect if certain values haven’t changed between re-renders
    // Pass an array as an optional second argument
    // If there are multiple items in the array, React will re-run the effect even if just one of them is different
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times...</p>
      {/* Everything between the curly braces gets evaluated immediately. 
      This can cause infinite render loop. So use any of below */}
      <button onClick={() => setCounter(count + 1)}>Increment Directly</button>
      <button onClick={handleClick}>Increment Function Call</button>
    </div>
  );
};
