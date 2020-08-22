
import React, { Component } from "react";
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {getAllBlogs} from '../services/blogAction';
import _ from 'lodash';
import { Button, Grid, Table } from "semantic-ui-react";
import styles from './blogList.module.scss';
import classNames from 'classnames';
import CustomButton from "./components/CustomButton";

class BlogList extends Component {

    componentDidMount() {
        this.props.getAllBlogs();
    }

    render() {
        console.log(this.props.blogs)
        const {blogs} = this.props

        return (
          <div className={classNames(styles.layout, styles.layoutPadding)}>
            <Grid padded>
              <Grid.Row>
                <Grid.Column>
                  <CustomButton {...this.props}/>
                  {/* <Link to="/blog/new">
                    <Button color="orange">New blog</Button>
                  </Link> */}
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <h3>Blog List</h3>
                  <Table>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Categories</Table.HeaderCell>
                        <Table.HeaderCell>Content</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {_.map(blogs, (blog, index) => {
                        return (
                          <Table.Row key={blog.id}>
                            <Table.Cell>{index + 1}</Table.Cell>
                            <Table.Cell>{blog?.title}</Table.Cell>
                            <Table.Cell>{blog?.categories}</Table.Cell>
                            <Table.Cell>{blog?.content}</Table.Cell>
                          </Table.Row>
                        );
                      })}
                    </Table.Body>
                  </Table>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        );
    }
}
const mapStateToProps = ({blogReducer}) => ({
    blogs: blogReducer.blogs
})
export default connect(mapStateToProps,{getAllBlogs}) (BlogList);
//connect(state,action)(component)