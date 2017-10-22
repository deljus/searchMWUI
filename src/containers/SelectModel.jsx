import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';

const Container = styled.div`
    display: inlite-block;
    padding-bottom: 20px;
`;

const Descriptions = styled.span`
  font-size: 16px;
`;

const Title = styled.span`
  font-size: 16px;
  display: block;
  padding: 8px 0px;
  font-weight: bold;
`;

class SelectModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: this.props.models ? this.props.models[0] : { description: '' },
    };
  }

  onChangeModel = (model) => {
    this.setState({ model });
  };

  render() {
    return (
      <Container>
        <Title>Select models:</Title>
        <Select
          name="form-field-name"
          value={this.state.model}
          options={this.props.models}
          onChange={this.onChangeModel}
        />
        {this.state.model.description ?
          <Descriptions>
            <Title>Description selected model:</Title>
            {this.state.model.description}
          </Descriptions>
          : ''
        }
      </Container>
    );
  }
}

SelectModel.propTypes = {
  models: PropTypes.arrayOf(PropTypes.any),
  selectModel: PropTypes.func.isRequired,
};

SelectModel.defaultProps = {
  models: null,
};

export default SelectModel;

