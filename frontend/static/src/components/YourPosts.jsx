import React, { Component } from 'react';
import './YourPosts.css';

class YourPosts extends Component{

  render() {
    console.log('posts', this.props.posts)
    let posts = this.props.posts.map(post => {
      console.log('here we are', post)
      return (
        <li key={post.id}>
          <div className="yourpostname">
            <h6>@{post.user.username}</h6>
          </div>
          <img src={post.nature_upload} alt=""/>
          <div id="postcaption">
            <h4 className="yourpostscaption">{post.post_caption}</h4>
          </div>
          <div id="editPostB">
            <button className="btn btn-outline-info my-2 my-sm-0" id="editPostButton" onClick={() => this.props.edit(post)}>Edit</button>
            <button className="btn btn-outline-info my-2 my-sm-0" id="editPostButton" onClick={() => this.props.delete(post)}>Delete</button>
          </div>
          <div id='map'>
            <a href={`/map/${post.id}/`} className="btn btn-outline-info my-2 my-sm-0">See Location</a>
          </div>
          <hr/>
        </li>
      );
    });

    return(
      <div id="usersposts">
        <h1>Your Posts</h1>
        <ul>
          {posts}
        </ul>
      </div>
    );
  }
}

export default YourPosts;
