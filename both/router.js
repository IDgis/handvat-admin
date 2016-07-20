Router.configure({
	layoutTemplate: 'main'
});

Router.route('/handvat-admin/', {
	name: 'textlist'
});

Router.route('/text/add', {
	name: 'textadd',
	template: 'textform'
});

Router.route('/text/edit/:_id', function () {
	var text = Text.findOne({_id: this.params._id});
	this.render('textform', {data: text});
}, {
    name: 'textedit'
});

Router.route('/coupling', {
	name: 'couplinglist'
});

Router.route('/coupling/add', {
	name: 'couplingadd',
	template: 'couplingform'
});

Router.route('/text/coupling/:_id', function () {
	var coupling = CouplingOntwerp.findOne({_id: this.params._id});
	this.render('couplingform', {data: coupling});
}, {
    name: 'couplingedit'
});