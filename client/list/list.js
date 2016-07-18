Template.list.onRendered(function() {
	Session.set('filterText', 'landschapstype');
});

Template.list.helpers({
	texts: function(){
		return Texts.find({ texttype: Session.get('filterText') });
	}
});

Template.list.events({
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
		Texts.remove({_id: this._id})
	}
});