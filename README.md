This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


# Redux Theme Dream 

This is a simple app to help learn the fundamentals and setup for `redux` and `react-redux` in a react app. 

The goal is to get your app looking like this: 

![tdg](https://user-images.githubusercontent.com/13579578/35654766-cbcfe6dc-06ab-11e8-9d05-7baf0b74ffd5.gif)


### Create The Store 

Okay the store is actually already created for you. It's in store.js. The store is the global object that represents your application's state. We need to tell our React App that we want to use the store. Go to your top level React file, in this case `index.js`.

In `index.js` we need to import our store, and also a special component called `<Provider />` from `react-redux`. You can wrap your top level component in `<Provider>. The Provider takes one prop, the store. 

### Create the Initial state in theme-reducer.js 
