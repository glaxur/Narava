import React, { Component } from 'react';
import NatureForm from '../components/Form';
import YourPosts from '../components/YourPosts';
import './App.css';


class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            memes: []
        }
        this._addPost = this._addPost.bind(this);
    }
    _addPost(dataObj) {
        console.log('meme', dataObj)
        let file = dataObj.file;
        let imageCaption = dataObj.imageCaption;

        let formData = new FormData();
        formData.append('nature_upload', file);
        formData.append('post_caption', imageCaption)

        fetch(`/api/post/`,{
            method: 'POST',
            body: formData
   }).then(response => response.json())
       .then(json => {
           console.log('Success', JSON.stringify(json))
           console.log(json)
       })
       .catch(error => console.log('Error', error))
    }

    componentDidMount() {
        fetch(`/api/post/`, {
            method: 'GET'
        }).then(response => {
            if(response.status === 200){
                return response.json()
                console.log("hey this is the get request", response)
            } else {
                throw new Error("Something's wrong.");
            }
        }).then(json => this.setState({memes: json}))
            .catch(error => console.log(error));
    }

    render() {
    return (
      <div className="App">
        <NatureForm addPost={this._addPost}/>
          <hr/>
        <YourPosts memes={this.state.memes}/>
      </div>
    );
  }
}
export default App;

