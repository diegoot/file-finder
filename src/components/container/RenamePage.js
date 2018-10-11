import React from 'react';
import { connect } from 'react-redux';
import { renameFile, resetRename } from 'redux/actions/rename';
import RenameForm from 'components/presentational/RenameForm';
import { bindActionCreators } from 'redux';

class RenamePage extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;

    dispatch(resetRename());

    this.rename = bindActionCreators(renameFile, dispatch);
  }

  render() {
    const {list: {file}, rename} = this.props;

    return <RenameForm file={file} rename={this.rename} renamed={rename.isRenamed}></RenameForm>
  }
}

const mapStateToProps = state => {
  return {
    list: state.list,
    rename: state.rename
  }
};

export default connect(mapStateToProps)(RenamePage);