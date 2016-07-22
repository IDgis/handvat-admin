CouplingLeidend = new Mongo.Collection("couplingleidend");

CouplingLeidend.attachSchema (new SimpleSchema({
  landschapstype: {
    type: String,
    allowedValues: function() {
    	var records = Text.find({texttype: 'landschapstype'}).fetch();
    	var avs = [];
    	records.forEach(function(item) {
    		avs.push(item._id);
    	});
    	
    	return avs;
    }
  },
  leidend_beginsel: {
    type: [String],
    allowedValues: function() {
    	var records = Text.find({texttype: 'leidend_beginsel'}).fetch();
    	var avs = [];
    	records.forEach(function(item) {
    		avs.push(item._id);
    	});
    	
    	return avs;
    }
  },
  userId: {
	  type: String,
  }
}));

CouplingLeidend.allow({
	insert: function(userId, doc){
	    return doc && doc.userId === userId;
	},
	update: function(userId, doc){
	    return doc && doc.userId === userId;
	},
	remove: function(userId, doc){
	    return doc && doc.userId === userId;
	}
});