import { connect } from 'react-redux';
import { compose } from 'redux';
import { connectRequest, querySelectors, errorSelectors } from 'redux-query';
import { withRouter } from 'react-router-dom';
import { marvinModal } from '../../core/actions';
import { getModels, getTasks } from '../../core/queries';
import ValidatePage from './ValidatePage';
import { MODAL } from '../../config';

const mapStateToProps = state => ({
  task: state.task,
  models: state.entities.models,
  isLoading: querySelectors.isPending(state.queries, getTasks()),
  errorRequest: errorSelectors.responseBody(state.errors, getTasks()),
});

const mapDispatchToProps = dispatch => ({
    openEditModal: (cml) => dispatch(marvinModal(true, MODAL.EDIT_TASK, cml)),
})

export default withRouter(compose(
  connect(mapStateToProps, mapDispatchToProps),
  connectRequest(getModels),
  connectRequest(getTasks))(ValidatePage));
