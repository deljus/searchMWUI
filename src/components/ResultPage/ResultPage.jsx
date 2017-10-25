import React from 'react';
import SearchInput from '../../containers/SearchInput';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ResultItem, Loader, Error, } from '../../containers';

const Wrapper = styled.div`
    padding-bottom: 20px;
`

const ResultPage = ({isLoading, results, errorRequest, forceRequest, history}) => (
    <div>
        {errorRequest && errorRequest.message && <Error
            backBtn={() => history.back()}
            refreshBtn={() => forceRequest()}
        />}
        <Loader loaded={isLoading} />
        <Wrapper>
            <SearchInput />
        </Wrapper>
        { results && results.map((result, count) =>
        <ResultItem count={count+1} base64={result.base64}/>
        )
        }
    </div>
);

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