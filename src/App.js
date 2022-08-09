import React from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { Content } from './Components/Content';
import { Header } from './Components/Header/Header';
import { autoLogin } from './store/login';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const darkTheme = useSelector(state => state.theme.darkTheme);
  const backgroundColor = darkTheme ? '#373737' : '#DBDBDB';
  document.body.style = `background-color: ${backgroundColor}`;

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);


  return (
    <div className='container'>
      <Header />
      <Content />
    </div>
  );
}

export default App;
