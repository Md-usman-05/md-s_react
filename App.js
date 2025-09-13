import React, { useState } from 'react';
function CounterButton() {
// Declare a state variable 'count' and a setter function 'setCount'
// Initialize 'count'to 0
const [count, setCount] = useState(0);
// Function to increment the count
const incrementCount = () =>{
setCount(count + 1);
};
// Function to decrement the count
const decrementCount = () =>{
setCount(count - 1);
};
// Function to reset the count
const resetCount = () =>{
setCount(0);
};
return (
<div>
<h1>Counter: {count}</h1>
<button onClick={incrementCount}>Increment</button>
<button onClick={decrementCount}>Decrement</button>
<button onClick={resetCount}>Reset</button>
</div>
);
}
export default CounterButton;