import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  beforeModel: function() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('index');
    }
  },

  model: function() {
    return this.store.query('book', {
      orderBy: 'title',
    });
  },

  actions: {
    orderByRating: function() {
      return this.store.query('book', {
        orderBy: 'rating',
      });
    },
  },

});
