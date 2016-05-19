import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('about');
  this.route('login');
  this.route('signup');
  this.route('protected');
  this.route('profile', { path: '/:user_id' });
  this.route('books', function() {
    this.route('new');
    this.route('book', { path: '/:id'});
  });
});

export default Router;
