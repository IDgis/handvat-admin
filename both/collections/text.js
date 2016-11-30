Text = new Mongo.Collection("text");

Text.attachSchema (new SimpleSchema({
	name: {
		type: String,
		label: "Naam",
		max: 200
	},
	appCoupling: {
		type: String,
		label: "Koppeling aan plek in applicatie",
		optional: true,
		allowedValues: ["entree", "start-links", "start-rechts", "info-links", "info-rechts", "uitleg-links", "uitleg-rechts", 
		                "stap-1-links", "stap-1-rechts", "stap-2-links", "stap-3-deelgebied", "stap-3-beginselen", 
		                "stap-4-links", "stap-5-links", "stap-6-links", "popup-handleiding", "popup-help", "popup-contact", 
		                "popup-links", "popup-disclaimer", "kernkwaliteit-relief", "kernkwaliteit-cultuurhistorie", 
		                "kernkwaliteit-groenkarakter", "kernkwaliteit-openbesloten"],
		
		autoform: {
		  options: [
		    {label: 'entree', value: 'entree'}, {label: 'start-links', value: 'start-links'},
		    {label: 'start-rechts', value: 'start-rechts'}, {label: 'info-links', value: 'info-links'},
		    {label: 'info-rechts', value: 'info-rechts'}, {label: 'uitleg-links', value: 'uitleg-links'},
		    {label: 'uitleg-rechts', value: 'uitleg-rechts'}, {label: 'stap-1-links', value: 'stap-1-links'},
		    {label: 'stap-1-rechts', value: 'stap-1-rechts'}, {label: 'stap-2-links', value: 'stap-2-links'},
		    {label: 'stap-3-deelgebied', value: 'stap-3-deelgebied'}, {label: 'stap-3-beginselen', value: 'stap-3-beginselen'},
		    {label: 'stap-4-links', value: 'stap-4-links'}, {label: 'stap-5-links', value: 'stap-5-links'},
		    {label: 'stap-6-links', value: 'stap-6-links'}, {label: 'popup-handleiding', value: 'popup-handleiding'}, 
		    {label: 'popup-help', value: 'popup-help'}, {label: 'popup-contact', value: 'popup-contact'}, 
		    {label: 'popup-links', value: 'popup-links'}, {label: 'popup-disclaimer', value: 'popup-disclaimer'},
		    {label: 'kernkwaliteit-relief', value: 'kernkwaliteit-relief'},
		    {label: 'kernkwaliteit-cultuurhistorie', value: 'kernkwaliteit-cultuurhistorie'},
		    {label: 'kernkwaliteit-groenkarakter', value: 'kernkwaliteit-groenkarakter'},
		    {label: 'kernkwaliteit-openbesloten', value: 'kernkwaliteit-openbesloten'}
		  ]
		}
	},
	texttype: {
		type: String,
		label: "Type", 
		allowedValues: ["landschapstype", "sector", "sector_icoon", "kernkwaliteit", "legenda", "leidend_beginsel", 
		                "ontwerpprincipe", "algemeen", "deelgebied"],
		autoform: {
	      options: [
	        {label: 'landschapstype', value: 'landschapstype'},
	        {label: 'sector', value: 'sector'},
	        {label: 'sector icoon', value: 'sector_icoon'},
	        {label: 'kernkwaliteit', value: 'kernkwaliteit'},
	        {label: 'legenda', value: 'legenda'},
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