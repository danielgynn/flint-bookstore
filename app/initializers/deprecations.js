// app/initializers/deprecations.js
import Ember from 'ember';

export function initialize() {
  Ember.Debug.registerDeprecationHandler((message, options, next) => {
    if (options.id === 'ember-application.injected-container') {
      return;
    }
    next(message, options);
  });
}

export default {
  name: 'deprecations',
  initialize
};
