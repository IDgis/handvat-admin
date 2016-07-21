var couplingLeidendHooks = {
  before: {
    insert: function(doc) {
      if(Meteor.userId()){
        doc.userId = Meteor.userId();
        return doc;
      }
    }
  },
  onSuccess: function(formType, result) {
    Router.go('couplinglist');
  }
}

var couplingOntwerpHooks = {
  before: {
    insert: function(doc) {
      if(Meteor.userId()){
        doc.userId = Meteor.userId();
        return doc;
      }
    }
  },
  onSuccess: function(formType, result) {
    Router.go('couplinglist');
  }
}

AutoForm.addHooks('couplingleidendform', couplingLeidendHooks);
AutoForm.addHooks('couplingontwerpform', couplingOntwerpHooks);