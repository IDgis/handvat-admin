import { Text } from '/imports/api/collections/text.js';
import { CouplingLeidend } from '/imports/api/collections/couplingleidend.js';
import { CouplingOntwerp } from '/imports/api/collections/couplingontwerp.js';

Router.map(function () {
  this.route('api-texts', {
    path: '/api/texts',
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
	      while ((i = html.indexOf('<img', i + 1)) != -1) {
	  	    var indexEnd = html.indexOf('>', i) + 1;
	  	    images.push(html.substring(i, indexEnd));
            
	  	    html = html.replace(html.substring(i, indexEnd), '');
	  	  }
        }
        
        newTexts.push({
          id: text._id,
          name: text.name,
          appCoupling: text.appCoupling,
          texttype: text.texttype,
          html: html,
          print: text.contentPrint,
          images: images
        });
      });
	    
      this.response.setHeader('Content-Type', 'application/json; charset=UTF-8');
	  this.response.setHeader('Access-Control-Allow-Origin', '*');
      this.response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	  this.response.end(EJSON.stringify(newTexts, {indent: true}));
    }
  });
});

Router.map(function () {
  this.route('api-text-id', {
    path: '/api/text/id/:id',
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
  this.route('api-text-app-coupling', {
    path: '/api/text/app-coupling/:appCoupling',
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
  this.route('api-text-texttype', {
    path: '/api/text/texttype/:texttype',
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
	      while ((i = html.indexOf('<img', i + 1)) != -1) {
	  	    var indexEnd = html.indexOf('>', i) + 1;
	  	    images.push(html.substring(i, indexEnd));
	  	    html = html.replace(html.substring(i, indexEnd), '');
	  	  }
	    }
	    	 
	    newTexts.push({
  	      id: text._id,
  	      name: text.name,
  	      appCoupling: text.appCoupling,
  	      texttype: text.texttype,
  	      html: html,
  	      print: text.contentPrint,
  	      images: images
  	    });
	  });
	      
	  this.response.setHeader('Content-Type', 'application/json; charset=UTF-8');
	  this.response.setHeader('Access-Control-Allow-Origin', '*');
	  this.response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	  this.response.end(EJSON.stringify(newTexts, {indent: true}));
    }
  });
});

Router.map(function () {
  this.route('api-text-name', {
    path: '/api/text/name/:name',
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
	      while ((i = html.indexOf('<img', i + 1)) != -1) {
	  	    var indexEnd = html.indexOf('>', i) + 1;
	  	    images.push(html.substring(i, indexEnd));
	  	    html = html.replace(html.substring(i, indexEnd), '');
	  	  }
	    }
	    	 
	    newTexts.push({
  	      id: text._id,
  	      name: text.name,
  	      appCoupling: text.appCoupling,
  	      texttype: text.texttype,
  	      html: html,
  	      print: text.contentPrint,
  	      images: images
  	    });
	  });
	      
	  this.response.setHeader('Content-Type', 'application/json; charset=UTF-8');
	  this.response.setHeader('Access-Control-Allow-Origin', '*');
	  this.response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	  this.response.end(EJSON.stringify(newTexts, {indent: true}));
	}
  });
});

Router.map(function () {
  this.route('api-text-typename', {
    path: '/api/text/typename/:texttype/:name',
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
	      while ((i = html.indexOf('<img', i + 1)) != -1) {
	  	    var indexEnd = html.indexOf('>', i) + 1;
	  	    images.push(html.substring(i, indexEnd));
	  	    html = html.replace(html.substring(i, indexEnd), '');
	  	  }
	    }
	    	 
	    newTexts.push({
  	      id: text._id,
  	      name: text.name,
  	      appCoupling: text.appCoupling,
  	      texttype: text.texttype,
  	      html: html,
  	      print: text.contentPrint,
  	      images: images
  	    });
	  });
	      
	  this.response.setHeader('Content-Type', 'application/json; charset=UTF-8');
	  this.response.setHeader('Access-Control-Allow-Origin', '*');
	  this.response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	  this.response.end(EJSON.stringify(newTexts, {indent: true}));
	}
  });
});

Router.map(function () {
  this.route('api-coupling-leidend', {
    path: '/api/coupling/leidend',
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
  this.route('api-coupling-leidend-id', {
    path: '/api/coupling/leidend/:id',
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
  this.route('api-coupling-ontwerp', {
    path: '/api/coupling/ontwerp',
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
  this.route('api-coupling-ontwerp-type-sector-kwaliteit', {
    path: '/api/coupling/ontwerp/:landschapstype/:sector/:kernkwaliteit',
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
