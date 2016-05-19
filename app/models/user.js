import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  location: DS.attr(),
  bio: DS.attr(),
  website: DS.attr(),
  profileImage: DS.attr(),
});
