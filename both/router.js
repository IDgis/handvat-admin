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

Router.route('/coupling/leidend/:_id', function () {
	var coupling = CouplingLeidend.findOne({_id: this.params._id});
	this.render('couplingform', {data: coupling});
}, {
    name: 'couplingleidendedit'
});

Router.route('/coupling/ontwerp/:_id', function () {
	var coupling = CouplingOntwerp.findOne({_id: this.params._id});
	this.render('couplingform', {data: coupling});
}, {
    name: 'couplingontwerpedit'
});

Router.map(function () {
	this.route('text_json', {
		path: '/text/json',
	    where: 'server',
	    action: function () {
	      var texts = Text.find();
	      var newTexts = [];
	      
	      texts.forEach(function(text) {
	    	 var html = text.content;
	    	 
	    	 var i = -1;
	    	 var images = [];
	    	 while ((i = html.indexOf('<img', i + 1)) != -1){
	    	   var indexEnd = html.indexOf('>', i) + 1;
	    	   images.push(html.substring(i, indexEnd));
	    	   
	    	   var html = html.replace(html.substring(i, indexEnd), '');
	    	 }
	    	 
	    	 newTexts.push(
	    	   {
	    		   id: text._id,
	    		   name: text.name,
	    		   texttype: text.texttype,
	    		   html: html,
	    		   images: images
	    	   }
	    	 );
	      });
	      
	      this.response.setHeader('Content-Type', 'application/json; charset=UTF-8');
	      this.response.end(EJSON.stringify(newTexts, {indent: true}));
	  }
	});
});

Router.map(function () {
	this.route('coupling_leidend_json', {
		path: '/coupling/leidend/json',
	    where: 'server',
	    action: function () {
	      var coupling = CouplingLeidend.find().fetch();
	      
	      this.response.setHeader('Content-Type', 'application/json; charset=UTF-8');
	      this.response.end(EJSON.stringify(coupling, {indent: true}));
	  }
	});
});

Router.map(function () {
	this.route('coupling_ontwerp_json', {
		path: '/coupling/ontwerp/json',
	    where: 'server',
	    action: function () {
	      var coupling = CouplingOntwerp.find().fetch();
	      
	      this.response.setHeader('Content-Type', 'application/json; charset=UTF-8');
	      this.response.end(EJSON.stringify(coupling, {indent: true}));
	  }
	});
});