import React from 'react';
import ReactDOM from 'react-dom';
//import AppOrig from './AppOrig';
import App from './App';
import RawForm from './RawForm';
import FormikForm from './FormikForm';
import BasicLayout from './BasicLayout';
import './index.css'

// var layoutsConfig = {
//   layouts:  [
//     {"x":0,"y":0,"w":2,"h":5,"i":"0"},
//     {"x":2,"y":0,"w":2,"h":5,"i":"1"},
//     {"x":4,"y":0,"w":2,"h":5,"i":"2"},
//     {"x":0,"y":5,"w":3,"h":5,"i":"3"},
//     {"x":3,"y":5,"w":3,"h":5,"i":"4"}
//   ],
//   widgets: [
//     {renderable: null},
//     {renderable: null},
//     {renderable: null},
//     {renderable: null},
//     {renderable: null}
//   ]
// }
//<BasicLayout layoutsConfig={layoutsConfig}/>,
//console.log('in react module')
//console.log('Ext not found')
console.log(window['Ext'])
if (window['Ext'] === undefined) {
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
}
else {
  document.addEventListener('DOMContentLoaded', function(){
    window['Ext'].react = {
      //AppOrig: AppOrig,
      App: App,
      BasicLayout: BasicLayout,
      React: React,
      ReactDOM: ReactDOM
    }
  }, false);
}

//console.log(window['Ext'])
//var elementApp = React.createElement(App,{},null)