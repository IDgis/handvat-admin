var textHooks = {
  onSuccess: function(formType, result) {
    Router.go('textlist');
  }
}

AutoForm.addHooks('textform', textHooks);