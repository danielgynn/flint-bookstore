import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login: function() {
      Ember.$('#login-form').find('input').trigger('change');
      let { email, password } = this.getProperties('userEmail', 'userPassword');
      this.get('session').open('firebase', {
        provider: 'password',
        email: email,
        password: password,
      });
      this.transitionToRoute('protected');
    },
  },

});
