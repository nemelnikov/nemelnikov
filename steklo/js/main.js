jQuery(window).load(function(){ 			

	// Carousel > Demo #2
	$(".carousel-demo2").sliderkit({
		shownavitems:3,
		scroll:1,
		mousewheel:false,
		circular:true,
		start:2,
		auto:true
	});
	
	
});



jQuery(document).ready(function(){
	
	jQuery(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	
	/*jQuery(function() {
		jQuery('input[placeholder], textarea[placeholder]').placeholder();
	});*/
	
	jQuery(function(){
		jQuery.mask.definitions["1"] = "[01234569]";
   		jQuery("input[name=phone]").mask("+7 (199) 999-9999",{placeholder:" "});
	});
	
	//jQuery('.slider').bxSlider({
//		mode:'fade',
//		controls:false,
//		pager:true,
//		auto:true
//	});
	
	
	jQuery(function(){	
		var ts = new Date(2016, 3, 19,23,0,0,0),
			newYear = false;
			
		jQuery('.countdown').countdown({
			timestamp	: ts			
		});
	});	
	
	 $(function() {
		$( ".sliderIn" ).slider({
			max: 2000000,
			min: 500000,
			step:1000,
			value:0,
			range:'min',
			 slide: function( event, ui ) {
$( ".inCount" ).val(  ui.value );


		var a = parseFloat($("#inCount").val());
		var b = parseFloat($("#outCount").val());
		
		var c = parseFloat($(".radioList input:checked").val());
		
		var a1 = a*(c/100)
		var b1 = a1+a-b
		
		var c1 = b1*12
		
		var a11 = a.toString().replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ')
		var b11 = b1.toString().replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ')
		var c11 = c1.toString().replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ')
		
		jQuery("#inMon").text(a11+' руб.');
		jQuery("#outMon").text(b11+' руб.');
		jQuery("#sumMon").text(c11+' руб.');
		
		jQuery(".invested .interBox").height(a/20000);
		jQuery(".received .interBox").height(b1/20000);

}
		});
		 $( ".inCount" ).val( $( ".sliderIn" ).slider( "value" ) );
	});
	
	 $(function() {
		$( ".sliderOut" ).slider({
			max: 450000,
			min: 0,
			step:1000,
			value:50000,
			range:'min',
			 slide: function( event, ui ) {
$( ".outCount" ).val(  ui.value );

var a = parseFloat($("#inCount").val());
		var b = parseFloat($("#outCount").val());
		
		var c = parseFloat($(".radioList input:checked").val());
		
		var a1 = a*(c/100)
		var b1 = a1+a-b
		
		var c1 = b1*12
		
		var a11 = a.toString().replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ')
		var b11 = b1.toString().replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ')
		var c11 = c1.toString().replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ')
		
		jQuery("#inMon").text(a11+' руб.');
		jQuery("#outMon").text(b11+' руб.');
		jQuery("#sumMon").text(c11+' руб.');
		
		jQuery(".invested .interBox").height(a/20000);
		jQuery(".received .interBox").height(b1/20000);


}
		});
		 $( ".outCount" ).val( $( ".sliderOut" ).slider( "value" ) );
	});
	
	$(function() {
		
		var a = parseFloat($("#inCount").val());
		var b = parseFloat($("#outCount").val());
		
		var c = parseFloat($(".radioList input:checked").val());
		
		var a1 = a*(c/100)
		var b1 = a1+a-b
		
		var c1 = b1*12
		
		var a11 = a.toString().replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ')
		var b11 = b1.toString().replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ')
		var c11 = c1.toString().replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ')
		
		jQuery("#inMon").text(a11+' руб.');
		jQuery("#outMon").text(b11+' руб.');
		jQuery("#sumMon").text(c11+' руб.');
		
		jQuery(".invested .interBox").height(a/20000);
		jQuery(".received .interBox").height(b1/20000);
	});
	
	jQuery(".calcBox input").on("change, click", function(){
		var a = parseFloat($("#inCount").val());
		var b = parseFloat($("#outCount").val());
		
		var c = parseFloat($(".radioList input:checked").val());
		
		var a1 = a*(c/100)
		var b1 = a1+a-b
		
		var c1 = b1*12
		
		var a11 = a.toString().replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ')
		var b11 = b1.toString().replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ')
		var c11 = c1.toString().replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ')
		
		jQuery("#inMon").text(a11+' руб.');
		jQuery("#outMon").text(b11+' руб.');
		jQuery("#sumMon").text(c11+' руб.');
		
		jQuery(".invested .interBox").height(a/20000);
		jQuery(".received .interBox").height(b1/20000);
		
		
	});
	
	$('.ui-slider-handle').draggable();
	
	jQuery("input[name=phone]").keypress (
		function(event)
		{
			var key, keyChar;
			if(!event) var event = window.event;
			
			if (event.keyCode) key = event.keyCode;
			else if(event.which) key = event.which;
		
		if(key==null || key==0 || key==8 || key==13 || key==37 || key==39 || key==46 || key==9) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
		
	});

	
	jQuery(".callBackLink, .want, .opList .button").click(function(){
		jQuery(".wrOverlay").fadeIn();	
		var Top_modal_window = (jQuery(document).scrollTop() + 100);
		jQuery(".callBackBox_PopUp").fadeIn().css({"top":Top_modal_window+"px"});	
	});
	
	jQuery(".prodList").click(function(){
		jQuery(".wrOverlay").fadeIn();	
		var Top_modal_window = (jQuery(document).scrollTop() + 100);
		jQuery(".callBackBox_PopUp2").fadeIn().css({"top":Top_modal_window+"px"});
	});
	
	jQuery(".closePopUpLink").click(function(){
		jQuery(this).parent().fadeOut();
		jQuery(".wrOverlay").fadeOut();
	});
	
	jQuery(".findings ul li a").click(function(){
		var Top_modal_window = (jQuery(document).scrollTop() + 10);
		jQuery(".boxClient_PopUp").fadeIn().css({"top":Top_modal_window+"px"});
		
		var th = $(this).parents("li");
		
		var a = th.find(".name").text();
		var b = th.find(".town").text();
		var c = th.find(".priceLine").text();
		var d = th.find(".nbYear").text();
		var e = th.find(".nbImgs").html();
		var f = th.find(".nbText").html();
		
		jQuery("#bcName").text(a);
		jQuery("#bcYear").text(b);
		jQuery("#bcprofit b").text(c);
		jQuery("#bcLong b").text(d);
		jQuery("#bcImgs").html(e);
		jQuery("#bcText").html(f);
		
	});
	
	jQuery(".wrOverlay").click(function(){
		jQuery(".callBackBox_PopUp, .wrOverlay, .okSendBox, .callBackBox_PopUp2").fadeOut();
	});
	
	jQuery(".closeIcon").click(function(){
		jQuery(".infoService").fadeOut();
	});
	
	jQuery("#serv1").click(function(){
		jQuery(".infoService").fadeOut();
		jQuery("#orto").fadeIn();
	});
	
	jQuery("#serv2").click(function(){
		jQuery(".infoService").fadeOut();
		jQuery("#operation").fadeIn();
	});
	
	jQuery("#serv3").click(function(){
		jQuery(".infoService").fadeOut();
		jQuery("#cornCanal").fadeIn();
	});
	
});	
