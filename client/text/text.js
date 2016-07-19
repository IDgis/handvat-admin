Template.text.onRendered(function() {
	Session.set('tab', 'text');
	Session.set('filterText', 'landschapstype');
});

Template.text.helpers({
	text: function() {
		return Text.find({ texttype: Session.get('filterText') });
	}
});

Template.text.events({
	'change #text-filter': function(e) {
		Session.set('filterText', e.target.value);
	},
	'click .edit-text': function () { 
		Session.set("selectedTextId", this._id);
		Router.go('edit', {_id: this._id});
	},
	'click .insert-text': function () {
		Session.set("selectedTextId", null);
		Router.go('add');
	},
	'click .delete-text': function() {
		Text.remove({_id: this._id})
	}
});