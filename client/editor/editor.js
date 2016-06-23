Template.editor.helpers({
	formType: function () {
		if (Session.get("selectedTextId")) {
		    return "update";
		 } else {
		    return "insert";
		 }
	},
	serviceDoc: function () {
		if (Session.get("selectedTextId")) {
		    return this;
		 } else {
		    return null ;
		 }
	},
	textTypes: function () {
		var textTypes = [{label: 'landschapstype', value: 'lanschapstype'},{label: 'sector beschrijving', value: 'sector'},{label: 'kernkwaliteit', value: 'kernkwaliteit'},{label: 'leidend beginsel', value: 'leidend_beginsel'},
		                 {label: 'ontwerpprincipe', value: 'ontwerpprincipe'}];
		//ontwerpprincipe'];
		return textTypes;
	},
	toolBarSettings: function () {
	 var settings = {
		    toolbar: [
		              ['font', ['bold', 'italic', 'underline', 'clear']],
		              ['para', ['ul', 'ol']],//['para', ['ul', 'ol', 'paragraph']],
		              ['insert', ['link', 'picture', 'hr']],
		              ['fontsize', ['fontsize']],
		              ['height', ['height']],
		              ['color', ['color']],
		          ]
		      };
	return settings; 
	} 
});
Template.editor.events({
	'submit #textform': function () {
		Router.go('list');
	},
	'click #return': function () {
		Router.go('list');
	}
});
