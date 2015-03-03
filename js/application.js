//created by Joshua Shuster
//https://github.com/naysayer
var cfc='000000';
var chc='0000ff';
var clc='000000';
var cbg='eeeeee';
var bbg='2870C0';
var blc='FFFFFF';
var bhc='FFFFFF';
var fbg='2870C0';
var ffc='FFFFFF';
var flc='FFFFFF';
var fhc='FFFFFF';
var bdt='double';
var bdw='0px';
var bdc='FFFFFF';
var url='http://legacy.joshuaproject.net/widget/widget.php?cfc='+ cfc+'&chc='+ chc+'&clc='+ clc+'&cbg='+ cbg+'&bbg='+ bbg+'&blc='+ blc+'&bhc='+ bhc+'&fbg='+ fbg+'&ffc='+ ffc+'&flc='+ flc+'&fhc='+ fhc+'&bdt='+ bdt+'&bdw='+ bdw+'&bdc='+ bdc+'';
var safety_vars=['bbg','cbg','cfc','chc','clc','blc','bhc','fbg','ffc','flc','fhc','bdt','bdw','bdc'];
var key='';
var selectColor='';
$(document).ready(function(){
	//hide_border_options();
	get_widget();
	initiate_color_picker();
	//border_options();
	reset_all_settings();
	added_select_boxes();
	settings_options();
	choose_font();
});

/**
 * Generates the widget in an iframe (via HTML). This appends the widget to
 * the div with a class with widget, and has it fade in.
 * This function is also called upon when any of the variables are upated, this updates
 * the URL variable, and changes the widget accoding to the users specifications. 
 */
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
        url='http://legacy.joshuaproject.net/widget/widget.php?cfc='+ cfc+'&chc='+ chc+'&clc='+ clc+'&cbg='+ cbg+'&bbg='+ bbg+'&blc='+ blc+'&bhc='+ bhc+'&fbg='+ fbg+'&ffc='+ ffc+'&flc='+ flc+'&fhc='+ fhc+'&bdt='+ bdt+'&bdw='+ bdw+'&bdc='+ bdc+'';
	get_widget();
}

//Deprecated
/*function initiate_color_picker(){$('.background_color').ColorPicker({onSubmit:function(hsb,hex,rgb,el){$(el).ColorPickerHide();
	key=$(el).attr('id');
	if($.inArray(key,safety_vars)!=-1){var color=hex.toUpperCase();
		eval(''+key+' = "'+color+'"');
		url='http://legacy.joshuaproject.net/widget/widget.php?cfc='+ cfc+'&chc='+ chc+'&clc='+ clc+'&cbg='+ cbg+'&bbg='+ bbg+'&blc='+ blc+'&bhc='+ bhc+'&fbg='+ fbg+'&ffc='+ ffc+'&flc='+ flc+'&fhc='+ fhc+'&bdt='+ bdt+'&bdw='+ bdw+'&bdc='+ bdc+'';
		get_widget();
		$('#'+key).css('background-color','#'+hex);
	}},onBeforeShow:function(){$(this).ColorPickerSetColor(this.value);
	}}).bind('keyup',function(){$(this).ColorPickerSetColor(this.value);
	});
}*/

/**
 * This adds the color picker to all of the input forums wiht a class of backgroud-color
 * the color swatches are technically input forums in readonly mode, with an image on top 
 * to signify that you can select colors from it. 
 */
function initiate_color_picker(){
	$(".colorpicker").spectrum({
	    allowEmpty: true,
	    showInput: true,
	    className: "color",
	    showInitial: true,
	    showPalette: true,
	    showSelectionPalette: true,
	    hideAfterPaletteSelect:true,
	    clickoutFiresChange: false,
	    maxPaletteSize: 10,
	    preferredFormat: "hex",
	    localStorageKey: "colorpicker.local",
	    move: function (color) {   },
	    show: function () {},
	    beforeShow: function () {},
	    hide: function () {},
	    change: function() {},
	    palette: [
	        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
	        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
	        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
	        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
	        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
	        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
	        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
	        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
	        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
	        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
	        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
	        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
	        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
	        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
	    ]
	});
}

//Deprecated (not within project specifications, not completely functional, ugly, breaks design)
/*function border_options(){
	$('#select').click(function(){
		bdt=$('#select').val();
		update_Widget();
	});
	$('#border_width').click(function(){
		bdw=$('#border_width').val();
		update_Widget();
	});
}*/

/**
 * When this button is clicked, it changes all of the global variables back to
 * their original state then calls on the get_widget method, and updates the
 * widget itself.
 */
function reset_all_settings(){
	$('button.reset').click(function(){
		cfc='000000';
		chc='0000FF';
		clc='000000';
		cbg='EEE';
		bbg='2870C0';
		blc='FFF';
		bhc='FFFFFF';
		fbg='2870C0';
		ffc='FFF';
		flc='FFF';
		fhc='';
		bdt='double';
		bdw='0px';
		bdc='FFFFFF';
		$('select').val(0);
		update_Widget();
	});
}

//Deprecated (to be replaced with padding options) & border radius
/*function hide_border_options(){
	$('button#button_yes').click(function(){
		$('#border_options').slideDown('slow');
			bdw='1px';
			url='http://legacy.joshuaproject.net/widget/widget.php?cfc='+ cfc+'&chc='+ chc+'&clc='+ clc+'&cbg='+ cbg+'&bbg='+ bbg+'&blc='+ blc+'&bhc='+ bhc+'&fbg='+ fbg+'&ffc='+ ffc+'&flc='+ flc+'&fhc='+ fhc+'&bdt='+ bdt+'&bdw='+ bdw+'&bdc='+ bdc+'';
			get_widget();
	});
	$('button#button_no').click(function(){
		$('#border_options').slideUp('slow');
			bdt='double';
			bdw='0px';
			bdc='FFFFFF';
			update_Widget();
	});
}*/

/**
 * Deprecated, needs to be carefully extracted without breaking anything.
 * The original comment, with good grammer: "On DOM ready, this funciton hides
 * the color picking swatches and listens for the appropriate button to fade
 * in the 'advance option color swatches' and displays them accordingly."
 */
function settings_options(){
	$('.background_color').hide();
	$('.advanced_on').toggle(function(){
			$('.background_color').fadeIn('slow',function(){
				$('button.advanced_on').text('On');
			});
		},function(){
			$('.background_color').fadeOut('slow',function(){
				$('button.advanced_on').text('Off')});
		}
	);
}

/**
 * This function listens for all select input feilds to be changed. 
 * Once they are, they change the color of their corresponding element
 * on the widget. They also change the color of the corresponding swatch
 * in relation to the color the user selected. We also think this is deprecated. 
 */
function added_select_boxes(){
	$('select').change(function(){
		key=$(this).attr('rel');
		selectColor=$(this).val();
		$('#'+ key).css('background-color','#'+ selectColor);
		eval(''+key+' = "'+selectColor+'"');
		url='http://legacy.joshuaproject.net/widget/widget.php?cfc='+ cfc+'&chc='+ chc+'&clc='+ clc+'&cbg='+ cbg+'&bbg='+ bbg+'&blc='+ blc+'&bhc='+ bhc+'&fbg='+ fbg+'&ffc='+ ffc+'&flc='+ flc+'&fhc='+ fhc+'&bdt='+ bdt+'&bdw='+ bdw+'&bdc='+ bdc+'';
		get_widget();
	});
}

//Font style, type and size
function choose_font() {
	$('.font-size').change(function() {
		var newFontSize = $('font-size').val();
	});
}
