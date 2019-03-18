
import React, { Component } from 'react';

class YourPosts extends Component{
    render() {
        let memes = this.props.memes.map(meme => <li><img key={meme.id} src={meme.upload} alt=""/></li>)
        let caption = this.props.memes.map(meme => <li>{meme.caption}</li>)
        var memeUpload = this.props.memes.map
        console.log('caption', caption, 'memes', memes)
        return(
            <ul>
                <li>
                    {caption}
                    {memes}
                </li>
            </ul>
        );
    }
}

export default YourPosts;
