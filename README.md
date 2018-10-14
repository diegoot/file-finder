# Project description

This project is a small web application that let the user search for files that are group in tags. It also includes pagination of the files under a given tag and the posibility to rename those files.

# Technologies in use

This is a ReactJS based project, it was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Redux](https://redux.js.org/) is being used as state container.

To deal with async actions [Redux-Thunk](https://github.com/reduxjs/redux-thunk) was added as middleware.

Routing is being handled with [React Router](https://github.com/ReactTraining/react-router).

The mentioned technologies/libraries are the core ones used in this project (they define the architecture), there are additional ones used for smaller things like:

- [classnames](https://www.npmjs.com/package/classnames) - A simple JavaScript utility for conditionally joining classNames together.

- [react-js-pagination](https://www.npmjs.com/package/react-js-pagination) - A ReactJS dumb component to help with pagination.

# Backend

The app is consuming the given API avaliable at http://tim.uardev.com/trial-project/api

# Assumptions

When the user goes back from the 'rename' page to the listing one he will remain at the page where the renamed file belongs to.

# What is included?

There are branches:

- master: it includes just the core functionality (no styles at all).
- styles: same as master but with styles (it uses [reactstrap](https://reactstrap.github.io/) and [Font Awesome](https://fontawesome.com/))

# Install and start the app for development

1. Clone the repo
2. yarn install
3. yarn start

This should open the browser pointing to http://localhost:3000

NOTE: you might need to reload the page if you see no content. For some reason that I could not investigate yet sometimes it does not load as expected.

# Install and start the app for production

1. Clone the repo
2. yarn install
3. yarn build
4. Deploy the app to your server of choise. For instance if you are using npm 5.2+ you could do: cd build && npx serve
5. Go to http://localhost:5000 on your browser
