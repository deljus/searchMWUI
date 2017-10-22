import { entitiesReducer, queriesReducer, errorsReducer } from 'redux-query';
import { combineReducers } from 'redux';
import { marvinModalReducer } from './marvinModalReducer';
import { task } from './task';

const reducers = combineReducers({
  task,
  marvinModal: marvinModalReducer,
  queries: queriesReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
});

export default reducers;
