import React, { Component } from 'react';
// import divWithClassName from "react-bootstrap/es/utils/divWithClassName";

class AllPosts extends Component{
render() {
    console.log('posts', this.props.posts)
    let posts = this.props.posts.map(post => {
      return (
        <li key={post.id}>
          <h6>{post.user}</h6>
          <img src={post.nature_upload} alt="" width='500px' height='550px'/>
          <h4>{post.post_caption}</h4>
            <button className="btn btn-outline-info my-2 my-sm-0" id="map">See Location</button>
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
export default AllPosts;