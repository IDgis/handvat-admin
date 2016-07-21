Template.main.helpers({
	activeText: function() {
		if(Session.equals('tab', 'text')) {
			return "active";
		}
	},
	activeCoupling: function() {
		if(Session.equals('tab', 'coupling')) {
			return "active";
		}
	}
});

Template.main.events({
	'click #tab-text': function() { 
		Router.go('textlist');
	},
	'click #tab-coupling': function() {
		Router.go('couplinglist');
	}
});