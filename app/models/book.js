import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  publishYear: DS.attr(),
  blurb: DS.attr(),
  coverImage: DS.attr(),
  rating: DS.attr(),
});
