import { useMemo, useState } from 'react';

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState('');
  // Your solution starts here
  let expensiveValue = 0;
  // Your solution ends here

  function factorial(n) {
    let ans = 1;
    if (n === 0) return 1;
    for (let i = 1; i <= n; i++) {
      ans = ans * i;
    }
    return ans;
  }
  console.time();
  expensiveValue = useMemo(() => {
    return factorial(parseInt(input));
  }, [input]);
  console.timeEnd();

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue.toFixed(3)}</p>
    </div>
  );
}
