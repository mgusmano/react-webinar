import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppOrig from './AppOrig';
import Dashboard from './Dashboard';
import Dashboard2 from './Dashboard2';
import BasicLayout from './BasicLayout';

import './index.css'

console.log('in react module')
if (window['Ext'] === undefined) {
  console.log('Ext not found')

  var r = document.querySelector(':root');
  r.style.setProperty('--base-color', '#2196f3');

  ReactDOM.render(
    <React.StrictMode>
      <BasicLayout />
    </React.StrictMode>,
    document.getElementById('root')
  );

}
else {
  console.log('Ext found')
  document.addEventListener('DOMContentLoaded', function(){
    window['Ext'].react = {
      AppOrig: AppOrig,
      App: App,
      Dashboard: Dashboard,
      Dashboard2: Dashboard2,
      BasicLayout: BasicLayout,
      React: React,
      ReactDOM: ReactDOM
    }
  }, false);
}

    //console.log(window['Ext'])
    //var elementApp = React.createElement(App,{},null)