Router.configure({
    layoutTemplate: 'main'
});


Router.route('/list', 'list'), {
	name: 'list'
};

Router.route('/add','editor'), {
	name: 'add'
};



Router.route('/edit/:_id', function () {
	  var text = Texts.findOne({_id: this.params._id});
	  this.render('editor', {data: text});
}, {
	name: 'edit'
});



