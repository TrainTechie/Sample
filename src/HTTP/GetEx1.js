import axios from 'axios'
import React, { Component } from 'react'

export default class GetEx1 extends Component {
    constructor(props) {
      super(props)
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            this.setState({posts:res.data})
            console.log(res)
        }) 
    }
  render() {
    const {posts}=this.state
    return (
      <div>GetEx1
      <table>
  <tr>
    <th style={{paddingRight:70}}>UserId</th>
    <th style={{paddingRight:70}}>Title</th>
    <th style={{paddingRight:70}}>Body-Post</th>
  </tr>
 
 
</table>
      {posts.map((post)=>{
        return(
        <tr>
        <td >{post.userId}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
      </tr>)
      }
      )}
      </div>
    )
  }
}
