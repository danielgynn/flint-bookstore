import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },

  actions: {

    logout: function() {
      this.get('session').close().then(function() {
        this.transitionTo('application');
      }.bind(this));
    },
  },
});
