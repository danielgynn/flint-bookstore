import Ember from 'ember';

export default Ember.Controller.extend({
  firebaseApp: Ember.inject.service(),

  actions: {
    signUp() {
      let { email, password } = this.getProperties('email', 'password');
      const auth = this.get('firebaseApp').auth();
      auth.createUserWithEmailAndPassword(email, password)
      .then((userResponse) => {
        const user = this.store.createRecord('user', {
          id: userResponse.uid,
          email: userResponse.email
        });
        return user.save()
        .then(() => {
          this.transitionTo('protected');
        });
      });
    }
  }
});
