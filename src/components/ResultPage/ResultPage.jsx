import React from 'react';
import SearchInput from '../../containers/SearchInput';
import styled from 'styled-components';
import { ResultItem } from '../../containers';

const Wrapper = styled.div`
    padding-bottom: 20px;
`

const ResultPage = () => (
    <div>
        <Wrapper>
            <SearchInput />
        </Wrapper>
        <ResultItem/>
    </div>
);

export default ResultPage;