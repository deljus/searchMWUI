import React, {Component} from 'react';
import queryString from 'query-string';
import axios from 'axios';
import api from '../../api/api-request';
import AlertView from '../view/alert-view';
import RedactorView from '../view/redactor-view';
import { Redirect } from 'react-router';
import Select from '../view/select-view';

class ValidateContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: "",
            visible: "",
            image: '/img/load.svg',
            cml: "",
            timeout: 1000,
            changed: false,
            searchType: false,
            list1: [],
            type: 0
        }
    }

    componentDidMount() {
        let str = queryString.parse(this.props.location.search);
        let count = 5;
        let that = this;
        function go(count) {
            axios({
                method: 'GET',
                url: api.prepareTask + str['task'],
                withCredentials: true
            }).then((response) => {
                that.setState({ cml: response.data.structures[0].data,
                                searchType:response.data.structures[0].type,
                task: response.data.task});
                that.importMRV();
                that.importModels();

            }).catch((error) => {
                console.log(error)
                // if(error && count){
                //     count--;
                //     setTimeout(() => {
                //         go(count);
                //     }, that.state.timeout);
                // }

            });
        }
        go(count);
    }

    importModels(){
        axios({
            method: 'GET',
            url: api.models,
            withCredentials: true
        }).then((response) => {
            let searchType = (this.state.searchType === 1 ? 3 : 4);
            let type = response.data.filter((obj) => {
                    return obj.type === searchType;
                });

                this.setState({list1: type});
        }).catch((error) => {
            console.log(error);
        });
    }

    importMRV() {
        var marvin;
        window.MarvinJSUtil.getPackage("marvinjs-iframe")
            .then(
                (marvinNameSpace) => {
                    marvinNameSpace.onReady(() => {
                        marvin = marvinNameSpace;
                        let base64 = marvin.ImageExporter.mrvToDataUrl(this.state.cml, "image/png", {
                            'width': 500,
                            'height': 350,
                            'zoomMode': 'autoshrink'
                        });
                        this.setState({image: base64})
                    });
                },
                error => {
                    console.log(error);
                });
    }

    exportMRV() {

        let marvinSketcherInstance,
            that = this;

        window.MarvinJSUtil.getEditor("marvinjs-iframe")
            .then(
                (sketcherInstance) => {
                    marvinSketcherInstance = sketcherInstance;
                    marvinSketcherInstance.importStructure("mrv", this.state.cml);
                },
                error => {
                    console.log(error);
                });
    }

    openModalTrigger() {
        if (this.state.visible === "") {
            this.setState({visible: "open-modal"});
            this.exportMRV();
        }
        else {
            this.setState({visible: ""});
        }
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
                                this.setState({changed: true});
                                this.setState({cml: cml});
                                this.importMRV();
                                this.openModalTrigger();
                            },
                            error => {
                                console.log(error);
                            });
                },
                error => {
                    console.log(error);
                }
            );
    }

    revalidate(){
        axios({
            method: 'post',
            url: api.createSearchTask,
            data: JSON.stringify({data:this.state.cml}),
            withCredentials: true
        })
            .then((response) => {
                this.setState({ task: response.data.task, type:3 });
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    search(){
        let that = this;
        axios({
            method: 'post',
            url: api.result + that.state.task,
            data: JSON.stringify({model:"Molecule Structure"}),
            withCredentials: true
        })
            .then((response) => {
                let searchType = this.state.searchType;
                that.setState({ task: response.data.task, type:searchType});
                //window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    logChange(val){
        console.log("Selected: " + val);
    }

    selectChange(){

    }

    render() {
        let { changed, type } = this.state,
            button;
        if (changed) {
            button = <button onClick={this.revalidate.bind(this)} className="btn btn-danger"><span className="glyphicon glyphicon-refresh"></span> Revalidate
            </button>
        }
        else {
            button =
                <button onClick={this.search.bind(this)} className="btn btn-primary"><span className="glyphicon glyphicon-search"></span> Search</button>
        }

        if(type === 1){
            return <Redirect to={{
                pathname: '/search/moleculs',
                search: '?task=' + this.state.task
            }} push />
        }else if(type === 2){
            return <Redirect to={{
                pathname: '/search/reacts',
                search: '?task=' + this.state.task
            }} push />
        }else if(type === 3){
            return <Redirect to={{
                pathname: '/validate',
                search: '?task=' + this.state.task
            }} push />
        }

        return (
            <div className="container container-search">
                <div className="row">

                    {/*<AlertView text="areaerraefaerfaref" type="alert-danger"/>*/}

                    <div className="col-md-6">
                        <span onClick={this.openModalTrigger.bind(this)} className="thumbnail">
                            <img style={{width: "500px", height: "350px"}} src={this.state.image}/>
                        </span>
                    </div>


                    <div className="col-md-6">
                        <Select values={ this.state.list1 } onChange = {this.selectChange.bind(this)} />
                    </div>

                    <div className="col-md-12 right">
                        { button }
                    </div>

                </div>

                <RedactorView closeModal={this.openModalTrigger.bind(this)} validateMol={this.validateMol.bind(this)}
                              visible={this.state.visible}/>

            </div>
        );
    }
}

export default ValidateContainer;
