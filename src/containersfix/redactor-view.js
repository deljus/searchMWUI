import React, {Component} from 'react';

class RedactorView extends Component {
    render() {
        return (
            <div id="myModal" className={'predictor-modal ' + this.props.visible }>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content modal-content-custom">
                        <div className="modal-header">
                            <button onClick={this.props.closeModal} type="button" className="close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <iframe id="marvinjs-iframe" data-toolbars="reaction" type="text/html" src="/marvinjs/editorws.html"></iframe>

                        </div>
                        <div className="modal-footer">
                            <button onClick={this.props.validateMol} className="btn btn-primary" type="button">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RedactorView;
