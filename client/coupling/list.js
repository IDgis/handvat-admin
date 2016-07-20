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
	getCoupling: function(landschapstype, sector, kernkwaliteit, ontwerpprincipe) {
		var lt = Text.findOne({ _id: landschapstype });
		var s = Text.findOne({ _id: sector });
		var k = Text.findOne({ _id: kernkwaliteit });
		
		if(typeof lt !== 'undefined' && typeof s !== 'undefined' && typeof k !== 'undefined') {
			return lt.name + " - " + s.name + " - " + k.name;
		}
	},
	getOntwerpprincipe: function(id) {
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
	'click .edit-coupling': function () { 
		Session.set("selectedCouplingId", this._id);
		Router.go('couplingedit', {_id: this._id});
	},
	'click .insert-coupling': function () {
		Session.set("selectedCouplingId", null);
		Router.go('couplingadd');
	},
	'click .delete-coupling': function() {
		CouplingOntwerp.remove({_id: this._id})
	}
});