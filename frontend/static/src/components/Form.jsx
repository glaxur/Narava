import React, { Component } from 'react';
import './Form.css';
import { Form } from 'react-bootstrap';


class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
        file: '',
        imagePreviewUrl: null,
        imageCaption: '',
    }
    this._handleInput = this._handleInput(this);
    this._handleSubmit = this._handleSubmit(this)
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.addPost({file: this.state.file, imageCaption: this.state.imageCaption})
    console.log(this.state.file, this.state.imageCaption);
  }

  _handleInput(e) {
    e.preventDefault();

    // let obj = {}

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} width='400px' height='450px'/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
        <div id='wholeForm'>
            <div id="previewComponent">
                <form id='chooseFile' onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="fileInput" type="file"
                           onChange={(e)=>this._handleInput(e)} />
                </form>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
            </div>
                <Form id="wholeImageCaption">
                    <Form.Group controlId="formBasicCaption" id='formBasicCaption'>
                        <Form.Control type="caption" placeholder="Enter caption"/>
                        <Form.Text className="text-muted" value={this.state.imageCaption}></Form.Text>
                    </Form.Group>
                </Form>
            <div>
                <button className="btn btn-outline-info my-2 my-sm-0" type="submit"
                            onClick={(e)=>this._handleSubmit(e)}>POST</button>
            </div>
        </div>
    )
  }
}

export default ImageUpload;