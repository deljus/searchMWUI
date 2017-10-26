import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button as BaseButton, Badge } from 'antd';
import 'antd/lib/button/style/css';
import 'antd/lib/alert/style/css';
import 'antd/lib/badge/style/css';

const Rigth = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Button = styled(BaseButton)`
  border-color: #108ee9;
  margin: 5px;
`;

const Image = styled.img`
  cursor: pointer;
`;

const ResultItem = ({ count, base64, result, onClickIcrease }) => (
  <div className="row">
    <div className="col-md-5 thumbnail">
      <Rigth>
        <Button
          type="primary"
          ghost
          shape="circle"
          icon="double-right"
          size="small"
          // onClick={() => onClickImage(cml)}
        />
      </Rigth>
      <Image src={base64} width={350} onClick={() => onClickIcrease()} />
    </div>
    <div className="col-md-7">
      <ul className="nav nav-tabs">
        <li >
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    Dropdown <span className="caret" />
          </a>
        </li>


      </ul>
      { result && result.map(res => <p>{res.key}: {res.value}</p>) }
    </div>
  </div>
);

ResultItem.propTypes = {
  count: PropTypes.number,
  base64: PropTypes.string,
  result: PropTypes.object,
};

ResultItem.defaultProps = {
  count: 1,
  base64: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Aflatoxin_B1_acsv.svg/781px-Aflatoxin_B1_acsv.svg.png',
  result: null,
};

export default ResultItem;
