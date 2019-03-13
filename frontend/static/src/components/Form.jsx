import React, { Component } from 'react';
import './Form.css';
import { Form } from 'react-bootstrap';


class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: '', imageCaption: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

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
      $imagePreview = (<img src={imagePreviewUrl} width='300px' height='350px'/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
        <div id='wholeForm'>
            <div id="previewComponent">
                <form id='chooseFile' onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="fileInput" type="file"
                           onChange={(e)=>this._handleImageChange(e)} />
                </form>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
            </div>
                <Form id="wholeImageCaption">
                    <Form.Group controlId="formBasicCaption" id='formBasicCaption'>
                        <Form.Control type="caption" placeholder="Enter caption" />
                        <Form.Text className="text-muted"></Form.Text>
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