import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    save: function() {
      var editBook = this.get('model');
      editBook.save();
      this.set('isEditing', false);
      this.transitionToRoute('book');
    },

    deleteBook: function() {
      var delBook = this.get('model');
      delBook.deleteRecord();
      delBook.save();
      this.transitionToRoute('books');
    },

    updateRating(params) {
      const { item: book, rating } = params;
      book.set('rating', rating);
      return book.save();
    },
  },
});
