import React, {Component} from 'react';
import SearchView from '../components/view/search-view';
import RedactorView from '../components/view/redactor-view';
import NewsImageView from '../components/view/news-image-view'
import axios from 'axios';
import api from '../core/api/api-request';
import { Redirect } from 'react-router'

class SearchContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: "",
            imageLink: "/img/search-1.png",
            redirect: false
        };
    }

    componentDidMount(){
    //    сдесь меняем state и выводим изображение в рандоме
    }

    submitForm(){

    }

    openModalTrigger(e) {
        if (this.state.visible === "") {
            this.setState({visible: "open-modal"});
        }
        else {
            this.setState({visible: ""});
        }
    }

    searchKeyPress(e) {
        if (e.key !== "Enter") {
            let query = this.refs.child.getQuery();
            console.log(query);
        }
    }

    setMRV(cml) {
        axios({
            method: 'post',
            url: api.createSearchTask,
            data: JSON.stringify({data:cml}),
            withCredentials: true
        })
            .then((response) => {
                console.log(response.data.task);
                this.setState({ redirect: response.data.task })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    validateMol() {

        let marvinSketcherInstance,
            that = this;

        window.MarvinJSUtil.getEditor("marvinjs-iframe")
            .then(
                (sketcherInstance) => {
                    marvinSketcherInstance = sketcherInstance;
                    marvinSketcherInstance.exportStructure("mrv")
                        .then((cml) => {
                            if (cml !== '<cml><MDocument></MDocument></cml>') {
                                that.setMRV(cml);
                            }
                            else {
                                console.log("Empty result");
                            }
                        },
                        error => {
                            console.log(error);
                        });
                    },
                error => {
                    console.log(error);
                });

    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to={{
                pathname: '/validate',
                search: '?task=' + this.state.redirect
            }} push/>;
        }
        return (
            <div className="container seach-container">
                <NewsImageView imageLink = { this.state.imageLink } />
                <SearchView openModal={this.openModalTrigger.bind(this)} searchKeyPress={this.searchKeyPress.bind(this)}
                           submitForm={this.submitForm.bind(this)} ref="child"/>
                <RedactorView closeModal={this.openModalTrigger.bind(this)} validateMol={this.validateMol.bind(this)}
                              visible={this.state.visible}/>
            </div> );
    }
}

export default SearchContainer;