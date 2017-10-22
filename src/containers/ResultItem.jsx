import React from 'react';
import PropTypes from 'prop-types';

const ResultItem = ({ count, base64, result }) => (
  <div className="row">
    <div className="col-md-1">{count}</div>
    <div className="col-md-5">
        <img src={base64} />
    </div>
    <div className="col-md-6">

    </div>
  </div>
);

ResultItem.propTypes = {
    count: PropTypes.number,
    base64: PropTypes.string,
    result: PropTypes.string,
};

ResultItem.defaultProps = {
    count: 1,
    base64: "",
    result: "",
};

export default ResultItem;
