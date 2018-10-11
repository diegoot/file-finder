import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTags, getPage, setSelectedFile } from 'redux/actions/list';
import ListLayout from 'components/presentational/ListLayout';

class ListPage extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    this.getPage = bindActionCreators(getPage, dispatch);
    this.setSelectedFile = bindActionCreators(setSelectedFile, dispatch);
  }

  componentDidMount() {
    const { dispatch, list } = this.props;

    dispatch(getTags());
    this.getPage(list.tagName, list.currentPage);
  }

  render() {
    const { list } = this.props;

    return <ListLayout list={list} getPage={this.getPage} setSelectedFile={this.setSelectedFile} />;
  }
}

const mapStateToProps = state => {
  return {
    list: state.list
  }
};

export default connect(mapStateToProps)(ListPage);