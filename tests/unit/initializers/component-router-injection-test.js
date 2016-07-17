import Ember from 'ember';
import ComponentRouterInjectionInitializer from 'flint-bookstore/initializers/component-router-injection';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | component router injection', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  ComponentRouterInjectionInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
