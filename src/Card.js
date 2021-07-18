import React, { Component, useState } from "react";
function Card() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>useState Counter app using state</h1>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button>
      <button onClick={() => setCount(count - 1)}>Decrease Counter</button>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      <h2>Current Vlaue of the header Count {count}</h2>
    </div>
  );
}
export default Card;
