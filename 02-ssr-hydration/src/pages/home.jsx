import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increase ,fetchHomeData} from '../store/modules/home';

const Home = () => {

  const {count} = useSelector((rootState)=>{
    return {
      count: rootState.home.count
    }
  });
  // 触发 action
  const dispatch = useDispatch();

  const getHomeData = () => {
    dispatch(fetchHomeData());
  }

  return (
  <div>
    <h1>Hello World</h1>
    <h2>Count: {count}</h2>
    <button onClick={() => dispatch(increase())}>+1</button>
    <button onClick= {getHomeData}>getHomeData</button>
  </div>
  )
}

export default Home;