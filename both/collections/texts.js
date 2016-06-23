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
	 allowedValues: ["lanschapstype", "sector", "kernkwaliteit", "leidend_beginsel", "ontwerp_principe"],

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