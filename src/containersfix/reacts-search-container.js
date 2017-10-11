import React, {Component} from 'react';
import SearchView from '../components/view/search-view';
import ReactSearch from '../components/view/reactions-searching-view';

class ReactsSearchContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            reacts:[
                {ergergerg:'ergergerg'},
                {ergergewef: 'ewrgegerg'},
                {ergergerger: 'ergerey'}
                ]
        }
    }

    render(){
        return (
            <div className="container">
                <div className="search-container">
                  <SearchView/>
              </div>

              {this.state.reacts.map(function (react, index) {
                  return(
                      <div>
                          <ReactSearch index={index}/>
                          <hr/>
                      </div>
                      )

              })
              }
          </div>
        );
    }
}

export default ReactsSearchContainer;
