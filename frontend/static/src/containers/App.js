import React, { Component } from 'react';
import NatureForm from '../components/Form';
import YourPosts from '../components/YourPosts';
import EditPost from "../components/Edit";
import './App.css';


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            isEditing: false,
        }
        this._addPost = this._addPost.bind(this);
        this._doEdit = this._doEdit.bind(this);
        this._update = this._update.bind(this);
    }

    _doEdit(post){
        this.setState({isEditing: post});
    }

    _addPost(dataObj) {
        console.log('post', dataObj)
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


    _update(dataObj) {
    console.log('put', dataObj)
        let file = dataObj.file;
        let imageCaption = dataObj.imageCaption;

        let formData = new FormData();
        formData.append('nature_upload', file);
        formData.append('post_caption', imageCaption)

      fetch(`/api/post/`, {
        method: 'PUT',
        body: formData
   }).then(response => response.json())
        .then(json => {
         console.log('Put Success', JSON.stringify(json))
         console.log(json)
        })
        .catch(error => console.log('Error', error))
      this.setState({isEditing: false})
    }


    componentDidMount() {
        fetch(`/api/post/`, {
            method: 'GET'
        }).then(response => {
            if(response.status === 200){
                return response.json()
            } else {
                throw new Error("Something's wrong.");
            }
        }).then(json => this.setState({posts: json}))
            .catch(error => console.log(error));
    }

    render() {
      console.log(this.state.isEditing)
        return (
            <div className="App">

              {this.state.isEditing ? (
                <EditPost post={this.state.isEditing} update={this._update}/> ) : (
                  <div>
                    <NatureForm addPost={this._addPost}/>
                    <hr/>
                    <YourPosts posts={this.state.posts} edit={this._doEdit}/>
                  </div>
              )}
            </div>
        );
  }
}
export default App;

