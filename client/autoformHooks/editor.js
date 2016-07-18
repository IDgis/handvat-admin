var textHooks = {
  onSuccess: function(formType, result) {
    Router.go('list');
  }
}

AutoForm.addHooks('textform', textHooks);