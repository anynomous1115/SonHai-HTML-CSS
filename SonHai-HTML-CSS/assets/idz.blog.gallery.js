 jQuery(document).ready(function(){
    var owl = jQuery(".blog-carousel");
	 
	owl.owlCarousel({
		itemsCustom:[[0,1],[400,1],[700,1],[1000,1],[1200,1],[1600,1]],
		autoPlay : 6000,
		pagination: true,
		navigation : false,	
		slideSpeed : 300,
		paginationSpeed : 400,
	});	 

 });
 