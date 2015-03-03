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
	hide_border_options();
	get_widget();
	initiate_color_picker();
	border_options();
	reset_all_settings();
	added_select_boxes();
	settings_options();
	choose_font();
});

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

//Updates URL with new options and calls get_widget to refresh the widget
function update_Widget(){url='http://legacy.joshuaproject.net/widget/widget.php?cfc='+ cfc+'&chc='+ chc+'&clc='+ clc+'&cbg='+ cbg+'&bbg='+ bbg+'&blc='+ blc+'&bhc='+ bhc+'&fbg='+ fbg+'&ffc='+ ffc+'&flc='+ flc+'&fhc='+ fhc+'&bdt='+ bdt+'&bdw='+ bdw+'&bdc='+ bdc+'';
	get_widget();
}

//Deprecated
function initiate_color_picker(){$('.background_color').ColorPicker({onSubmit:function(hsb,hex,rgb,el){$(el).ColorPickerHide();
	key=$(el).attr('id');
	if($.inArray(key,safety_vars)!=-1){var color=hex.toUpperCase();
		eval(''+key+' = "'+color+'"');
		url='http://legacy.joshuaproject.net/widget/widget.php?cfc='+ cfc+'&chc='+ chc+'&clc='+ clc+'&cbg='+ cbg+'&bbg='+ bbg+'&blc='+ blc+'&bhc='+ bhc+'&fbg='+ fbg+'&ffc='+ ffc+'&flc='+ flc+'&fhc='+ fhc+'&bdt='+ bdt+'&bdw='+ bdw+'&bdc='+ bdc+'';
		get_widget();
		$('#'+key).css('background-color','#'+hex);
	}},onBeforeShow:function(){$(this).ColorPickerSetColor(this.value);
	}}).bind('keyup',function(){$(this).ColorPickerSetColor(this.value);
	});
}

//Deprecated (not within project specifications, not completely functional, ugly, breaks design)
function border_options(){
	$('#select').click(function(){
		bdt=$('#select').val();
		update_Widget();
	});
	$('#border_width').click(function(){
		bdw=$('#border_width').val();
		update_Widget();
	});
}

//Resets all settings
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
function hide_border_options(){
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
}

//Deprecated, needs to be carefully extracted without breaking anything
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

//Deprecated
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
