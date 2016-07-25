var textHooks = {
  before: {
    insert: function(doc) {
      var clean = sanitizeHtml(doc.content, {
	    allowedTags: [ 'div', 'span', 'p', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
	      'img', 'b', 'u', 'i', 'ol', 'ul', 'li', 'table', 'tbody', 
	      'tr', 'td' ],
	    allowedAttributes: {
	      img: [ 'src' ],
	      a: [ 'href' ],
    	  '*': [ 'align', 'center', 'style' ]
	    }
	  });
      
      doc.content = clean;
      
      return doc;
    },
    update: function(doc) {
      var clean = sanitizeHtml(doc.$set.content, {
    	allowedTags: [ 'div', 'span', 'p', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
    	  'img', 'b', 'u', 'i', 'ol', 'ul', 'li', 'table', 'tbody', 
    	  'tr', 'td' ],
    	allowedAttributes: {
    	  img: [ 'src' ],
    	  a: [ 'href' ],
    	  '*': [ 'align', 'center', 'style' ]
    	}
      });
      
      doc.$set.content = clean;
      
      return doc;
    }
  },
  onSuccess: function(formType, result) {
    Router.go('textlist');
  }
}

AutoForm.addHooks('textform', textHooks);