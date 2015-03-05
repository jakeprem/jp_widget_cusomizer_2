//created by Joshua Shuster
//https://github.com/naysayer
var urlObj = {}
var baseUrl, url, key, selectedColor = '';

$(document).ready(function(){
	initiate_color_picker();
	init_variables();
	init_jQuery_UI();
	build_url();
	get_widget();
	//reset_all_settings();
	choose_font();
});

/**
* This function initializes the variables. It is the place to update the default color, base url, etc
*/
function init_variables(){
	urlObj = {
	'cfc': '000000',
	'chc' : 'ed7c31',
	'clc' : '000000',
	'cbg' : 'FFFFFF',
	'bbg' : '42ad9e',
	'blc' : 'FFFFFF',
	'bhc' : 'FFFFFF',
	'fbg' : 'FFFFFF',
	'ffc' : 'ed7c31',
	'flc' : 'ed7c31',
	'fhc' : 'ed7c31',
	'oft' : 'Tahoma, Geneva, sans-serif',
	'tfsz' : '14',
	'pfsz' : '12',
	'ifsz' : '11.5',
	'ffsz' : '13',
	'ori' : "vert",
	'wpw' : "215"
	};

	baseUrl = "http://192.168.87.196/widget.php"
	build_url();
	key='';
	selectedColor='';
	init_colors();
}

function build_url(){
	url= baseUrl + '?cfc='+ urlObj['cfc'] +'&chc='+ urlObj['chc'] +'&clc='+ urlObj['clc'] +'&cbg='+ urlObj['cbg'] +'&bbg='+ urlObj['bbg'] +
					'&blc='+ urlObj['blc'] +'&bhc='+ urlObj['bhc'] +'&fbg='+ urlObj['fbg']+'&ffc='+ urlObj['ffc'] +'&flc='+ urlObj['flc']+
					'&fhc='+ urlObj['fhc'] + '&oft='+urlObj['oft'] + '&tfsz='+urlObj['tfsz'] + 'px'+ '&pfsz='+urlObj['pfsz'] + 'px' + 
					'&ifsz='+urlObj['ifsz'] + 'px' + '&ffsz='+urlObj['ffsz'] + 'px' + '&ori='+ urlObj['ori'] + '';
}

//Generates the widget in an iframe (via HTML)
function get_widget(){
	var iframe=$('<iframe/>').attr({src:url,id:'widget_iframe',frameborder:'0'});

	$('#widget').fadeOut(400,function(){$(this).html('').append(iframe);
		$(this).fadeIn(400);
		$('#textarea').click(function(){$(this).select();});
		var scriptUrl=url.replace("/widget.php","/upgotd_customizer.php");
		//The widget
		$('#textarea').text("<script src='"+scriptUrl+"' type='text/javascript' charset='utf-8'></script><noscript><a href='http://legacy.joshuaproject.net/upgotdfeed.php'>View Unreached People of the Day</a></noscript>");
	});
}

/**
 * Updates URL with new options and calls get_widget to refresh the widget. It
 * is called after every color changing funciton.
 */
function update_Widget(){
    build_url();
	get_widget();
}

// Set the colors displayed by the colorpicker to the defaults
function init_colors() {
	$('.colorpicker').each(function () {
		var id = $(this).attr('id');
		$(this).spectrum('set', urlObj[id]);
	});
}

function init_jQuery_UI(){
	$( ".accordion" ).accordion({
		collapsible: true,
		active:0,
		heightStyle: "content",
	});
	$( "#radioset" ).buttonset();
	$( ".reset" ).button();
	$( ".slider" ).slider({
		min: 175,
		max: 250,
		value: urlObj['wpw'],
		change: function ( event, ui) {
			var sliderVal = $("#width_slider").slider("value");
			$("#wpw").spinner("value", sliderVal);
		}
	});
	$( ".spinner" ).spinner({
		min: 175,
		max: 250,
		change: function ( event, ui) {
			var spinnerVal = $("#wpw").spinner("value");
			$("#width_slider").slider("value", spinnerVal);
		},
		spin: function( event, ui ) {
			var spinnerVal = $("#wpw").spinner("value");
			$("#width_slider").slider("value", spinnerVal);
		},
	});
	$(".reset").click(function() {
		reset_all_settings();
	});
}

function jq_updater() {
	$("#width_slider").slider({
	});
}
function initiate_color_picker(){
	$(".colorpicker").spectrum({
	    showInput: true,
	    className: "colorClass",
	    showInitial: true,
	    showPalette: true,
	    showSelectionPalette: true,
	    hideAfterPaletteSelect:true,
	    maxPaletteSize: 10,
	    preferredFormat: "hex",
	    localStorageKey: "colorpicker.local",
	    move: function () {   },
	    show: function () {},
	    beforeShow: function () {},
	    hide: function () {},
	    change: function(color) {
	    	key = $(this).attr('id')
	    	str = color.toHexString().replace('#','');
	    	urlObj[key] = str;
	    	update_Widget();
	    },
	    palette: [
	    	["#000000", "#FFFFFF","#0000FF","#FF0000","#00FF00"],
	    	["#E6E2AF", "#A7A37E", "#EFECCA", "#046380", "#002F2F"],
	    	["#FCFFF5", "#D1DBBD", "#91AA9D", "#3E606F", "#193441"],
	    	["#105B63", "#FFFAD5", "#FFD34E", "#DB9E36", "#BD4932"],

	    	//The default color picker palette
	        /*["#000000", "#0000ff", "#000000", "#cccccc", "#dadada","#fff"],
	        ["#980000", "#f00", "#000", "#000", "#000",
	        "#000", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
	        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
	        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
	        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
	        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
	        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
	        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
	        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
	        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
	        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
	        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]*/
	    ]
	});	
}

//Resets all settings
function reset_all_settings(){
	$('button.reset').click(function(){
		init_variables();
		$('select').val("");
		update_Widget();
	});
}

//Font style, type and size
function choose_font() { 
	$('#font-type').change(function() {
		urlObj['oft'] = $('#font-type').val();
		build_url();
		get_widget();
	});

	$('#title-sz').change(function() {
		urlObj['tfsz'] = $('#title-sz').val();
		build_url();
		get_widget();
	});

	$('#people-sz').change(function() {
		urlObj['pfsz'] = $('#people-sz').val();
		build_url();
		get_widget();
	});

	$('#info-sz').change(function() {
		urlObj['ifsz'] = $('#info-sz').val(); 
		build_url();
		get_widget();
	});

	$('#footer-sz').change(function() {
		urlObj['ffsz'] = $('#footer-sz').val(); 
		build_url();
		get_widget();
	});

	$('#font-size2').change(function() {
		urlObj['ffsz'] = $('#font-size2').val(); 
		build_url();
		get_widget();
	});
}

//Widget orientation
function choose_orientation() {
	$('.widget-orientation').change(function() {
		urlObj['ori'] = $('input:radio[name=orientation:checked').val();
		build_url();
		get_widget();
	});
}