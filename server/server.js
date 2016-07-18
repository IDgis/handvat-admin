Meteor.startup(function () {
  if (Type.find().count() === 0) {
    Type.insert(
      { name: 'landschapstype', label: 'landschapstype' }
    );
    
    Type.insert(
      { name: 'sector', label: 'sector' }
    ); 
    
    Type.insert(
	  { name: 'kernkwaliteit', label: 'kernkwaliteit' }
    ); 
    
    Type.insert(
      { name: 'leidend_beginsel', label: 'leidend beginsel' }
    ); 
    
    Type.insert(
      { name: 'ontwerpprincipe', label: 'ontwerpprincipe' }
    ); 
  }
});