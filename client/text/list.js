Template.textlist.onRendered(function() {
	Session.set('tab', 'text');
	Session.set('filterText', 'landschapstype');
});

Template.textlist.helpers({
	text: function() {
		return Text.find({ texttype: Session.get('filterText') });
	}
});

Template.textlist.events({
	'change #text-filter': function(e) {
		Session.set('filterText', e.target.value);
	},
	'click .edit-text': function () { 
		Session.set("selectedTextId", this._id);
		Router.go('textedit', {_id: this._id});
	},
	'click .insert-text': function () {
		Session.set("selectedTextId", null);
		Router.go('textadd');
	},
	'click .delete-text': function() {
		Text.remove({_id: this._id})
	}
});