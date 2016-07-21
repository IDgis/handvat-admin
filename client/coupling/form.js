Template.couplingform.helpers({
	isEqual: function(a, b) {
		return a === b;
	},
	isNotEqual: function(a, b) {
		return a !== b;
	},
	formType: function() {
		if(Session.get("selectedCouplingId")) {
			return "update";
		} else {
			return "insert";
		}
	},
	filterType: function() {
		if(typeof Session.get('filterCoupling') === 'undefined') {
			return "geen";
		} else {
			return Session.get("filterCoupling");
		}
	},
	filterTypeLabel: function() {
		if(typeof Session.get('filterCoupling') === 'undefined') {
			return "geen";
		} else {
			return CouplingType.findOne({ name: Session.get('filterCoupling') });
		}
	},
	entiteitTypes: function(entity) {
		var options = [];
		var records = Text.find({texttype: entity}).fetch();
		records.forEach(function(item) {
			options.push({label: item.name, value: item._id});
		});
		
		return options;
	},
	couplingDoc: function() {
		if(Session.get("selectedCouplingId")) {
			return this;
		} else {
			return null ;
		}
	}
});

Template.couplingform.events({
	'click .return': function() {
		AutoForm.resetForm('couplingleidendform');
		AutoForm.resetForm('couplingontwerpform');
		Router.go('couplinglist');
	}
});