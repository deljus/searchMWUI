import React from 'react';
import PropTypes from 'prop-types';

const ResultItem = ({ count, base64, result }) => (
  <div className="row">
    <div className="col-md-5">{count}
        <img src={base64} width={350}/>
    </div>
    <div className="col-md-7">
        <ul className="nav nav-tabs">
            ...
            <li >
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    Dropdown <span className="caret"></span>
                </a>
            </li>
            ...
        </ul>
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
    base64: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Aflatoxin_B1_acsv.svg/781px-Aflatoxin_B1_acsv.svg.png",
    result: "",
};

export default ResultItem;
