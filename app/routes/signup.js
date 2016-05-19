import Ember from 'ember';
import Firebase from 'firebase';

export default Ember.Route.extend({
  actions: {
    signUp: function() {
      var controller = this.get('controller');
      var firstName = controller.get('firstName');
      var lastName = controller.get('lastName');
      var email = controller.get('email');
      var password = controller.get('password');
      var ref = new Firebase("https://flint-bookstore.firebaseio.com");
      var _this = this;

      ref.createUser({
        email: email,
        password: password,
      }, function(error, userData) {
        if (error) {
          alert(error);
        } else {
          _this.get('session').open('firebase', {
            provider: 'password',
            'email': email,
            'password': password
          }).then(function() {
            var user = _this.store.createRecord('user', {
            id: userData.uid,
            firstName: firstName,
            lastName: lastName,
          });
            user.save()
            .then(function() {
              _this.transitionTo('protected');
            });
          });
        }
      });
    },
  },
});
