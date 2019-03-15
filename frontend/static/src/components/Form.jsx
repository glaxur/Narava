import React, { Component } from 'react';
import './Form.css';


class NatureForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            caption: '',
            file: '',
            preview: null
        }
        this._handleInput = this._handleInput.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);

    }
    _handleInput(event){
        let obj = {}

        if(event.target.name !== 'image'){
            obj[event.target.name] = event.target.value;
        }else{
            let file = event.target.files[0];
            obj.file = file;

            let fileReader = new FileReader()
            fileReader.onload = () => this.setState({preview: fileReader.result});
            fileReader.readAsDataURL(file);
        }

        this.setState(obj);
    };

    _handleSubmit(event){
        this.props.addPost({file: this.state.file, imageCaption: this.state.caption})
    }

    render() {
        return(
            <form id="uploadForm"onSubmit={e =>{e.preventDefault(); }}>
                <div>
                    <input id="fileItem" type="file" onChange={this._handleInput} name="image"/>
                </div>
                <div>
                    <img id="imagePreview" src={this.state.preview} alt="" width='400px' height='450px'/>
                </div>
                <div id="theCaption">
                    <input id="enterCaption" type="text" placeholder='Enter Caption' value={this.state.caption} name='caption' onChange={this._handleInput}/>
                    <button id="submitButton" className="btn btn-outline-info my-2 my-sm-0" onClick={this._handleSubmit} value="submit me">POST</button>
                </div>
            </form>
        );
    }
}


export default NatureForm;