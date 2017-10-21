import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { cmlToBase64 } from '../core/marvinAPI';
import { MARVIN_EDITOR_IS_EMPTY } from '../config';

// const getBase64 = (cml) => {
//     cmlToBase64(cml,
//         (base64) =>
//         )
// }

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base64: '',
    };
  }

  componentDidMount() {
    cmlToBase64(this.props.cml,
      base64 =>
        this.setState({ base64 }),
    );
  }

  render() {
    return (
      <span
        onClick={() => this.props.onClickImage(this.props.cml)}
        className="thumbnail"
      >
        <img
          style={{ width: '700px', height: '500px' }}
          src={this.state.base64}
        />
      </span>
    );
  }
}

Thumbnail.propTypes = {
  cml: PropTypes.string,
  onClickImage: PropTypes.func.isRequired,
};

Thumbnail.defaultProps = {
  cml: MARVIN_EDITOR_IS_EMPTY,
};

export default Thumbnail;
