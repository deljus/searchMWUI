import React, {Component} from 'react';

class AlertView extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: ""
        }
    }

    closeAlert(){
        this.setState({visible:"hide-alert"});
    }

    render() {
        return (
            <div className={ "alert alert-custom-sw " + this.props.type + " " + this.state.visible} role="alert">
                <span className="text"> {this.props.text} </span>
                <button onClick={ this.closeAlert.bind(this) } type="button" className="close"><span>×</span></button>
            </div>
        )
    }
}

export default AlertView;