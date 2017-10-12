import './form.html';

import { Text } from '/imports/api/collections/text.js';
import { CouplingLeidend, CouplingLeidendSchema } from '/imports/api/collections/couplingleidend.js';
import { CouplingOntwerp, CouplingOntwerpSchema } from '/imports/api/collections/couplingontwerp.js';
import { CouplingType } from '/imports/api/collections/couplingtype.js';

import '/imports/ui/autoformHooks/couplingform.js';

Template.couplingform.helpers({
  couplingLeidend: function() {
    return CouplingLeidend;
  },
  
  couplingLeidendSchema: function() {
    return CouplingLeidendSchema;
  },
  
  couplingOntwerp: function() {
	return CouplingOntwerp;
  },
  
  couplingOntwerpSchema: function() {
    return CouplingOntwerpSchema;
  },
  
  isEqual: function(a, b) {
    return a === b;
  },
  
  isNotEqual: function(a, b) {
    return a !== b;
  },
  
  formType: function() {
    if(Session.get("selectedCouplingId")) {
      return "update";
    } else {
      return "insert";
    }
  },
  
  filterType: function() {
    if(typeof Session.get('filterCoupling') === 'undefined') {
      return "geen";
    } else {
      return Session.get("filterCoupling");
    }
  },
  
  filterTypeLabel: function() {
    if(typeof Session.get('filterCoupling') === 'undefined') {
      return "geen";
    } else {
      return CouplingType.findOne({ name: Session.get('filterCoupling') });
    }
  },
  
  entiteitTypes: function(entity) {
    var options = [];
    var records = Text.find({texttype: entity}).fetch();
    records.forEach(function(item) {
      options.push({label: item.name, value: item._id});
    });
    
    function compare(a, b) {
      if (a.label < b.label) {
        return -1;
      } if (a.label > b.label) {
        return 1;
      }
      
      return 0;
    }
    
    options.sort(compare);
    
    return options;
	
  },
  
  couplingDoc: function() {
    if(Session.get("selectedCouplingId")) {
      return this;
    } else {
      return null ;
    }
  }
});

Template.couplingform.events({
  'click .return': function() {
    AutoForm.resetForm('couplingleidendform');
    AutoForm.resetForm('couplingontwerpform');
    Router.go('couplinglist');
  }
});