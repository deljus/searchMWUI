import { connect } from 'react-redux';
import { SearchInput } from '../../containers';
import { marvinModal } from '../../core/actions';
import { MODAL } from '../../config';

const mapDispatchToProps = dispatch => ({
  onOpenModalClick: () => dispatch(marvinModal(true, MODAL.CREATE_TASK)),
});

export default connect(null, mapDispatchToProps)(SearchInput);
