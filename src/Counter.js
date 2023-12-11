import React, { useState, useEffect, useReducer } from 'react';

const initialState = {
  counter: 0
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1
      };
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
}

function Counter() {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {

    document.title = state.counter;
      }, [state.counter]);

      return (
        <React.Fragment>
          {/* Same here: we need to access state.counter to get the counter value. */}
          {hidden ? <h1>Count Hidden</h1> : <h1>{state.counter}</h1>}
          {/* Now we use dispatch() to send an action to our reducer to update state. */}
          <button onClick={() => dispatch({type: 'increment'})}>Count!</button>
          <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
        </React.Fragment>
      );
    }

export default Counter;

//     console.log("effect!");
//     document.title = counter;
//   }, [counter]);

//   return (
//     <React.Fragment>
//       {hidden ? <h1>Count Hidden</h1> : <h1>{counter}</h1>}
//       <button onClick={() => setCounter(counter + 1)}>Count!</button>
//       <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
//     </React.Fragment>
//   );
// }