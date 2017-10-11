import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ imageBtnClick, seachBtnClick }) => (
  <div className="row">
    <div className="input-group input-group-lg">
      <input
        type="text"
        className="form-custom"
        placeholder="Search for..."
      />
      <div className="input-group-btn input-group-lg">
        <button
          onClick={imageBtnClick}
          className="btn btn-default btn-left-right"
        >
          <span className="glyphicon glyphicon-picture" />
        </button>
        <button
          onClick={seachBtnClick}
          id="btn-searh"
          className="btn btn-primary"
          type="submit"
        >
          <span className="glyphicon glyphicon-search" />
        </button>
      </div>
    </div>
  </div>
);

SearchInput.propTypes = {
  imageBtnClick: PropTypes.func.isRequired,
  seachBtnClick: PropTypes.func.isRequired,
};

export default SearchInput;
