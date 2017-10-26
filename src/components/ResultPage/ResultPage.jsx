import React, { Component } from 'react';
import { SearchInputView } from '../WrappedContainers';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';
import { ResultItem, Loader, Error, ModalIncrease } from '../../containers';
import 'antd/lib/pagination/style/css';

const Wrapper = styled.div`
    padding-bottom: 20px;
`;

const CenterWrap = styled.div`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 40px;
    text-align: center;
`;

const ResultWrapped = styled.div`
    padding-top: 50px;
`;

class ResultPage extends Component {
  showIncreaseModel = (base64) => {
    this.modal.showModal(base64);
  }

  render() {
    const { errorRequest, forceRequest, isLoading, results, history } = this.props;

    return (
      <div>
        <ModalIncrease ref={(e) => { this.modal = e; }} />
        {errorRequest && errorRequest.message && <Error
          backBtn={() => history.back()}
          refreshBtn={() => forceRequest()}
        />}
        <Loader loaded={isLoading} />
        <Wrapper>
          <SearchInputView />
        </Wrapper>
        <ResultWrapped>
          {results && results.map((result, count) =>
            (<ResultItem
              count={count + 1}
              base64={result.base64}
              onClickIcrease={() => this.showIncreaseModel(result.base64)}
              result={result.models[0].results}
            />),
          )
          }
        </ResultWrapped>
        {/* <CenterWrap> */}
        {/* <Pagination defaultCurrent={1} total={50} /> */}
        {/* </CenterWrap> */}
      </div>
    );
  }
}

ResultPage.propTypes = {
  results: PropTypes.array,
  isLoading: PropTypes.bool,
};

ResultPage.defaultProps = {
  result: null,
  isLoading: false,
  errorRequest: { message: null },
};

export default ResultPage;
