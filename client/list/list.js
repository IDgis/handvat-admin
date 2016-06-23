Template.list.helpers({
	texts: function(){
        return Texts.find();
    },
    isSelectedText: function () {
		return Session.equals("selectedTextId", this._id);
	},
});


Template.list.events({
  'click .edit-text': function () { 
	  Session.set("selectedTextId", this._id);
	  Router.go('edit', {_id: this._id});
  },
  'click .insert-text': function () {
	  Session.set("selectedTextId", null);
  },
  'click .delete-text': function() {
	  //zie https://github.com/aldeed/meteor-delete-button
	 Texts.remove({_id:this._id})
	 
  },
});