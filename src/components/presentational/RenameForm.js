import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class RenameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { newName: (props.file && props.file.name) || null, isError: false };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const { newName, isError } = this.state;
    const { rename, file } = this.props;

    if (!isError) {
      rename(file.id, newName);
    }
  }

  onChange(e) {
    const newFileName = e.target.value.trim();

    this.setState({ newName: newFileName, isError: !Boolean(newFileName) });
  }

  render() {
    const { newName, isError } = this.state;
    const { file, renamed } = this.props;

    if (!file) return null;

    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" onChange={this.onChange} value={newName} />
        <button type="submit">Rename</button>
        {isError && <p>Name cannot be empty</p>}
        {renamed && <p>File was renamed</p>}
        <div>
          <Link to="/">Home</Link>
        </div>
      </form>
    );
  }
}

RenameForm.propTypes = {
  file: PropTypes.object,
  rename: PropTypes.func,
  renamed: PropTypes.bool
};

export default RenameForm;