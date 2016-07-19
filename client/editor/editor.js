Template.editor.onRendered(function() {
	Session.set('tab', null);
});

Template.editor.helpers({
	isEqual: function(a, b) {
		return a === b;
	},
	isNotEqual: function(a, b) {
		return a !== b;
	},
	formType: function() {
		if(Session.get("selectedTextId")) {
			return "update";
		} else {
			return "insert";
		}
	},
	filterType: function() {
		if(typeof Session.get('filterText') === 'undefined') {
			return "geen";
		} else {
			return Session.get("filterText");
		}
	},
	filterTypeLabel: function() {
		if(typeof Session.get('filterText') === 'undefined') {
			return "geen";
		} else {
			return Type.findOne({ name: Session.get('filterText') });
		}
	},
	textDoc: function() {
		if(Session.get("selectedTextId")) {
			return this;
		} else {
			return null ;
		}
	}
});

Template.editor.events({
	'click #return': function() {
		AutoForm.resetForm('textform');
		Router.go('text');
	}
});