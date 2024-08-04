import React from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increase,fetchHomeData } from '../store/modules/home';

const Home = () => {
  // const [count, setCount] = useState(0);
  // 1、从redux中获取数据
  const count = useSelector(state => state.home.count);

  // 2、触发action
  const dispatch = useDispatch();

  const addCounter = () => {
    dispatch(
      increase(2)
    )
  }
  const getHomeData = () => {
    dispatch(
      fetchHomeData()
    )
    console.log('getHomeData');
  }

  return (
  <div>
    <h1>Hello World</h1>
    <h2>Count: {count}</h2>
    <button onClick={addCounter}>Increase</button>
    <button onClick={getHomeData}>Decrease</button>
  </div>
  )
}

export default Home;