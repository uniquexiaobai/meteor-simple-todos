import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './body.html';
import './task.js';

Template.body.helpers({
  tasks() {
    return Tasks.find({}, { sort: { createAt: -1 } });
  },
});

Template.body.events({
  'submit .new-task'(e) {
    e.preventDefault();

    const target = e.target;
    const text = target.text.value;

    Tasks.insert({
      text,
      createAt: new Date(),
    });

    target.text.value = '';
  }
})