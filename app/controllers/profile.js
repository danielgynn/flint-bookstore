import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    editProfile: function() {
      this.set('isEditing', true);
    },

    saveProfile: function() {
      var editProfile = this.get('model');
      editProfile.save();
      this.set('isEditing', false);
    },
  },

});
