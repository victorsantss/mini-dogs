import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/login';
import styles from './Login.module.css';

export const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const darkTheme = useSelector(state => state.theme.darkTheme);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }


  return (
    <form className="anime" onSubmit={handleSubmit}>
      <label
        className={`
          ${darkTheme ? styles.whiteLabel : styles.blackLabel} 
          ${styles.label}`}
        htmlFor="username">
        User
      </label>
      <input
        className={styles.input}
        id="username"
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <label
        className={`
          ${darkTheme ? styles.whiteLabel : styles.blackLabel} 
          ${styles.label}`}
        htmlFor="password">
        Password
      </label>
      <input
        className={styles.input}
        id="password"
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button
        className={`
          ${darkTheme ? styles.darkButton : styles.lightButton} 
          ${styles.button}`}
      >
        Submit
      </button>
    </form>
  )
}