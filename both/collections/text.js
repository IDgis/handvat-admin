Text = new Mongo.Collection("text");

Text.attachSchema (new SimpleSchema({
	name: {
		type: String,
		label: "Naam",
		max: 200
	},
	texttype: {
		type: String,
		label: "Type", 
		allowedValues: ["landschapstype", "sector", "kernkwaliteit", "leidend_beginsel", "ontwerpprincipe"],
		autoform: {
	      options: [
	        {label: 'landschapstype', value: 'landschapstype'},
	        {label: 'sector', value: 'sector'},
	        {label: 'kernkwaliteit', value: 'kernkwaliteit'},
	        {label: 'leidend beginsel', value: 'leidend_beginsel'},
	        {label: 'ontwerpprincipe', value: 'ontwerpprincipe'}
	      ]
	    }
	},
	content: {
		type: String,
		label: "Inhoud",
		autoform: {
			afFieldInput: {
				type: 'summernote',
				settings: {
					height: 450
				}
			}
		}
	},
	userId: {
		type: String,
	}
}));

Text.allow({
	insert: function(userId, doc) {
		return doc && doc.userId === userId;
	},
	update: function(userId, doc) {
		return doc && doc.userId === userId;
	},
	remove: function(userId, doc) {
		return doc && doc.userId === userId;
	}
});