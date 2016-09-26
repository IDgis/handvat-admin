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
		allowedValues: ["landschapstype", "sector", "sector_icoon", "kernkwaliteit", "leidend_beginsel", "ontwerpprincipe", 
		                "algemeen", "deelgebied"],
		autoform: {
	      options: [
	        {label: 'landschapstype', value: 'landschapstype'},
	        {label: 'sector', value: 'sector'},
	        {label: 'sector icoon', value: 'sector_icoon'},
	        {label: 'kernkwaliteit', value: 'kernkwaliteit'},
	        {label: 'leidend beginsel', value: 'leidend_beginsel'},
	        {label: 'ontwerpprincipe', value: 'ontwerpprincipe'},
	        {label: 'algemeen', value: 'algemeen'},
	        {label: 'deelgebied', value: 'deelgebied'}
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
	}
}));

Text.allow({
	insert: function() {
		return true;
	},
	update: function() {
		return true;
	},
	remove: function() {
		return true;
	}
});