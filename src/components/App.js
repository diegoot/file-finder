import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListPage from 'components/container/ListPage';
import RenamePage from 'components/container/RenamePage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'normalize.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" render={() => <Redirect to="/list" />} />
          <Route path="/list" component={ListPage} />
          <Route path="/rename" component={RenamePage} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;