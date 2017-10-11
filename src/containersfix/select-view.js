import React, { Component } from 'react';

class Select extends Component {

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){
        let value = event.target.value;

        this.props.values.filter((obj) => {
            if(obj.name === value){
                this.setState({value: obj});
                this.props.onChange(obj);
            }
        });
    }

    render() {
        const listItems = this.props.values.map((list) =>
            <option>{ list.name }</option>
        );
        return (
            <div className="form-group">
                <label htmlFor="sel1">Search for:</label>
                <select className="form-control" id="sel1" onChange={this.handleChange} >
                    { listItems }
                </select>
            </div>
        );
    }
}

export default Select;