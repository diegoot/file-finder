import React from 'react';
import PropTypes from 'prop-types';
import ListSidebar from 'components/presentational/ListSidebar';
import ListMainContent from 'components/presentational/ListMainContent';

class ListLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isSidebarExpanded: false};

    this.setSidebarExpanded = this.setSidebarExpanded.bind(this);
  }

  setSidebarExpanded(isSidebarExpanded) {
    this.setState({isSidebarExpanded});
  }

  render() {
    const { list, getPage, setSelectedFile } = this.props;
    const { isSidebarExpanded } = this.state;

    return (
      <React.Fragment>
        <ListSidebar tags={list.tags} getPage={getPage} onToggle={this.setSidebarExpanded} />
        <ListMainContent
          tagName={list.tagName}
          files={list.files}
          currentPage={list.currentPage}
          totalFiles={list.totalFiles}
          getPage={getPage}
          setSelectedFile={setSelectedFile}
          fullWidth={!isSidebarExpanded}
        />
      </React.Fragment>
    );
  }
}

ListLayout.propTypes = {
  list: PropTypes.object.isRequired,
  getPage: PropTypes.func.isRequired,
  setSelectedFile: PropTypes.func.isRequired
};

export default ListLayout;