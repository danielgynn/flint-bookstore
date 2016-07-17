import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  beforeModel: function() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('application');
    } else {
      this.transitionTo('index');
    }
  },

});
