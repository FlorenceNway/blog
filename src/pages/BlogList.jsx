/* eslint-disable no-console */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Button, Grid, Table, TableCell } from 'semantic-ui-react';
import { getAllBlogs, deleteBlog } from '../services/blogAction';
import Layout from '../components/Layout';
import CreateButton from './components/CreateButton';

class BlogList extends Component {
  componentDidMount() {
    this.props.getAllBlogs();
  }

  render() {
    console.log(this.props.blogs);
    const { blogs } = this.props;

    return (
      <Layout header="Blog List">
        <Grid padded>
          <Grid.Row>
            <Grid.Column>
              <CreateButton />
              {/* <CustomButton {...this.props}/> NO NEED TO pass props bcoz we use redux connected router */}
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
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {_.map(blogs, (blog, index) => {
                    return (
                      <Table.Row key={index}>
                        <Table.Cell>{index}</Table.Cell>
                        <Table.Cell>{blog?.name}</Table.Cell>
                        <Table.Cell>{blog?.title}</Table.Cell>
                        <Table.Cell>{blog?.description}</Table.Cell>
                        <TableCell>
                          <Button
                            color="red"
                            attached="left"
                            onClick={() => this.props.deleteBlog(index)}
                          >
                            DELETE
                          </Button>
                          <Button color="green" attached="right">
                            Edit
                          </Button>
                        </TableCell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}
const mapStateToProps = ({ blogReducer }) => ({
  blogs: blogReducer.blogs,
});
export default connect(mapStateToProps, { getAllBlogs, deleteBlog })(BlogList);
// connect(state,action)(component)
