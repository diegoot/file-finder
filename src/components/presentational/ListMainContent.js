import React from 'react';
import classnames from 'classnames';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Pagination from "react-js-pagination";
import { Card, CardTitle, Button, Row, Col, Container } from 'reactstrap';
import { MOBILE_BREAKPOINT, PAGE_RANGE_DISPLAYED, PAGE_RANGE_DISPLAYED_MOBILE } from 'utils/constants';
import './ListMainContent.css';

class ListMainContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { shouldRedirect: false, pageRange: PAGE_RANGE_DISPLAYED };

    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    this.onResize();

    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    let pageRange = PAGE_RANGE_DISPLAYED;

    if (window.innerWidth < MOBILE_BREAKPOINT) {
      pageRange = PAGE_RANGE_DISPLAYED_MOBILE;
    }
    this.setState({pageRange});
  }

  onFileClick(file) {
    const { setSelectedFile } = this.props;

    this.setState({shouldRedirect: true});
    setSelectedFile(file.id, file.name);
  }

  render() {
    const { files, tagName, currentPage, totalFiles, getPage, fullWidth } = this.props;
    const { shouldRedirect, pageRange } = this.state;

    const layoutClassNames = classnames(
      'listMainContent',
      {'listMainContent--collapsed': !fullWidth}
    );

    return (
      <div className={layoutClassNames}>
        <Container>
          <Row>
              {files.map(file => {
                return (
                  <Col md="4" lg="3" xl="2" key={file.id}>
                    <Card body>
                      <CardTitle>{file.name}</CardTitle>
                      <Button onClick={() => this.onFileClick(file)}>Rename</Button>
                    </Card>
                  </Col>
                );
              })}
          </Row>
          {
            files.length > 0 &&
              <div className="listMainContent-pagination">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={10}
                  totalItemsCount={totalFiles}
                  pageRangeDisplayed={pageRange}
                  onChange={(pageNumber) => getPage(tagName, pageNumber)}
                  itemClass="listMainContent-page"
                />
              </div>
          }
          {shouldRedirect ? <Redirect to="/rename" /> : null}
        </Container>
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
  setSelectedFile: PropTypes.func,
  fullWidth: PropTypes.bool.isRequired
};

export default ListMainContent;