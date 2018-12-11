import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/App.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});