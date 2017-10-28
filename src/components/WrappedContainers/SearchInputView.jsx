import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { marvinModal, validateTaskOuery } from '../../core/actions';
import { SearchInput } from '../../containers';
import { MODAL, URL } from '../../config';

const mapDispatchToProps = (dispatch, props) => ({
  onOpenModalClick: () => dispatch(marvinModal(true, MODAL.CREATE_TASK)),
  onSearchFormSubmit: data => dispatch(validateTaskOuery(data)).then((result) => {
    if (result.status >= 200 && result.status < 300) {
      props.history.push({
        pathname: URL.VALIDATE,
        search: queryString.stringify({ task: result.transformed.task }),
      });
    }
  }),
});

export default withRouter(connect(null, mapDispatchToProps)(SearchInput));
