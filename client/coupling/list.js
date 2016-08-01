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
		var TempOntwerp = new Mongo.Collection();
		
		CouplingOntwerp.find().forEach(
		    function(newOntwerp) {
		    	newOntwerp.landschapstype = Text.findOne( { "_id": newOntwerp.landschapstype } );
		    	newOntwerp.sector = Text.findOne( { "_id": newOntwerp.sector } );
		    	newOntwerp.kernkwaliteit = Text.findOne( { "_id": newOntwerp.kernkwaliteit } );
		    	
		    	var ops = [];
		    	newOntwerp.ontwerpprincipe.forEach(
		    		function(op) {
		    			var t = Text.findOne({ "_id": op});
		    			ops.push(t.name);
		    		}
		    	);
		    	
		    	newOntwerp.ontwerpprincipe = ops.sort();
		    	
		    	TempOntwerp.insert(newOntwerp);
		    }
		);
		
		return TempOntwerp.find({}, {sort: { "landschapstype.name": 1, "sector.name": 1, "kernkwaliteit.name": 1 } });
	},
	couplingleidend: function() {
		var TempLeidend = new Mongo.Collection();
		
		CouplingLeidend.find().forEach(
		    function(newLeidend) {
		    	newLeidend.landschapstype = Text.findOne( { "_id": newLeidend.landschapstype } );
		    	
		    	var lbs = [];
		    	newLeidend.leidend_beginsel.forEach(
		    		function(lb) {
		    			var t = Text.findOne({ "_id": lb});
		    			if(typeof t !== 'undefined') {
		    				lbs.push(t.name);
		    			}
		    		}
		    	);
		    	
		    	newLeidend.leidend_beginsel = lbs.sort();
		    	
		    	TempLeidend.insert(newLeidend);
		    }
		);
		
		return TempLeidend.find({}, {sort: { "landschapstype.name": 1 } });
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