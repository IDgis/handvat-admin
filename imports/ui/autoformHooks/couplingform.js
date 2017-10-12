var couplingLeidendHooks = {
  onSuccess: function(formType, result) {
	Router.go('couplinglist');
  }
}

var couplingOntwerpHooks = {
  onSuccess: function(formType, result) {
    Router.go('couplinglist');
  }
}

AutoForm.addHooks('couplingleidendform', couplingLeidendHooks);
AutoForm.addHooks('couplingontwerpform', couplingOntwerpHooks);