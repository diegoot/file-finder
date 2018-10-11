import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Pagination from "react-js-pagination";
import './ListMainContent.css';

class ListMainContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { shouldRedirect: false };
  }

  onFileClick(file) {
    const { setSelectedFile } = this.props;

    this.setState({shouldRedirect: true});
    setSelectedFile(file.id, file.name);
  }

  render() {
    const { files, tagName, currentPage, totalFiles, getPage } = this.props;
    const { shouldRedirect } = this.state;

    return (
      <div className="listMainContent">
        {files.map(file => {
          return <div key={file.id} onClick={() => this.onFileClick(file)}>{file.name}</div>
        })}
        {
          files.length > 0 &&
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={10}
              totalItemsCount={totalFiles}
              pageRangeDisplayed={4}
              onChange={(pageNumber) => getPage(tagName, pageNumber)}
              itemClass="listMainContent-page"
            />
        }
        {shouldRedirect ? <Redirect to="/rename" /> : null}
      </div>
    );
  }
}

ListMainContent.propTypes = {
  tagName: PropTypes.string,
  files: PropTypes.array.isRequired,
  currentPage: PropTypes.number,
  totalFiles: PropTypes.number,
  getPage: PropTypes.func,
  setSelectedFile: PropTypes.func
};

export default ListMainContent;