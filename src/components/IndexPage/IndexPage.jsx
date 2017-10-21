import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SearchInput, NewsImage } from '../../containers';
import { cmlToBase64, importCml } from '../../core/marvinAPI';

const IndexPageWrapper = styled.div`
    position: absolute;
    top: 40%;
`;

const searchFormSubmit = (text) => {
  // заглушка
};

const IndexPage = ({
  openMarvinModal,
}) => (
  <IndexPageWrapper className="container seach-container">
    <SearchInput
      onOpenModalClick={openMarvinModal}
      onSearchFormSubmit={searchFormSubmit}
    />
  </IndexPageWrapper>
);

IndexPage.propTypes = {
  openMarvinModal: PropTypes.func.isRequired,
};

export default IndexPage;
