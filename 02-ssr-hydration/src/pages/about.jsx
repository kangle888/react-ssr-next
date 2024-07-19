import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decrease } from '../store/modules/home';


const About = () => {
  const {count} = useSelector((rootState)=>{
    return {
      count: rootState.home.count
    }
  });
  // 触发 action
  const dispatch = useDispatch();
  const setCount = () => {
    dispatch(decrease());
  }

  return (
  <div>
    <h1>Hello World</h1>
    <h2>Count: {count}</h2>
    <button onClick={ setCount}>decrease</button>
  </div>
  )
}

export default About;