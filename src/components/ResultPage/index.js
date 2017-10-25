import { connect } from 'react-redux';
import { compose } from 'redux';
import { connectRequest, querySelectors, errorSelectors } from 'redux-query';
import { withRouter } from 'react-router-dom';
import { getResults } from '../../core/queries';
import ResultPage from './ResultPage';

const mapStateToProps = state => ({
  results: state.results,
  isLoading: querySelectors.isPending(state.queries, getResults()),
  errorRequest: errorSelectors.responseBody(state.errors, getResults()),
});

const mapDispatchToProps = (dispatch, props) => ({

});

export default withRouter(compose(
  connectRequest(getResults), connect(mapStateToProps, mapDispatchToProps))(ResultPage));
