Meteor.startup(function () {
  if (TextType.find().count() === 0) {
	  TextType.insert(
      { name: 'landschapstype', label: 'landschapstype' }
    );
    
	  TextType.insert(
      { name: 'sector', label: 'sector' }
    ); 
    
	  TextType.insert(
	  { name: 'kernkwaliteit', label: 'kernkwaliteit' }
    ); 
    
	  TextType.insert(
      { name: 'leidend_beginsel', label: 'leidend beginsel' }
    ); 
    
	  TextType.insert(
      { name: 'ontwerpprincipe', label: 'ontwerpprincipe' }
    ); 
  }
  
  if(CouplingType.find().count() === 0) {
	  CouplingType.insert(
      { name: 'leidend_beginsel', label: 'landschapstype - leidend beginsel' }
    );
    
	  CouplingType.insert(
      { name: 'land_sector_kern_ontwerp', label: 'landschapstype - sector - kernkwaliteit - ontwerpprincipe' }
    );
  }
});