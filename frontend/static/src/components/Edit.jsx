import React, { Component } from 'react';
import './Form.css';


class EditPost extends Component{
  constructor(props){
    super(props);

    let post = props.post;

    this.state = {
      caption: post.post_caption,
      preview: post.nature_upload,
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleInput(event){
    let obj = {}

    obj[event.target.name] = event.target.value;

    this.setState(obj);
  };

  handleUpdate(event){
        this.props.update({file: this.state.file, imageCaption: this.state.caption})
    }

  handleDelete(event){

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
          <input id="enterCaption" type="text" placeholder='Enter Caption' value={this.state.caption} name='caption' onChange={this.handleInput}/>
          <button id="submitButton" className="btn btn-outline-info my-2 my-sm-0" onClick={this.handleUpdate} value="submit me">Save</button>
          <button id="submitButton" className="btn btn-outline-info my-2 my-sm-0" onClick={this.handleDelete}>Delete</button>
        </div>
      </form>
    );
  }
}


export default EditPost;
