// react only. does not need redux
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



// go get the createStore method from the redux module(npm install --save redux)
// redux only. does  not need react
// we also need applyMiddleware from Redux if we are going to use middleware
import{ createStore, applyMiddleware } from 'redux';
// reduxPromise is middleware
import reduxPromise from 'redux-promise';

// import the Provider from react-redux so react and redux can talk!(npm install --save react-redux)
// provider is a component that allows react and redux to communicate
// must use react AND redux (waiter, customer, cook relationship)
// ONLY JOB IS TO GET REACT AND REDUX TO TALK TO EACH OTHER
import { Provider } from 'react-redux';

// import the rootReducer so we can give it to the store...put some stuff on the shelves
import rootReducer from './Reducers/rootReducer';

// commented out this store because it needed to be rebuilt in a different way after adding applyMiddleware
// *******************const theStore = createStore(rootReducer);
// make a store that uses middleware
// applyMiddleware takes an arg(all the middleware to be used)...
// which returns a function that takes one arg, 'createStore', which returns a function that takes one arg 'rootReducer'
// store created with one line!!!!
const createStoreWithMiddleWare = applyMiddleware(reduxPromise)(createStore)(rootReducer);

//********************** 2 line store with middleware
// const createStoreWithMiddleWare = applyMiddleware(reduxPromise)(createStore);
// const theFinalStore = createStoreWithMiddleWare(rootReducer);

// ReactDOM.render takes 2 args .... 1.what 2.where


ReactDOM.render(
    // store is a prop that is passed to 'Provider'
    // provider is react, the store is redux. provider makes a way for react
    // redux to communicate
    // this is the what (#1)
    <Provider store={createStoreWithMiddleWare}>
        <div className="app">
            <App />
        </div>
    </Provider>,
    // this is the where (#2)
    document.getElementById('root')
);
