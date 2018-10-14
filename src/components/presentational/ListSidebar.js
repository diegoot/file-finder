import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { MOBILE_BREAKPOINT } from 'utils/constants';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import './ListSidebar.css';

class ListSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
      isMobile: false, //Means there's a toggle button
      activeIndex: null
    };

    this.toggle = this.toggle.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  onResize() {
    let isMobile = false;
    let isExpanded = true;

    if (window.innerWidth < MOBILE_BREAKPOINT) {
      isMobile = true;
      isExpanded = false;
    }

    this.setState(
      {isMobile, isExpanded},
      () => {
        this.props.onToggle(isExpanded);
      }
    );
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  toggle() {
    this.setState(
      state => ({isExpanded: !state.isExpanded}),
      () => {
        this.props.onToggle(this.state.isExpanded)
      }
    );
  }

  render() {
    const { isExpanded, isMobile, activeIndex } = this.state;
    const { tags } = this.props;
    const listClassName = classnames(
      'listSidebar-list',
      {
        'listSidebar-list--visible': isExpanded,
        'listSidebar-list--hidden': !isExpanded
      }
    );
    const togglerClassName = classnames(
      'listSidebar-toggler',
      {
        'listSidebar-toggler--right': isExpanded,
        'listSidebar-toggler--left': !isExpanded
      }
    );

    return (
      <div className="listSidebar">
        <ListGroup className={listClassName}>
          {tags.map((tag, index) => {
            return (
              <ListGroupItem
                key={index}
                className="justify-content-between"
                active={activeIndex === index}
                onClick={() => {
                  this.props.getPage(tag.tag);
                  this.setState({activeIndex: index});
                  if (isMobile) this.toggle();
                }}
              >
                {tag.tag} <Badge pill>{tag.files}</Badge>
              </ListGroupItem>
            );
          })}
        </ListGroup>
        <span className={togglerClassName}>
          <i className="fas fa-bars" onClick={this.toggle}></i>
        </span>
      </div>
    );
  }
}

ListSidebar.propTypes = {
  tags: PropTypes.array.isRequired,
  getPage: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default ListSidebar;