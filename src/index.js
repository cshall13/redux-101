// react only. does not need redux
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReduxStudents from './Containers/ReduxStudents';


// go get the createStore method from the redux module(npm install --save redux)
// redux only. does  not need react
import{ createStore } from 'redux';

// import the Provider from react-redux so react and redux can talk!(npm install --save react-redux)
// provider is a component that allows react and redux to communicate
// must use react AND redux (waiter, customer, cook relationship)
// ONLY JOB IS TO GET REACT AND REDUX TO TALK TO EACH OTHER
import { Provider } from 'react-redux';

// import the rootReducer so we can give it to the store...put some stuff on the shelves
import rootReducer from './Reducers/rootReducer';

const theStore = createStore(rootReducer);

// ReactDOM.render takes 2 args .... 1.what 2.where


ReactDOM.render(
    // store is a prop that is passed to 'Provider'
    // provider is react, the store is redux. provider makes a way for react
    // redux to communicate
    // this is the what (#1)
    <Provider store={theStore}>
        <ReduxStudents />
    </Provider>,
    // this is the where (#2)
    document.getElementById('root')
);
