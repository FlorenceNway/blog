
import React, { Component } from "react";
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {getAllBlogs} from '../services/blogAction';
import _ from 'lodash';


class BlogList extends Component {

    componentDidMount() {
        this.props.getAllBlogs();
    }

    render() {
        //console.log(this.props.blogs)
        const {blogs} = this.props
        return (
          <div className="p-5">
            <div className="text-right">
              <Link to="/blog/new" className="btn btn-primary">
                New blog
              </Link>
            </div>

            <div>
              <h3>Blog List</h3>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Categories</th>
                    <th>Content</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        _.map(blogs,(blog, index) => {
                            return (
                                <tr key={blog.id}>
                                    <td>{index + 1}</td>
                                    <td>{blog?.title}</td>
                                    <td>{blog?.categories}</td>
                                    <td>{blog?.content}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
              </table>
            </div>
          </div>
        );
    }
}
const mapStateToProps = ({blogReducer}) => ({
    blogs: blogReducer.blogs
})
export default connect(mapStateToProps,{getAllBlogs}) (BlogList);
//connect(state,action)(component)