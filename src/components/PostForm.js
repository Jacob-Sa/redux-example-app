import React, { Component } from 'react'
import Axios from 'axios'

class PostForm extends Component {
    constructor(props){
        super(props)
        this.state={
            title:"",
            body:""
        }
    }

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    onSubmit=(e)=>{
        e.preventDefault();
        // const post={
        //     title:this.state.title,
        //     body:this.state.body
        // }
        // console.log(post);
        
        Axios.post('https://jsonplaceholder.typicode.com/posts', {title:this.state.title, body:this.state.body})
        .then(res=>console.log(res.data))
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit} >
                    <div>
                        <label>Title:</label><br/>
                        <input type ="text" name="title" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <br/>
                    <div>
                        <label>Body:</label><br/>
                        <textarea name="body" onChange={this.onChange} value={this.state.body} />
                    </div>
                    <br/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

export default PostForm
