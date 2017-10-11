import React, {Component} from 'react';

class MoleculSearchView extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                     <span className="float-left">{this.props.index + 1}</span>
                     <img className="img-responsive img-hover float-left" src={this.props.img} alt="" />
                </div>
                <div className="col-md-9">
                    <ul className="nav nav-tabs">
                        <li role="presentation" className="active"><a href="#">Properties</a></li>
                        <li role="presentation"><a href="#">NMP</a></li>
                        <li role="presentation"><a href="#">IR</a></li>
                    </ul>
                    <p>The name setting tells which group of radio buttons the field belongs to. When you select one button, all other buttons in the same group are unselected.
                        If you couldn't define which group the current button belongs to, you could only have one group of radio buttons on each page.</p>
                </div>
            </div>
        )
    }
}

export default MoleculSearchView;