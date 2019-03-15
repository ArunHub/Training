import React, { Component } from 'react'

export default class JphPostsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        this.getAllJphPosts().then(
            response => response.json(),
            reason => reason
        ).then(
            posts => this.setState({
                posts
            }),
            reason => console.log(reason)
        )
    }
    getAllJphPosts() {
        return fetch("https://jsonplaceholder.typicode.com/posts")
    }
    render() {
        let title = "Json Placeholder posts list";
        return (
            <div>
                <h1>{title}</h1>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Post Id</th>
                            <th>Post Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.posts.map((post, idx)=> 
                        <tr key={idx}>
                            <td>{post.userId}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
