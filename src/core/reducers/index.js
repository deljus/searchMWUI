import { entitiesReducer, queriesReducer, errorsReducer } from 'redux-query';
import { combineReducers } from 'redux';
import { marvinModalReducer } from './marvinModalReducer';
import { task } from './task';
import { models } from './models';
import { results } from './results';

const reducers = combineReducers({
  models,
  task,
  results,
  marvinModal: marvinModalReducer,
  queries: queriesReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
});

export default reducers;
