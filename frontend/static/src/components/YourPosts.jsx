import React, { Component } from 'react';
// import divWithClassName from "react-bootstrap/es/utils/divWithClassName";

class YourPosts extends Component{
        render() {
        let natureposts = this.props.naturePosts.map(naturepost => <li><img key={naturepost.id} src={naturepost.upload} alt=""/></li>)
        let caption = this.props.naturePosts.map(naturepost => <li>{naturepost.caption}</li>)
        var natureUpload = this.props.naturePosts.map
        return(
            <ul>
                {natureposts}
                {caption}
            </ul>
        );
    }
}
export default YourPosts;
