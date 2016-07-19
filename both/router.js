Router.configure({
	layoutTemplate: 'main'
});

Router.route('/handvat-admin/', {
	name: 'text'
});

Router.route('/coupling', {
	name: 'coupling'
});

Router.route('/add', {
	name: 'add',
	template: 'editor'
});

Router.route('/edit/:_id', function () {
	var text = Text.findOne({_id: this.params._id});
	this.render('editor', {data: text});
}, {
    name: 'edit'
});