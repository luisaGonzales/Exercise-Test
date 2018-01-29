import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'redux-zero/react';
import {change} from './Actions/actions';
import Render from './Components/render';


const App = ({name, title, code, type, success}) => {
  return (
    <Render name={name} title={title} code={code} type={type} success={success} />
  );
}



const mapToProps = ({name, title, code, type, success}) => ({name, title, code, type, success});
export default connect(mapToProps)(App);

