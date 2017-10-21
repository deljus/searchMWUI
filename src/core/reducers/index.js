import { combineReducers } from 'redux';
import { marvinModalReducer } from './marvinModalReducer';
import { entitiesReducer, queriesReducer, errorsReducer, queryMiddleware } from 'redux-query';

// Combine Reducers
const reducers = combineReducers({
  marvinModal: marvinModalReducer,
  queries: queriesReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
});

export default reducers;
