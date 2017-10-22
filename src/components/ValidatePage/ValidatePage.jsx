import React from 'react';
import PropTypes from 'prop-types';
import { Loader, Error, Thumbnail, SelectModel } from '../../containers';
import styled from 'styled-components';
import 'react-select/dist/react-select.css';
import { URL, CONST } from '../../config';
import { message } from 'antd';
import 'antd/lib/message/style/css';


const ButtonBack = styled.button`
    float: left;
`;

const ButtonContinue = styled.button`
    float: right;
`;

const ValidatePage = ({ task, models, isLoading, errorRequest, forceRequest, history, openEditModal }) => {

  const addModelList = (type) => {
    if (type === CONST.StructureType.MOLECULE) {
      return models.filter(o => o.type === CONST.ModelType.MOLECULE_SEARCHING);
    } else if (type === CONST.StructureType.REACTION) {
      return models.filter(o => o.type === CONST.ModelType.REACTION_SEARCHING);
    }
    return [];
  };
  return (
    <div>
      <Loader loaded={isLoading} />

      {errorRequest && errorRequest.message && <Error
        backBtn={() => history.push({ pathname: URL.INDEX })}
        refreshBtn={() => forceRequest()}
      />}

      {!isLoading && !errorRequest.message && task && <div className="container container-search">

        <div className="row">
          <div className="col-md-8">
            <Thumbnail
              cml={task.cml}
              base64={task.base64}
              revalidate={task.revalidate}
              onClickImage={openEditModal}
            />
          </div>
          <div className="col-md-4">
            <SelectModel models={addModelList(task.type)} />
          </div>
          <div className="col-md-12">
            <ButtonBack
              className="btn btn-default"
              onClick={() => history.push(URL.INDEX)}
            >
              <span className="glyphicon glyphicon-chevron-left" />&nbsp;
                    Back</ButtonBack>
            {task && task.revalidate ? <ButtonContinue className="btn btn-danger">
                Revalidate&nbsp;
              <span className="glyphicon glyphicon-refresh" />
            </ButtonContinue> : <ButtonContinue className="btn btn-primary">
                    Сontinue&nbsp;
              <span className="glyphicon glyphicon-chevron-right" />
            </ButtonContinue> }
          </div>
        </div>
      </div>}
    </div>
  );
};

ValidatePage.propTypes = {
  task: PropTypes.object,
  isLoading: PropTypes.bool,
  openEditModal: PropTypes.func.isRequired,
};

ValidatePage.defaultProps = {
  task: null,
  isLoading: false,
  errorRequest: { message: null },
};

export default ValidatePage;
