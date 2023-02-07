# Getting Started with Create React App

This app was bootstrapped with [Create React App](https://github.com/facebook/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### live Demo

https://multiply-app.vercel.app/

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Component Architecture

The app is divided in 2 components Grid and GridCell.
App is structured so that Grid cell is a presentational component and Grid is the container component.

## Testing:

Using Jest , React Testing library.
The reason for going RTL is that it enforces good testing practices and helps you test UI components in a user-centric way with build in utilities.

Both Grid and GridCell have been tested and utility function in utils.js.

## Accessibility

- Semantic HTML has been used throughout the app.
- The supports focus control for navigating between cells using tab to , tab+shift and enter key.
- Supports assistive technology like screen reader.
- aria-\* attributes have been added where necessary.

## Accessibility Testing / Reporting

- Getting 100 accessibility score in lighthouse report
- Added [@axe-core/react](https://www.npmjs.com/package/@axe-core/react) for accessibility testing and reporting any issues in developer console (runs dev env only)
- Manual tested focus control through keyboard navigation
- Tested with Mac voice over for screen reader testing

## Performance

- Memoized expensive calculation and function to cache them between re-renders
- Using Set data structure for storing multiples between range instead or array as Set has O(1) lookup time instead of O(N).
- Cache previously calculated multiples by creating a map { selectedNumber : Set<numbers> } so that repeated selected number need no calculations.
