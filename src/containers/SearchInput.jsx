import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'antd';
import { getInputStyle, SearchInputWrapper, SubmitBtn } from '../styled/InputSearch';
import { textToCml } from '../core/marvinAPI';
import 'antd/lib/button/style/css';

const ButtonWrap = styled.div`
  padding-top: 10px;
`;

const SearchInput = ({ onOpenModalClick, onSearchFormSubmit, buttonURL, history }) => {
  let inputText;
  let errorText = '';

  const submitForm = () => {
    if (inputText.value) {
      textToCml(inputText.value,
        cml => onSearchFormSubmit({ data: cml }),
        () => errorText = 'Structure not found',
      );
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
        {errorText}
      </SearchInputWrapper>
      <ButtonWrap>
        {buttonURL && buttonURL.map(link =>
          <Button type="dashed" onClick={() => history.push(link.url)}>{link.name}</Button>,
        )}
      </ButtonWrap>
    </div>);
};

SearchInput.propTypes = {
  onOpenModalClick: PropTypes.func.isRequired,
  onSearchFormSubmit: PropTypes.func.isRequired,
  buttonURL: PropTypes.arrayOf(PropTypes.object),
};

SearchInput.defaultProps = {
  buttonURL: null,
};

export default SearchInput;
