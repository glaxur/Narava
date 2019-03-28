import React, {Component} from 'react';
import NatureForm from '../components/Form';
import YourPosts from '../components/YourPosts';
import EditPost from "../components/Edit";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      isEditing: false,
    }
    this._addPost = this._addPost.bind(this);
    this._doEdit = this._doEdit.bind(this);
    this._update = this._update.bind(this);
    this._delete = this._delete.bind(this);
  }

  _doEdit(post) {
    this.setState({isEditing: post});
  }

  _addPost(dataObj) {
    console.log('post', dataObj)
    let file = dataObj.file;
    let imageCaption = dataObj.imageCaption;

    let formData = new FormData();
    formData.append('nature_upload', file);
    formData.append('post_caption', imageCaption)

    fetch(`/api/post/`, {
      method: 'POST',
      body: formData
    }).then(response => response.json())
      .then(json => {
        console.log('Success', JSON.stringify(json))
        console.log(json)
        let posts = this.state.posts
        posts.push(json)
        this.setState({posts: posts})
      })
      .catch(error => console.log('Error', error))
  }


  _update(dataObj) {
    let newData = {
      'post_caption': dataObj.post_caption
    }

    fetch(`/api/post/${this.state.isEditing.id}/update/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({newData})
    }).then(response => response.json())
      .then(json => {
        console.log('Put Success', JSON.stringify(json))
        console.log(json)

        console.log({'newData': newData})

        let posts = [...this.state.posts];
        let index = posts.indexOf(this.state.isEditing);

        posts[index].post_caption = dataObj.post_caption;
        this.setState({posts, isEditing: false});
        // this.setState({isEditing: false});

      })
      .catch(error => console.log('Error', error))

  }


  _delete(post) {

    fetch(`/api/post/${post.id}/delete/`, {
      method: 'DELETE',
    }).then((response) => {
      let posts = [...this.state.posts];
      let index = posts.indexOf(post);

      console.log('post', post);
      console.log('posts', posts);
      console.log('index', index);

      posts.splice(index, 1);
      console.log('posts now', posts);
      this.setState({posts});

    })
      .catch(error => console.log('Error', error))

  }


  componentDidMount() {
    fetch(`/api/post/`, {
      method: 'GET'
    }).then(response => {
      if (response.status === 200) {
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
          <EditPost post={this.state.isEditing} update={this._update} delete={this._delete} cancel={this._cancel}/>) : (
          <div>
            <NatureForm addPost={this._addPost}/>
            <YourPosts posts={this.state.posts} edit={this._doEdit} delete={this._delete}/>
          </div>
        )}
      </div>
    );
  }
}

export default App;

