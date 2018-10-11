import React from 'react';
import PropTypes from 'prop-types';
import ListSidebar from 'components/presentational/ListSidebar';
import ListMainContent from 'components/presentational/ListMainContent';
import './ListLayout.css';

const ListLayout = (props) => {
  const { list, getPage, setSelectedFile } = props;
  
  return (
    <div className="listLayout">
      <ListSidebar tags={list.tags} getPage={getPage} />
      <ListMainContent
        tagName={list.tagName}
        files={list.files}
        currentPage={list.currentPage}
        totalFiles={list.totalFiles}
        getPage={getPage}
        setSelectedFile={setSelectedFile}
      />
    </div>
  );
}

ListLayout.propTypes = {
  list: PropTypes.object.isRequired,
  getPage: PropTypes.func.isRequired,
  setSelectedFile: PropTypes.func.isRequired
};

export default ListLayout;