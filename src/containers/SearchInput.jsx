import React from 'react';
import PropTypes from 'prop-types';
import { getInputStyle, SearchInputWrapper, SubmitBtn } from '../styled/InputSearch';


const SearchInput = ({ onOpenModalClick, onSearchFormSubmit }) => {
  let inputText;

  const submitForm = () => {
    if (inputText.value) {
      onSearchFormSubmit(inputText.value);
    }
  };

  return (
    <div className="row" >
      <SearchInputWrapper className="input-group input-group-lg">
        <input
          name="searchText"
          type="text"
          style={getInputStyle}
          ref={el => inputText = el}
          placeholder="Search for..."
          onKeyPress={e => (e.key === 'Enter' ? submitForm() : false)}
        />
        <div className="input-group-btn input-group-lg">
          <button
            onClick={() => onOpenModalClick()}
            className="btn btn-default btn-left-right"
          >
            <span className="glyphicon glyphicon-picture" />
          </button>
          <SubmitBtn
            className="btn-primary"
            onClick={submitForm}
          >
            <span className="glyphicon glyphicon-search" />
          </SubmitBtn>
        </div>

      </SearchInputWrapper>
    </div>);
};

SearchInput.propTypes = {
  onOpenModalClick: PropTypes.func.isRequired,
  onSearchFormSubmit: PropTypes.func.isRequired,
};

export default SearchInput;
