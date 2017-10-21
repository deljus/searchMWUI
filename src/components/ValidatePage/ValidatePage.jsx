import React from 'react';
import { Button } from 'react-bootstrap';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { Loader, Error, Thumbnail, SelectModal } from '../../containers';
import { URL } from '../../config';
import 'react-select/dist/react-select.css';

const ValidatePage = ({ task, models, isLoading, errorRequest, forceRequest, history }) => (
  <div>
    <Loader loaded={isLoading} />

    {errorRequest && errorRequest.message && <Error
      backBtn={() => history.push({ pathname: URL.INDEX })}
      refreshBtn={() => forceRequest()}
    />}

    {!isLoading && !errorRequest.message && task && <div className="container container-search">

      <div className="row">
        <div className="col-md-8">
          <Thumbnail cml={task.structures[0].data} />
        </div>
        <div className="col-md-4">
          <SelectModal />
        </div>
        <div className="col-md-12 right">
          <Button>Continium</Button>
        </div>
      </div>
    </div>}
  </div>
);

ValidatePage.propTypes = {
  task: PropTypes.object,
  isLoading: PropTypes.bool,
};

ValidatePage.defaultProps = {
  task: null,
  isLoading: false,
  errorRequest: { message: null },
};

export default ValidatePage;
