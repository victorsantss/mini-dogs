import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../store/login";
import { setTheme } from "../../store/theme";
import styles from './Header.module.css';

export const Header = () => {
  const { user, token } = useSelector(state => state.login);
  const darkTheme = useSelector(state => state.theme.darkTheme);
  const loading = token.loading || user.loading;
  const dispatch = useDispatch()

  return (
    <div>
      <header className={styles.header}>
        <h1 className={`
          ${darkTheme ? styles.whiteTitle : styles.blackTitle} 
          ${styles.title}`}
        >
          Mini Dogs
        </h1>
        <div className={styles.headerButtons}>
          <button
            onClick={() => dispatch(setTheme())}
            aria-label="Switch theme"
            title="Switch theme"
            className={`
            ${styles.themeSwitcher}
            ${darkTheme ? styles.darkSwitcher : styles.lightSwitcher} 
            `}
          ></button>
          <button
            onClick={() => dispatch(userLogout())}
            aria-label="Logout"
            title={user.data ? 'Logout' : ''}
            className={`
            ${styles.login}
            ${darkTheme ? styles.darkLogin : styles.lightLogin} 
            ${loading ? styles.loading : ''}
            ${user.data ? styles.loaded : ''}
            `}
          ></button>
        </div>
      </header>
    </div>
  );
};
