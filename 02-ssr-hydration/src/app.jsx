import React from 'react';
import { useState } from 'react';
import { Link, useRoutes } from 'react-router-dom';
import routes from './router';

const App = () => {
  const [count, setCount] = useState(0);

  return (
  <div>
    <h1>Hello World</h1>
    <h2>Count: {count}</h2>
    <button onClick={() => setCount(count + 1)}>Increase</button>
    <button onClick={() => setCount(count - 1)}>Decrease</button>
    <div>
      <Link to="/"><button>Home</button> </Link>
      <Link to="/about"><button>About</button></Link>
    </div>
    {/* 页面占位 */}
    {useRoutes(routes)}
  </div>
  )
}

export default App;