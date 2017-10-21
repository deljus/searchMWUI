import { connect } from 'react-redux';
import { compose } from 'redux';
import { connectRequest, querySelectors, errorSelectors } from 'redux-query';
import { withRouter } from 'react-router-dom';
import { getModels, getTasks } from '../../core/queries';
import ValidatePage from './ValidatePage';

const mapStateToProps = state => ({
  task: state.entities.task,
  models: state.entities.models,
  isLoading: querySelectors.isPending(state.queries, getTasks()),
  errorRequest: errorSelectors.responseBody(state.errors, getTasks()),
});

export default withRouter(compose(
  connect(mapStateToProps),
  connectRequest(getModels),
  connectRequest(getTasks))(ValidatePage));
