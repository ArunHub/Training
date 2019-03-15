import React, { Component } from 'react'
import { connect } from "react-redux";
import propTypes from "prop-types";

import { getAllPosts } from "../../../actions/events-actions";

class JphPostsList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.getAllPosts();
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
                            this.props.posts.map((post, idx) =>
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

JphPostsList.propTypes = {
    getAllPosts: propTypes.func.isRequired,
    posts: propTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    posts: state.postsReducer.posts
})

export default connect(mapStateToProps, { getAllPosts })(JphPostsList);