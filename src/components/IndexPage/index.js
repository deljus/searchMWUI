import { connect } from 'react-redux';
import IndexPage from './IndexPage';
import { marvinModal } from '../../core/actions';
import { MODAL } from '../../config';

const mapDispatchToProps = dispatch => ({
  openMarvinModal: () => dispatch(marvinModal(true, MODAL.CREATE_TASK)),
});

export default connect(null, mapDispatchToProps)(IndexPage);
