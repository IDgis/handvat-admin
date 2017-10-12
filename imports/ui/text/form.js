import './form.html';

import { Text, TextSchema } from '/imports/api/collections/text.js';
import { TextType } from '/imports/api/collections/texttype.js';

import '/imports/ui/autoformHooks/textform.js';

Template.textform.onRendered(function() {
  Session.set('tab', null);
});

Template.textform.helpers({
  text: function() {
    return Text;
  },
  
  textSchema: function() {
    return TextSchema;
  },
  
  isEqual: function(a, b) {
    return a === b;
  },
  
  isNotEqual: function(a, b) {
    return a !== b;
  },
  
  formType: function() {
    if(Session.get("selectedTextId")) {
      return "update";
    } else {
      return "insert";
    }
  },
  
  filterType: function() {
    if(typeof Session.get('filterText') === 'undefined') {
      return "geen";
    } else {
      return Session.get("filterText");
    }
  },
  
  filterTypeLabel: function() {
    if(typeof Session.get('filterText') === 'undefined') {
      return "geen";
    } else {
      return TextType.findOne({ name: Session.get('filterText') });
    }
  },
  
  textDoc: function() {
    if(Session.get("selectedTextId")) {
      return this;
    } else {
      return null ;
    }
  }
});

Template.textform.events({
  'click #return': function() {
    AutoForm.resetForm('textform');
    Router.go('textlist');
  }
});