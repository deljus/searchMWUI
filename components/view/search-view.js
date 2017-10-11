import React, {Component} from 'react'

class SearchView extends Component {

    getQuery() {
        return this.refs.inputSearch.value;
    }

    render() {
        return (
            <div className="row">
                <div className="input-group input-group-lg">
                    <input onKeyPress={this.props.SearchKeyPress} ref="inputSearch" type="text" className="form-custom" placeholder="Search for..."/>

                <div className="input-group-btn input-group-lg">
                    <button onClick={this.props.openModal} className="btn btn-default btn-left-right">
                    <span className="glyphicon glyphicon-picture"></span>
                </button>
                         <button onClick={this.props.submitForm} id="btn-searh" className="btn  btn-primary " type="submit">
                            <span className="glyphicon glyphicon-search"></span>
                        </button>
                </div>
                </div>
            </div>
        );
    }
}

export default SearchView;
