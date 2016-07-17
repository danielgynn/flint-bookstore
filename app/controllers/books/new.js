import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    publishBook: function() {
      let { title, author, publishYear, blurb, coverImage, rating } = this.getProperties('title', 'author', 'publishYear', 'blurb', 'coverImage', 'rating');

      var user = this.store.createRecord('book', {
        title: title,
        author: author,
        publishYear: publishYear,
        blurb: blurb,
        coverImage: coverImage,
        rating: rating,
      });
      user.save();
      this.transitionToRoute('books');
    },
  },
});
