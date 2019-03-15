// import React, { Component } from 'react';
// // import divWithClassName from "react-bootstrap/es/utils/divWithClassName";
//
// class YourPosts extends Component{
//         render() {
//         let natureposts = this.props.naturePosts.map(naturepost => <li><img key={naturepost.id} src={naturepost.upload} alt=""/></li>)
//         let caption = this.props.naturePosts.map(naturepost => <li>{naturepost.caption}</li>)
//         var natureUpload = this.props.naturePosts.map
//         return(
//             <ul>
//                 {natureposts}
//                 {caption}
//             </ul>
//         );
//     }
// }
// export default YourPosts;
import React, { Component } from 'react';

class YourPosts extends Component{
    render() {
        let memes = this.props.memes.map(meme => <li><img key={meme.id} src={meme.upload} alt=""/></li>)
        let caption = this.props.memes.map(meme => <li>{meme.caption}</li>)
        var memeUpload = this.props.memes.map
        return(
            <ul>
                {caption}
                {memes}
            </ul>
        );
    }
}

export default YourPosts;
