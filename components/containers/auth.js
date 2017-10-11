import React, {Component} from 'react';
import api from '../../api/api-request';
import axios from 'axios';

class AuthContainer extends Component {

    auth(){
        axios({
            method: 'post',
            url: api.authSite,
            data: {
                'user': 'musindelus@gmail.com',
                'password': '84848b9b'
            }
            }
        )
    }

    render(){
        return(
            <div className="container">
                <button onClick={this.auth}>Auth</button>
            </div>
        )
    }
}

export default AuthContainer;