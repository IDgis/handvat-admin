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
  }
}));

CouplingLeidend.allow({
	insert: function() {
	    return true;
	},
	update: function() {
	    return true;
	},
	remove: function() {
	    return true;
	}
});