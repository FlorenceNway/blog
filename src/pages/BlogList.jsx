/* eslint-disable no-console */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  Button,
  Grid,
  Table,
  TableCell,
  Loader,
  Segment,
  Dimmer,
} from 'semantic-ui-react';
import { getAllBlogs, deleteBlog } from '../services/blogAction';
import Layout from '../components/Layout';
import CreateButton from './components/CreateButton';
import DeleteModal from '../components/deleteModal/DeleteModal';
import { push } from '../services/router/routerAction';
import { logout } from '../services/auth/authAction';

class BlogList extends Component {
  state = {
    isOpen: false,
    selectedId: null,
  };

  componentDidMount() {
    this.props.getAllBlogs();
  }

  render() {
    console.log(this.props.blogs);
    const { isOpen } = this.state;
    const { blogs, isPending } = this.props;

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
              {isPending ? (
                <Segment>
                  <Dimmer active inverted>
                    <Loader inverted>Loading...</Loader>
                  </Dimmer>
                </Segment>
              ) : (
                <div>
                  <Button
                    floated="right"
                    onClick={() => {
                      this.props.logout(() => {
                        this.props.push('/');
                      });
                    }}
                  >
                    Logout
                  </Button>
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
                                onClick={
                                  () =>
                                    this.setState({
                                      isOpen: true,
                                      selectedId: index,
                                    })
                                  // onClick={() =>
                                  //   this.props.deleteBlog(index, () =>
                                  //     this.props.getAllBlogs()
                                  //   )
                                  // }
                                }
                              >
                                DELETE
                              </Button>
                              <Button
                                color="green"
                                attached="right"
                                onClick={() =>
                                  this.props.push(`/blog/update/${index}`)
                                }
                              >
                                Edit
                              </Button>
                            </TableCell>
                          </Table.Row>
                        );
                      })}
                    </Table.Body>
                  </Table>
                </div>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <DeleteModal
          isPending={isPending}
          isOpen={isOpen}
          onClose={() => this.setState({ isOpen: false })}
          onDelete={() =>
            this.props.deleteBlog(this.state.selectedId, () => {
              this.props.getAllBlogs();
              this.setState({ isOpen: false });
            })
          }
        />
      </Layout>
    );
  }
}
const mapStateToProps = ({ blogReducer }) => ({
  blogs: blogReducer.blogs,
  isPending: blogReducer.isPending,
});
export default connect(mapStateToProps, {
  getAllBlogs,
  deleteBlog,
  push,
  logout,
})(BlogList);
// connect(state,action)(component)
