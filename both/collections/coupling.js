Coupling = new Mongo.Collection("coupling");

Coupling.attachSchema (new SimpleSchema({
  landschapstype: {
    type: String
  },
  sector: {
    type: String
  },
  kernkwaliteit: {
    type: String
  },
  ontwerpprincipe: {
    type: [String]
  }
}));

Coupling.allow({
	insert: function () { return true; },
	update: function () { return true; },
	remove: function () { return true; }
});