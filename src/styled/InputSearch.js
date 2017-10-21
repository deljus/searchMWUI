import styled from 'styled-components';

const getInputStyle = {
  height: '46px',
  padding: '10px 16px',
  fontSize: '18px',
  lineHeight: '1.3333333',
  width: '100%',
  borderRadius: '0px',
};

const SearchInputWrapper = styled.div`
  -webkit-box-shadow: 3px 3px 14px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 3px 14px -4px rgba(0,0,0,0.75);
  box-shadow: 3px 3px 14px -4px rgba(0,0,0,0.75);
`;

const SubmitBtn = styled.button`
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 0px;
`;

const Error = styled.span`
  color: red;
`;

export { getInputStyle, SearchInputWrapper, SubmitBtn, Error };
