import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class IndexLinks extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <ul className="list-group" >
                        <li className="list-group-item"><Link to={'/search'}>Search</Link></li>
                        <li className="list-group-item"><Link to='/search/moleculs'>Search moleculs</Link></li>
                        <li className="list-group-item"><Link to='/search/reacts'>Search reacts</Link></li>
                        <li className="list-group-item"><Link to='/refer/erf'>Not found</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default IndexLinks;

