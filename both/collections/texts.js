Texts = new Mongo.Collection("texts");

Texts.attachSchema (new SimpleSchema({
  title: {
    type: String,
    label: "Titel",
    max: 200
  },
  texttype: {
	 type: String,
	 label: "Type text", 
	 allowedValues: ["landschapstype", "sector", "kernkwaliteit", "leidend beginsel", "ontwerpprincipe"],

  },
  content: {
    type: String,
    label: "",

  }
}));

Texts.allow({
	  insert: function () { return true; },
	  update: function () { return true; },
	  remove: function () { return true; }
})