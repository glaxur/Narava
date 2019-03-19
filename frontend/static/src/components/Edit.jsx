import React, { Component } from 'react';
import './Form.css';


class EditPost extends Component{
    constructor(props){
        super(props);

        let post = props.post;

        this.state = {
            caption: post.caption,
            file: post.file,
            preview: post.preview,
        }
        this._handleInput = this._handleInput.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);

    }
    _handleInput(event){
        let obj = {}

        obj[event.target.name] = event.target.value;

        this.setState(obj);
    };

    _handleSubmit(event){
        this.props.addPost({imageCaption: this.state.caption})
    }

    _handleDelete(event){

    }


    render() {
        return(
            <form id="uploadForm"onSubmit={e =>{e.preventDefault(); }}>
                <h1 id="editPostText">EDIT POST</h1>
                <hr/>
                <div>
                    <img id="imagePreview" src={this.state.preview} alt="" width='400px' height='450px'/>
                </div>
                <div id="theCaption">
                    <input id="enterCaption" type="text" placeholder='Enter Caption' value={this.state.caption} name='caption' onChange={this._handleInput}/>
                    <button id="submitButton" className="btn btn-outline-info my-2 my-sm-0" onClick={this._handleSubmit} value="submit me">Save</button>
                    <button id="submitButton" className="btn btn-outline-info my-2 my-sm-0" onClick={this._handleDelete}>Delete</button>
                </div>
            </form>
        );
    }
}


export default EditPost;
