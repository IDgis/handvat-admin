Meteor.startup(function () {
  Meteor.subscribe('leidende_beginselen');
  Meteor.subscribe('ontwerp_principes');
  Meteor.subscribe('coupling_types');
  Meteor.subscribe('text_types');
  Meteor.subscribe('texts');
});