Meteor.subscribe('leidende_beginselen');
Meteor.subscribe('ontwerp_principes');

Template.couplinglist.onRendered(function() {
	Session.set('tab', 'coupling');
	Session.set('filterCoupling', 'leidend_beginsel');
});

Template.couplinglist.helpers({
	isEqual: function(a, b) {
		return a === b;
	},
	couplingontwerp: function() {
		return CouplingOntwerp.find();
	},
	couplingleidend: function() {
		return CouplingLeidend.find();
	},
	getCouplingOntwerp: function(landschapstype, sector, kernkwaliteit) {
		var lt = Text.findOne({ _id: landschapstype });
		var s = Text.findOne({ _id: sector });
		var k = Text.findOne({ _id: kernkwaliteit });
		
		if(typeof lt !== 'undefined' && typeof s !== 'undefined' && typeof k !== 'undefined') {
			return lt.name + " - " + s.name + " - " + k.name;
		}
	},
	getCouplingLeidend: function(landschapstype) {
		var lt = Text.findOne({ _id: landschapstype });
		
		if(typeof lt !== 'undefined') {
			return lt.name;
		}
	},
	getTextName: function(id) {
		var op = Text.findOne({ _id: id });
		if(typeof op !== 'undefined') {
			return op.name;
		}
	},
	filterType: function() {
		if(typeof Session.get('filterCoupling') === 'undefined') {
			return "geen";
		} else {
			return Session.get("filterCoupling");
		}
	}
});

Template.couplinglist.events({
	'change #coupling-filter': function(e) {
		Session.set('filterCoupling', e.target.value);
	},
	'click .edit-coupling-leidend': function () { 
		Session.set("selectedCouplingId", this._id);
		Router.go('couplingleidendedit', {_id: this._id});
	},
	'click .edit-coupling-ontwerp': function () { 
		Session.set("selectedCouplingId", this._id);
		Router.go('couplingontwerpedit', {_id: this._id});
	},
	'click .insert-coupling': function () {
		Session.set("selectedCouplingId", null);
		Router.go('couplingadd');
	},
	'click .delete-coupling-leidend': function() {
		CouplingLeidend.remove({_id: this._id})
	},
	'click .delete-coupling-ontwerp': function() {
		CouplingOntwerp.remove({_id: this._id})
	}
});