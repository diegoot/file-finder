import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './ListSidebar.css';

class ListSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      isMobile: false //Means there's a toggle button
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth > 720) {
      this.setState({expanded: true});
    }
    else {
      this.setState({isMobile: true});
    }
  }

  toggle() {
    this.setState(state => ({expanded: !state.expanded}));
  }

  render() {
    const { expanded, isMobile } = this.state;
    const { tags } = this.props;
    const listClassName = classnames(
      'listSidebar-list',
      {
        'listSidebar-list--visible': expanded,
        'listSidebar-list--hidden': !expanded
      }
    );

    return (
      <div className="listSidebar">
        <div className={listClassName}>
          {tags.map((tag, index) => {
            return <div key={index} onClick={() => {this.props.getPage(tag.tag); if (isMobile) this.setState({expanded: false})}}>{`${tag.tag} (${tag.files})`}</div>
          })}
        </div>
        <span className="listSidebar-toggle" onClick={this.toggle}>&gt;</span>
      </div>
    );
  }
}

ListSidebar.propTypes = {
  tags: PropTypes.array.isRequired,
  getPage: PropTypes.func.isRequired,
};

export default ListSidebar;