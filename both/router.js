Router.configure({
	layoutTemplate: 'main'
});

Router.route('/handvat-admin/', {
	name: 'list'
});

Router.route('/add', {
	name: 'add',
	template: 'editor'
});

Router.route('/edit/:_id', function () {
	var text = Texts.findOne({_id: this.params._id});
	this.render('editor', {data: text});
}, {
    name: 'edit'
});