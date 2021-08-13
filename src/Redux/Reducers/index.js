import { combineReducers } from 'redux';
import { exampleReducer } from './example';

export const rootReducer = combineReducers({
  exampleReducer,
});
