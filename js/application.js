//created by Joshua Shuster
//https://github.com/naysayer

//Modified by Jake Prem, John Nagelkirk and Andrei Popa
var urlObj, colTemp = {};
var baseUrl, url, key, selectedColor = '';

$(document).ready(function(){
	initiate_color_picker();
	init_variables();
	init_accordion();
	init_jQuery_UI();
	colorTemplate();
	choose_orientation();
	init_fonts();
	build_url();
	get_widget();
});

/**
* This function initializes the variables. It is the place to update the default color, base url, etc
*/
function init_variables(){
	urlObj = {
	'cfc': '7b7670',
	'chc' : 'ed7c31',
	'clc' : 'ed7c31',
	'cbg' : 'FFFFFF',
	'bbg' : '42ad9e',
	'blc' : 'FFFFFF',
	'bhc' : '000000',
	'fbg' : 'FFFFFF',
	'ffc' : 'ed7c31',
	'flc' : 'ed7c31',
	'fhc' : 'ed7c31',
	'oft' : 'Tahoma, Geneva, sans-serif',
	'tfsz' : '14',
	'pfsz' : '14',
	'ifsz' : '11.5',
	'ffsz' : '13',
	'ori' : 'vert',
	'wpw' : '215',
	'bdw' : '0px',
	'bdc' : '7b7670',
	'bdrtl' : '0',
	'bdrtr' : '0',
	'bdrbl' : '0',
	'bdrbr' : '0',
	'pop' : 1,
	'lan' : 1,
	'relg' : 1,
	'eva' : 1,
	'stat' : 1,
	};

	colTemp = {
		'temp1' : {
			//Center Font
			'cfc' : '7b7670',
			//Center Hover
			'chc' : 'ed7c31',
			//Center Link
			'clc' : 'ed7c31',
			//Background Color
			'cbg' : 'FFFFFF',
			//Header Background
			'bbg' : '42ad9e',
			//Header Font
			'blc' : 'FFFFFF',
			//Header Hover
			'bhc' : '000000',
			//Footer Background
			'fbg' : 'FFFFFF',
			//Footer Font
			'ffc' : 'ed7c31',
			//Footer Link
			'flc' : 'ed7c31',
			//Footer Hover
			'fhc' : 'ed7c31',
		},
		'temp2' : {
			'cfc' : '000000',			
			'chc' : '000000',			
			'clc' : '000000',			
			'cbg' : 'FFFFFF',			
			'bbg' : '000000',			
			'blc' : 'FFFFFF',			
			'bhc' : 'FFFFFF',			
			'fbg' : '000000',			
			'ffc' : 'FFFFFF',			
			'flc' : 'FFFFFF',			
			'fhc' : 'FFFFFF',
		},
		'temp3' : {
			'cfc' : 'FFFFFF',
			'chc' : 'FFFFFF',
			'clc' : 'FFFFFF',
			'cbg' : 'FFFFFF',
			'bbg' : 'FFFFFF',
			'blc' : 'FFFFFF',
			'bhc' : 'FFFFFF',
			'fbg' : 'FFFFFF',
			'ffc' : 'FFFFFF',
			'flc' : 'FFFFFF',
			'fhc' : 'FFFFFF',
		},
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
					'&ifsz='+urlObj['ifsz'] + 'px' + '&ffsz='+urlObj['ffsz'] + 'px' + '&ori='+ urlObj['ori'] + '&wpw=' + urlObj['wpw'] + 'px' + 
					'&bdrtl=' + urlObj['bdrtl'] + 'px' + '&bdrtr=' + urlObj['bdrtr'] + 'px' + '&bdrbl=' + urlObj['bdrbl'] + 'px' +
					'&bdrbr=' + urlObj['bdrbr'] + 'px' + '&bdc=' + urlObj['bdc'] + '&bdw=' + urlObj['bdw'] + '&pop=' + urlObj['pop'] + 
					'&lan=' + urlObj['lan'] + '&relg=' + urlObj['relg'] + '&eva=' + urlObj['eva'] + '&stat=' + urlObj['stat'] + '';

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
 * is called after every option change.
 */
function update_Widget(){
    build_url();
	get_widget();
}

// Set the colors displayed by the colorpicker to the colors stored in urlObj.
function init_colors() {
	$('.colorpicker').each(function () {
		var id = $(this).attr('id');
		$(this).spectrum('set', urlObj[id]);
	});
}

/**
 * Creates the accordion. This is in it's own function so that init_jQuery_UI can be called in a reset function. (Currently not in use)
*/
function init_accordion(){
	$( ".accordion" ).accordion({
		collapsible: true,
		active:0,
		heightStyle: "content",
	});
}

/**
 * This function initializes most of the jQuery UI elements. More comments within.
 */
function init_jQuery_UI(){
	//This call creates all of the radio buttons.
	$( ".radioset" ).buttonset();
	//This call creates the normal buttons.
	$( ".button" ).button();
	/**
	 * This call currently creates the width slider. If properly coded it could initialize all sliders.  
	 * The problem is its min, max, and function calls are all set to the width values instead of being read in from a data object.
	 * I would probably create min[], max[], and value[] objects of some sort so you could set key based on the id.
	 * Then you could call min[key], max[key], and value[key] to set the options as well as in the function possibly.
	 * You might still need a separate initialize for spinner/slider pairs and unpaired spinners and sliders.
	 */
	$( ".slider" ).slider({
		min: 175,
		max: 250,
		value: urlObj['wpw'],
		change: function ( event, ui) {
			var sliderVal = $("#width_slider").slider("value");
			$("#wpw").spinner("value", sliderVal);
		}
	});
	//This creates border radius slider
	$("#bdr").slider({
		min: 0,
		max: 25,
		value: 0,
		change: function ( event, ui) {
			urlObj['bdr'] = $('#bdr').slider("value");
			build_url();
			update_Widget();
		}
	})
	//The spinners have the same issue as sliders as far as duplicated code
	$( ".spinner" ).spinner({
		min: 175,
		max: 250,
		value: urlObj['wpw'],
		change: function ( event, ui) {
			var spinnerVal = $("#wpw").spinner("value");
			$("#width_slider").slider("value", spinnerVal);
			urlObj['wpw'] = spinnerVal;
			build_url();
			get_widget();
		},
		spin: function( event, ui ) {
			var spinnerVal = $("#wpw").spinner("value");
			$("#width_slider").slider("value", spinnerVal);			
		},
	});
	$(".font_spinner").spinner();
	/**
	 * This creates the select menus for the fonts. It could probably be more dynamic
	 * in the same way as the spinners and the sliders. I also haven't been able to
	 * get the select menus to set to their default value on reset all.
	 */
	$(".fontpicker").selectmenu({
		width: 200,
		maxHeight: 100,
		change: function( event, ui ) {
			key = $(this).attr('id');
			urlObj[key] = $('#'+key).val();
			update_Widget();
		},
	});
	//This creates border width select menu
	$( "#border_width" ).selectmenu({
		width: 200,
		change: function ( event, ui) {
			urlObj['bdw'] = $('#border_width').val();
			build_url();
			update_Widget();
		}
	});
	/**
	 * These are the event handlers. They should maybe be in a separate function.
	 */
	//The button click handler for the reset button.
	$("#reset").click(function() {
		reset_all_settings();
	});
	//The button event handler for the field toggles.
	$(".jq_check").click(function() {
		key = $(this).attr('id');
		if ($(this).is(':checked')) {
			urlObj[key] = '1';
			update_Widget();
		}
		else {
			urlObj[key] = '0';
			update_Widget();
		}
	});
	$()
}

/**
 * The color picker generator. It uses spectrum.js
 * Everything here works and is dynamically generated.
 * The palette should probably have more options added.
 * For documentation of spectrum.js visit
 * https://bgrins.github.io/spectrum/
 */
function initiate_color_picker(){
	$(".colorpicker").spectrum({
	    showInput: true,
	    className: "colorClass",
	    showInitial: true,
	    showPalette: true,
	    showAlpha: false,
	    showSelectionPalette: true,
	    hideAfterPaletteSelect:true,
	    clickoutFiresChange: false,
	    maxPaletteSize: 10,
	    preferredFormat: "hex",
	    localStorageKey: "colorpicker.local",
	    move: function () {   },
	    show: function () {},
	    beforeShow: function () {},
	    hide: function (color) {
	    	key = $(this).attr('id');
	    	str = color.toHexString().replace('#','');
	    	urlObj[key] = str;
	    	update_Widget();
	    },
	    change: function(color) {
	    	key = $(this).attr('id');
	    	str = color.toHexString().replace('#','');
	    	urlObj[key] = str;
	    	update_Widget();
	    	$(".color_temp_radio").attr("checked", false);
	    	$(".color_temp_radio").button("refresh");
	    },
	    /**
	     * Creates the palette. Each set of [] is one row in the palette.
	     */
	    palette: [
	    	["#7b7670", "#42ad9e", "#FFFFFF", "#000000", "#ed7c31"],
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

/**
 * Resets all settings
 * This currently works by refreshing the page.
 * It should work by resetting variables to their default values and then
 * reloading the jQuery UI elements. However, not all of the elements
 * currently default to the values set in the variable, so you would
 * have to reset most jQuery UI elements individually. Rather than doing
 * this we have made the reload the entire page as a temporary functionality.
 */ 

function reset_all_settings(){
		//init_variables();
		//update_Widget();
		location.reload(true);
}

/**
 * This is an event handler for the orientation radio button. It could probably be
 * combined into one if statement by using a $(.class) instead of $(#id) and some creativity.
 * It should also probably be added into a function with the other event handlers contained in
 * init_jQuery_UI.
 */
function choose_orientation() {
	$('#radio_portrait').click(function() {
		if ($(this).is(':checked')) {
			urlObj['ori'] = 'vert';
			urlObj['pfsz'] = '15'; 
			build_url();
			get_widget();
			$('#width_slider').slider("enable");
			$('#wpw').spinner("enable");
		}	
	});

	$('#radio_horizontal').click(function() {
		if ($(this).is(':checked')) {
			urlObj['ori'] = 'horz'; 
			urlObj['pfsz'] = '15'; 
			build_url();
			get_widget();
			$('#width_slider').slider("disable");
			$('#wpw').spinner("disable");
		}	
	});
}
function colorTemplate() {
	$('.color_temp_radio').click(function() {
		if ($(this).is(':checked')) {
			key = $(this).attr('id');
			$.each(colTemp[key], function(keys, value) {
    			urlObj[keys] = value;
			});
			init_colors();
			update_Widget();
		}	
	});
}

/**
 * This generates the neccesary style tags to make the font-style previews show up in the font select menu.
 */ 
function init_fonts() { 
	var i = 2;
	$('.font').each(function () {
		var font = $(this).val();
		$( "<style>#oft-menu li:nth-child(" + i + ") { font-family: " + font + "; }</style>" ).appendTo( "head" );
		i++;
	})
}
