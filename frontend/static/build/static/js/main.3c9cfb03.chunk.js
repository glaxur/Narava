(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,n){},,function(t,e,n){t.exports=n(19)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(9),s=n.n(o),c=(n(16),n(2)),l=n(3),r=n(5),u=n(4),d=n(6),p=n(1),h=(n(8),function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(r.a)(this,Object(u.a)(e).call(this,t))).state={caption:"",file:"",preview:null},n.handleInput=n.handleInput.bind(Object(p.a)(Object(p.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(Object(p.a)(n))),n.fileInput=i.a.createRef(),n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"handleInput",value:function(t){var e=this,n={};if("image"!==t.target.name)n[t.target.name]=t.target.value;else{var a=t.target.files[0];n.file=a,console.log({file:a});var i=new FileReader;i.onload=function(){return e.setState({preview:i.result})},i.readAsDataURL(a)}this.setState(n)}},{key:"handleSubmit",value:function(t){this.props.addPost({file:this.state.file,imageCaption:this.state.caption}),this.setState({caption:"",file:"",preview:null}),this.fileInput.current.value=""}},{key:"render",value:function(){return i.a.createElement("form",{id:"uploadForm",onSubmit:function(t){t.preventDefault()}},i.a.createElement("div",null,i.a.createElement("input",{ref:this.fileInput,id:"fileItem",type:"file",onChange:this.handleInput,name:"image"})),i.a.createElement("div",null,i.a.createElement("img",{id:"imagePreview",src:this.state.preview,alt:"",width:"400px",height:"450px"})),i.a.createElement("div",{id:"theCaption"},i.a.createElement("input",{id:"enterCaption",type:"text",placeholder:"Enter Caption",value:this.state.caption,name:"caption",onChange:this.handleInput}),i.a.createElement("button",{id:"submitButton",className:"btn btn-outline-info my-2 my-sm-0",onClick:this.handleSubmit,value:"submit me"},"POST")))}}]),e}(a.Component)),m=(n(17),function(t){function e(){return Object(c.a)(this,e),Object(r.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;console.log("posts",this.props.posts);var e=this.props.posts.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement("div",{className:"yourpostname"},i.a.createElement("h6",null,"@",e.user.username)),i.a.createElement("img",{src:e.nature_upload,alt:"",width:"500px",height:"550px"}),i.a.createElement("div",{id:"postcaption"},i.a.createElement("h4",{className:"yourpostscaption"},e.post_caption)),i.a.createElement("div",{id:"editPostB"},i.a.createElement("button",{className:"btn btn-outline-info my-2 my-sm-0",id:"editPostButton",onClick:function(){return t.props.edit(e)}},"Edit")),i.a.createElement("div",{id:"map"},i.a.createElement("a",{href:"/map/".concat(e.id,"/"),className:"btn btn-outline-info my-2 my-sm-0"},"See Location")),i.a.createElement("hr",null))});return i.a.createElement("div",{id:"usersposts"},i.a.createElement("h1",null,"Your Posts"),i.a.createElement("ul",null,e))}}]),e}(a.Component)),f=function(t){function e(t){var n;Object(c.a)(this,e),n=Object(r.a)(this,Object(u.a)(e).call(this,t));var a=t.post;return n.state={caption:a.post_caption,preview:a.nature_upload},n.handleInput=n.handleInput.bind(Object(p.a)(Object(p.a)(n))),n.handleUpdate=n.handleUpdate.bind(Object(p.a)(Object(p.a)(n))),n.handleDelete=n.handleDelete.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"handleInput",value:function(t){var e={};e[t.target.name]=t.target.value,this.setState(e)}},{key:"handleUpdate",value:function(t){t.preventDefault(),this.props.update({post_caption:this.state.caption,nature_upload:this.state.preview})}},{key:"handleDelete",value:function(t){this.props.delete()}},{key:"render",value:function(){return console.log(this.props.post),i.a.createElement("form",{id:"uploadForm",onSubmit:function(t){t.preventDefault()}},i.a.createElement("h1",{id:"editPostText"},"EDIT POST"),i.a.createElement("hr",null),i.a.createElement("div",null,i.a.createElement("img",{id:"imagePreview",src:this.state.preview,alt:"",width:"400px",height:"450px"})),i.a.createElement("div",{id:"theCaption"},i.a.createElement("input",{id:"enterCaption",type:"text",placeholder:"Enter Caption",value:this.state.caption,name:"caption",onChange:this.handleInput}),i.a.createElement("button",{id:"submitButton",className:"btn btn-outline-info my-2 my-sm-0",onClick:this.handleUpdate,value:"submit me"},"Save"),i.a.createElement("button",{id:"submitButton",className:"btn btn-outline-info my-2 my-sm-0",onClick:this.handleDelete},"Delete")))}}]),e}(a.Component),b=(n(18),function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(r.a)(this,Object(u.a)(e).call(this,t))).state={posts:[],isEditing:!1},n._addPost=n._addPost.bind(Object(p.a)(Object(p.a)(n))),n._doEdit=n._doEdit.bind(Object(p.a)(Object(p.a)(n))),n._update=n._update.bind(Object(p.a)(Object(p.a)(n))),n._delete=n._delete.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"_doEdit",value:function(t){this.setState({isEditing:t})}},{key:"_addPost",value:function(t){var e=this;console.log("post",t);var n=t.file,a=t.imageCaption,i=new FormData;i.append("nature_upload",n),i.append("post_caption",a),fetch("/api/post/",{method:"POST",body:i}).then(function(t){return t.json()}).then(function(t){console.log("Success",JSON.stringify(t)),console.log(t);var n=e.state.posts;n.push(t),e.setState({posts:n})}).catch(function(t){return console.log("Error",t)})}},{key:"_update",value:function(t){var e={post_caption:t.post_caption};fetch("api/post/".concat(this.state.isEditing.id,"/update/"),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({newData:e})}).then(function(t){return t.json()}).then(function(t){console.log("Put Success",JSON.stringify(t)),console.log(t),console.log({newData:e})}).catch(function(t){return console.log("Error",t)}),this.setState({isEditing:!1})}},{key:"_delete",value:function(){fetch("api/post/".concat(this.state.isEditing.id,"/delete/"),{method:"DELETE"}).then(function(t){return t.json()}).then(function(t){console.log("delete Success",JSON.stringify(t)),console.log(t)}).catch(function(t){return console.log("Error",t)}),this.setState({isEditing:!1})}},{key:"componentDidMount",value:function(){var t=this;fetch("/api/post/",{method:"GET"}).then(function(t){if(200===t.status)return t.json();throw new Error("Something's wrong.")}).then(function(e){return t.setState({posts:e})}).catch(function(t){return console.log(t)})}},{key:"render",value:function(){return console.log(this.state.isEditing),i.a.createElement("div",{className:"App"},this.state.isEditing?i.a.createElement(f,{post:this.state.isEditing,update:this._update,delete:this._delete,cancel:this._cancel}):i.a.createElement("div",null,i.a.createElement(h,{addPost:this._addPost}),i.a.createElement(m,{posts:this.state.posts,edit:this._doEdit})))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.3c9cfb03.chunk.js.map