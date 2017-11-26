/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';
import medicalRights from './modules/Wizard/WizardReducer';
import user from './modules/Wizard/UserReducer';
import userReducer from './reducers/user.reducer';
import alerts from './reducers/alert.reducer';
import registration from './reducers/registration.reducer';
import authentication from './reducers/authentication.reducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  medicalRights,
  user,

  userReducer,
  alerts,
  registration,
  authentication
});
