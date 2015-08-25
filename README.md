# React Starter

## Build Basics

### Install

To install, simply download the repository locally, use Terminal to swap to that directory, and enter: `npm install`

### Run

To run, use Terminal in the local app directory and enter: `npm start`

### Test

To test, use Terminal in the local app directory and enter: `npm test`

### Build

To build for production, use Terminal in the local app directory and enter: `npm build`

## Writing CSS

Component CSS should be absolute bare minimum (or nonexistent).  It should only do what is absolutely for the component to properly render, with the assumptions that the given component will be responsive and will be styled elsewhere (using something like a theme, outside of the component).

Component CSS should be namespaced to the given component, and care should be taken to avoid polluting anything else.  For example, the following code may unintentionally conflict with CSS outside of the scope of the given component:

```.myComponent p {
  background:pink;
}```

Some safe alternatives may include:

```.myComponent_p {
  background:pink;
}```

Or, depending upon how this component is going to be used (although be careful, as this could also conflict with other styles):

```.myComponent > p {
  background:pink;
}```