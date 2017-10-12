import './list.html';
import './list.css';

import { Text } from '/imports/api/collections/text.js';
import { CouplingLeidend } from '/imports/api/collections/couplingleidend.js';
import { CouplingOntwerp } from '/imports/api/collections/couplingontwerp.js';

Template.textlist.onRendered(function() {
  Session.set('tab', 'text');
  Session.set('filterText', 'ontwerpprincipe');
});

Template.textlist.helpers({
  text: function() {
    return Text.find({ texttype: Session.get('filterText') }, { sort: { name: 1 } });
  },
  
  disableDelete: function(id) {
    var allowed = checkDeleteAllowed(id);
    
    ret = '';
    if(!allowed) {
      ret = 'disabled';
    }
    
    return ret;
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
    var allowed = checkDeleteAllowed(this._id);
	if(allowed) {
	  Text.remove({_id: this._id});
	}
  }
});

function checkDeleteAllowed(id) {
  var cls = CouplingLeidend.find().fetch();
  var cos = CouplingOntwerp.find().fetch();
  
  var allowed = true;
  cls.forEach(function(item) {
	if(item.landschapstype === id) {
	  allowed = false;
    }
	  
	item.leidend_beginsel.forEach(function(element) {
	  if(element === id) {
	    allowed = false;
	  }
	});
  });

  cos.forEach(function(item) {
    if(item.landschapstype === id || item.sector === id || item.kernkwaliteit === id) {
      allowed = false;
    }
    
    item.ontwerpprincipe.forEach(function(element) {
      if(element === id) {
        allowed = false;
      }
    });
  });
  
  return allowed;
}