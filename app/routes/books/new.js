import Ember from 'ember';
import Firebase from 'firebase';

export default Ember.Route.extend({

  actions: {
    publishBook: function() {
      var controller = this.get('controller');
      var title = controller.get('title');
      var author = controller.get('author');
      var publishYear = controller.get('publishYear');
      var blurb = controller.get('blurb');
      var coverImage = controller.get('coverImage');
      var rating = controller.get('rating');
      var _this = this;

      var user = _this.store.createRecord('book', {
        title: title,
        author: author,
        publishYear: publishYear,
        blurb: blurb,
        coverImage: coverImage,
        rating: rating,
      });
      user.save()
      .then(function() {
        _this.transitionTo('books');
      });
    },
  },

});
