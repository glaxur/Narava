// import React, { Component } from 'react';
// import './App.css';
// import ImageUpload from '../components/Form';
// import YourPosts from '../components/YourPosts';
// import AllPosts from '../components/AllPosts';
//
//
// class App extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             naturePosts: [],
//         }
//
//         this._addPost = this._addPost.bind(this);
//     }
//
//     _addPost(dataObj){
//         console.log('naturepost', dataObj)
//         let file = dataObj.file;
//         let imageCaption = dataObj.imageCaption;
//
//         let formData = new FormData();
//         formData.append('upload', file);
//         formData.append('imageCaption', imageCaption)
//
//         fetch(`${process.env.REACT_APP_API_HOST}/api/post/`,{
//             method: 'POST',
//             body: formData
//         }).then(response => response.json())
//             .then(json => {
//                 console.log('Success', JSON.stringify(json))
//             // console.log(json)
//                 })
//             .catch(error => console.log('Error', error))
//     }
//
//     componentDidMount() {
//         fetch(`${process.env.REACT_APP_API_HOST}/api/post/`, {
//             method: 'GET'
//         }).then(response => {
//             if(response.status === 200){
//                 return response.json()
//             } else {
//                 throw new Error("Something's wrong.");
//             }
//         }).then(json => this.setState({naturePosts: json}))
//             .catch(error => console.log(error));
//     }
//
//
//     render() {
//     return (
//       <div className="App">
//           <ImageUpload addPost={this._addPost}/>
//           <YourPosts natureposts={this.state.naturePosts}/>
//           <AllPosts/>
//       </div>
//     );
//   }
// }
//
// export default App;
import React, { Component } from 'react';
import MemeForm from '../components/Form';
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
        formData.append('upload', file);
        formData.append('caption', imageCaption)

        fetch(`${process.env.REACT_APP_API_HOST}/api/post/`,{
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
        fetch(`${process.env.REACT_APP_API_HOST}/api/post/`, {
            method: 'GET'
        }).then(response => {
            if(response.status === 200){
                return response.json()
            } else {
                throw new Error("Something's wrong.");
            }
        }).then(json => this.setState({memes: json}))
            .catch(error => console.log(error));
    }


    render() {
    return (
      <div className="App">
        <MemeForm addPost={this._addPost}/>
        <YourPosts memes={this.state.memes}/>
      </div>
    );
  }
}

export default App;

