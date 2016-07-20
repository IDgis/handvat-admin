var couplingHooks = {
  onSuccess: function(formType, result) {
    Router.go('couplinglist');
  }
}

AutoForm.addHooks('couplingform', couplingHooks);