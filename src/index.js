import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

// function doIt() {
//   console.log(window['Ext'])
//   //var elementApp = React.createElement(App,{},null)
//   window['Ext'].react = {
//     //elementApp: elementApp,
//     App: App,
//     React: React,
//     ReactDOM: ReactDOM
//   }
// }

console.log('in react module')
if (window['Ext'] === undefined) {
  console.log('Ext not found')

  var r = document.querySelector(':root');
  //r.style.setProperty('--base-color', '#3f51b5');
  r.style.setProperty('--base-color', '#2196f3');

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

}
else {
  console.log('Ext found')
  //document.addEventListener('DOMContentLoaded', doIt, false);
  document.addEventListener('DOMContentLoaded', function(){
    //console.log(window['Ext'])
    //var elementApp = React.createElement(App,{},null)
    window['Ext'].react = {
      //elementApp: elementApp,
      App: App,
      React: React,
      ReactDOM: ReactDOM
    }
  }, false);
}