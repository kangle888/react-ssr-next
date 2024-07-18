import React from 'react';
import { useState } from 'react';

const About = () => {
  const [count, setCount] = useState(0);

  return (
  <div>
    <h1>Hello World</h1>
    <h2>Count: {count}</h2>
    <button onClick={() => setCount(count + 1)}>Increase</button>
    <button onClick={() => setCount(count - 1)}>Decrease</button>
  </div>
  )
}

export default About;