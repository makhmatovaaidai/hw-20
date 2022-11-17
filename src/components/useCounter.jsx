import { useState } from "react";

function useCounter(initialCount = 0, value) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    if (count >= 30) {
      return alert("Sorry, reached the maximum number");
    }
    setCount(count + value);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - value);
    } else if (count === 0) {
      alert("Sorry, reached the minimum number");
    }
  };
  const reset = () => {
    setCount(initialCount);
  };
  return [count, increment, decrement, reset];
}

export default useCounter;
