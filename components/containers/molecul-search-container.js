import React, {Component} from 'react';
import MoleculSearchView from '../view/moleculs-seaching-view';
import SearchContainer from './search-container';

class MoleculSearchContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
          moleculs:[
              { img:'img/1.png'},
              { img: 'img/2.png'},
              { img: 'img/3.png'}
          ]
        };
    }

    render(){
        return(
            <div className="container">
                <div className="search-container">
                    <SearchContainer/>
                </div>
                {this.state.moleculs.map((molecul,index) => {
                    return (
                        <div key={index}>
                            <MoleculSearchView index={index} img={molecul.img}/>
                            <hr/>
                        </div>
                    );
                })}

            </div>
        )
    }
}

export default MoleculSearchContainer;