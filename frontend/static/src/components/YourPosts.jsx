import React, { Component } from 'react';
import './YourPosts.css';

class YourPosts extends Component{

  render() {
    console.log('posts', this.props.posts)
    let posts = this.props.posts.map(post => {
      return (
        <li key={post.id}>
          <h6>{post.user}</h6>
          <img src={post.nature_upload} alt="" width='500px' height='550px'/>
          <h4>{post.post_caption}</h4>
          <div id="editPostB">
            <button className="btn btn-outline-info my-2 my-sm-0" id="editPostButton" onClick={() => this.props.edit(post)}>Edit</button>
          </div>
          <div id='map'>
            <a href="" className="btn btn-outline-info my-2 my-sm-0">See Location</a>
          </div>
          <hr/>
        </li>
      );
    });

    return(
      <div>
        <h1>Your Posts</h1>
        <ul>
          {posts}
        </ul>
      </div>
    );
  }
}

export default YourPosts;
