import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import login from './login';
import photos from './photos';
import theme from './theme';

import localStorage from './middleware/localStorage';

const middleware = [...getDefaultMiddleware(), localStorage];

const reducer = combineReducers({ login, photos, theme });
const store = configureStore({ reducer, middleware });

export default store;
