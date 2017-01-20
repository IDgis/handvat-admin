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
	    	 var texttype = text.texttype;
	    	 var i = -1;
	    	 var images = [];
	    	 
	    	 if(typeof html !== 'undefined' && (texttype === 'ontwerpprincipe' || texttype === 'leidend_beginsel')) {
	    		 while ((i = html.indexOf('<img', i + 1)) != -1){
	  	    	   var indexEnd = html.indexOf('>', i) + 1;
	  	    	   images.push(html.substring(i, indexEnd));
	  	    	   
	  	    	   html = html.replace(html.substring(i, indexEnd), '');
	  	    	 }
	    	 }
	    	 
	    	 newTexts.push(
  	    	   {
  	    		   id: text._id,
  	    		   name: text.name,
  	    		   appCoupling: text.appCoupling,
  	    		   texttype: text.texttype,
  	    		   html: html,
  	    		   print: text.contentPrint,
  	    		   images: images
  	    	   }
  	    	 );
	      });
	      
	      this.response.setHeader('Content-Type', 'application/json; charset=UTF-8');
	      this.response.setHeader('Access-Control-Allow-Origin', '*');
		  this.response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	      this.response.end(EJSON.stringify(newTexts, {indent: true}));
	  }
	});
});

Router.map(function () {
	this.route('text_json/id/:id', {
		path: '/text/json/id/:id',
	    where: 'server',
	    action: function () {
	    	var text = Text.findOne({_id: this.params.id});
	    	
	    	if(typeof text !== 'undefined') {
	    		var html = text.content;
	    		var i = -1;
	    		var images = [];
	    		
	    		if(typeof html !== 'undefined' && (text.texttype === 'ontwerpprincipe' || text.texttype === 'leidend_beginsel')) {
	    			while ((i = html.indexOf('<img', i + 1)) != -1) {
	    				var indexEnd = html.indexOf('>', i) + 1;
	    				images.push(html.substring(i, indexEnd));
	    				
	    				html = html.replace(html.substring(i, indexEnd), '');
	    			}
	    		}
	    	 
	    		var newText = {
	    			id: text._id,
	    			name: text.name,
	    	    	appCoupling: text.appCoupling,
	    	    	texttype: text.texttype,
	    	    	html: html,
	    	    	print: text.contentPrint,
	    	    	images: images
	    		}
	    		
	    		this.response.setHeader('Content-Type', 'application/json; charset=UTF-8');
			    this.response.setHeader('Access-Control-Allow-Origin', '*');
				this.response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
			    this.response.end(EJSON.stringify(newText, {indent: true}));
	    	} else {
	    		this.response.setHeader('Content-Type', 'application/json; charset=UTF-8');
			    this.response.setHeader('Access-Control-Allow-Origin', '*');
				this.response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
			    this.response.end(EJSON.stringify(text, {indent: true}));
	    	}
	    }
	});
});

Router.map(function () {
	this.route('text_json/appCoupling/:appCoupling', {
		path: '/text/json/appCoupling/:appCoupling',
	    where: 'server',
	    action: function () {
	    	var text = Text.findOne({appCoupling: this.params.appCoupling});
	    	
	    	if(typeof text !== 'undefined') {
	    		var html = text.content;
	    		var i = -1;
	    		var images = [];
	    		
	    		if(typeof html !== 'undefined' && (text.texttype === 'ontwerpprincipe' || text.texttype === 'leidend_beginsel')) {
	    			while ((i = html.indexOf('<img', i + 1)) != -1) {
	    				var indexEnd = html.indexOf('>', i) + 1;
	    				images.push(html.substring(i, indexEnd));
	    				
	    				html = html.replace(html.substring(i, indexEnd), '');
	    			}
	    		}
	    	 
	    		var newText = {
	    			id: text._id,
	    			name: text.name,
	    	    	appCoupling: text.appCoupling,
	    	    	texttype: text.texttype,
	    	    	html: html,
	    	    	print: text.contentPrint,
	    	    	images: images
	    		}
		      
			    this.response.setHeader('Content-Type', 'application/json; charset=UTF-8');
			    this.response.setHeader('Access-Control-Allow-Origin', '*');
				this.response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
			    this.response.end(EJSON.stringify(newText, {indent: true}));
	    	} else {
	    		this.response.setHeader('Content-Type', 'application/json; charset=UTF-8');
			    this.response.setHeader('Access-Control-Allow-Origin', '*');
				this.response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
			    this.response.end(EJSON.stringify(text, {indent: true}));
	    	}
	    }
	});
});

Router.map(function () {
	this.route('text_json/texttype/:texttype', {
		path: '/text/json/texttype/:texttype',
	    where: 'server',
	    action: function () {
	      var texts = Text.find({texttype: this.params.texttype});
	      var newTexts = [];
	      
	      texts.forEach(function(text) {
	    	 var html = text.content;
	    	 var texttype = text.texttype;
	    	 var i = -1;
	    	 var images = [];
	    	 
	    	 if(typeof html !== 'undefined' && (texttype === 'ontwerpprincipe' || texttype === 'leidend_beginsel')) {
	    		 while ((i = html.indexOf('<img', i + 1)) != -1){
	  	    	   var indexEnd = html.indexOf('>', i) + 1;
	  	    	   images.push(html.substring(i, indexEnd));
	  	    	   
	  	    	   html = html.replace(html.substring(i, indexEnd), '');
	  	    	 }
	    	 }
	    	 
	    	 newTexts.push(
  	    	   {
  	    		   id: text._id,
  	    		   name: text.name,
  	    		   appCoupling: text.appCoupling,
  	    		   texttype: text.texttype,
  	    		   html: html,
  	    		   print: text.contentPrint,
  	    		   images: images
  	    	   }
  	    	 );
	      });
	      
	      this.response.setHeader('Content-Type', 'application/json; charset=UTF-8');
	      this.response.setHeader('Access-Control-Allow-Origin', '*');
		  this.response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	      this.response.end(EJSON.stringify(newTexts, {indent: true}));
	  }
	});
});

Router.map(function () {
	this.route('text_json/name/:name', {
		path: '/text/json/name/:name',
	    where: 'server',
	    action: function () {
	      var texts = Text.find({name: this.params.name});
	      var newTexts = [];
	      
	      texts.forEach(function(text) {
	    	 var html = text.content;
	    	 var texttype = text.texttype;
	    	 var i = -1;
	    	 var images = [];
	    	 
	    	 if(typeof html !== 'undefined' && (texttype === 'ontwerpprincipe' || texttype === 'leidend_beginsel')) {
	    		 while ((i = html.indexOf('<img', i + 1)) != -1){
	  	    	   var indexEnd = html.indexOf('>', i) + 1;
	  	    	   images.push(html.substring(i, indexEnd));
	  	    	   
	  	    	   html = html.replace(html.substring(i, indexEnd), '');
	  	    	 }
	    	 }
	    	 
	    	 newTexts.push(
  	    	   {
  	    		   id: text._id,
  	    		   name: text.name,
  	    		   appCoupling: text.appCoupling,
  	    		   texttype: text.texttype,
  	    		   html: html,
  	    		   print: text.contentPrint,
  	    		   images: images
  	    	   }
  	    	 );
	      });
	      
	      this.response.setHeader('Content-Type', 'application/json; charset=UTF-8');
	      this.response.setHeader('Access-Control-Allow-Origin', '*');
		  this.response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	      this.response.end(EJSON.stringify(newTexts, {indent: true}));
	  }
	});
});

Router.map(function () {
	this.route('text_json/typename/:texttype/:name', {
		path: '/text/json/typename/:texttype/:name',
	    where: 'server',
	    action: function () {
	      var texts = Text.find({texttype: this.params.texttype, name: this.params.name});
	      var newTexts = [];
	      
	      texts.forEach(function(text) {
	    	 var html = text.content;
	    	 var texttype = text.texttype;
	    	 var i = -1;
	    	 var images = [];
	    	 
	    	 if(typeof html !== 'undefined' && (texttype === 'ontwerpprincipe' || texttype === 'leidend_beginsel')) {
	    		 while ((i = html.indexOf('<img', i + 1)) != -1){
	  	    	   var indexEnd = html.indexOf('>', i) + 1;
	  	    	   images.push(html.substring(i, indexEnd));
	  	    	   
	  	    	   html = html.replace(html.substring(i, indexEnd), '');
	  	    	 }
	    	 }
	    	 
	    	 newTexts.push(
  	    	   {
  	    		   id: text._id,
  	    		   name: text.name,
  	    		   appCoupling: text.appCoupling,
  	    		   texttype: text.texttype,
  	    		   html: html,
  	    		   print: text.contentPrint,
  	    		   images: images
  	    	   }
  	    	 );
	      });
	      
	      this.response.setHeader('Content-Type', 'application/json; charset=UTF-8');
	      this.response.setHeader('Access-Control-Allow-Origin', '*');
		  this.response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
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
	      this.response.setHeader('Access-Control-Allow-Origin', '*');
		  this.response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	      this.response.end(EJSON.stringify(coupling, {indent: true}));
	  }
	});
});

Router.map(function () {
	this.route('coupling_leidend_json/:id', {
		path: '/coupling/leidend/json/:id',
	    where: 'server',
	    action: function () {
	      var algemeen = Text.findOne({texttype: 'landschapstype', name: 'Algemeen'});
	      
	      var couplings = CouplingLeidend.find({landschapstype: { $in: [this.params.id, algemeen._id] } }).fetch();
	      var beginselen = [];
	      
	      couplings.forEach(function(coupling) {
	    	  coupling.leidend_beginsel.forEach(function(beginsel) {
	    		  beginselen.push(beginsel);
	    	  });
	      });
	      
	      var distinctBeginselen = _.uniq(beginselen, false);
	      
	      this.response.setHeader('Content-Type', 'application/json; charset=UTF-8');
	      this.response.setHeader('Access-Control-Allow-Origin', '*');
		  this.response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	      this.response.end(EJSON.stringify(distinctBeginselen, {indent: true}));
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
	      this.response.setHeader('Access-Control-Allow-Origin', '*');
		  this.response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	      this.response.end(EJSON.stringify(coupling, {indent: true}));
	  }
	});
});

Router.map(function () {
	this.route('coupling_ontwerp_json/:landschapstype/:sector/:kernkwaliteit', {
		path: '/coupling/ontwerp/json/:landschapstype/:sector/:kernkwaliteit',
	    where: 'server',
	    action: function () {
	    	var algemeen = Text.findOne({texttype: 'landschapstype', name: 'Algemeen'});
	    	
	    	var couplings = CouplingOntwerp.find({landschapstype: { $in: [this.params.landschapstype, algemeen._id] },
	    			sector: this.params.sector, kernkwaliteit: this.params.kernkwaliteit } ).fetch();
	    	var ontwerpen = [];
		    
	    	couplings.forEach(function(coupling) {
		    	coupling.ontwerpprincipe.forEach(function(ontwerp) {
		    		ontwerpen.push(ontwerp);
		    	});
		    });
		      
		    var distinctOntwerpen = _.uniq(ontwerpen, false);
	      
		    this.response.setHeader('Content-Type', 'application/json; charset=UTF-8');
		    this.response.setHeader('Access-Control-Allow-Origin', '*');
		    this.response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
		    this.response.end(EJSON.stringify(distinctOntwerpen, {indent: true}));
	  }
	});
});