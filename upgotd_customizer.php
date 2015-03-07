<?php
/**
 * This file is part of Joshua Project Customizer for People of the Day Widget.
 * 
 * Joshua Project Customizer for People of the Day Widget is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * Joshua Project Customizer for People of the Day Widget is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see 
 * <http://www.gnu.org/licenses/>.
 *
 * @author Johnathan Pulos <johnathan@missionaldigerati.org>
 * @copyright Copyright 2012 Missional Digerati
 */
/**
 * Set the Center Background, Font, Link, & Link Hover Color
 *
 * @author Johnathan Pulos
 * @editors Andrei Popa and John Nagelkirk
 */
$center_bg_color = (isset($_GET['cbg'])) ? '#'.$_GET['cbg'] : '#000000';
$center_font_color = (isset($_GET['cfc'])) ? '#'.$_GET['cfc'] : '#000000';
$center_link_color = (isset($_GET['clc'])) ? '#'.$_GET['clc'] : '#0000FF';
$center_hover_color = (isset($_GET['chc'])) ? '#'.$_GET['chc'] : '#0000FF';
/**
 * Set the Banner Background, Link, & Link Hover Color
 *
 * @author Johnathan Pulos
 */
$banner_bg_color = (isset($_GET['bbg'])) ? '#'.$_GET['bbg'] : '#BBDDFF';
$banner_link_color = (isset($_GET['blc'])) ? '#'.$_GET['blc'] : '#0000FF';
$banner_hover_color = (isset($_GET['bhc'])) ? '#'.$_GET['bhc'] : '#0000FF';
/**
 * Set the Footer Background, Font, Link, & Link Hover Color
 *
 * @author Johnathan Pulos
 */
$footer_bg_color = (isset($_GET['fbg'])) ? '#'.$_GET['fbg'] : '#BBDDFF';
$footer_font_color = (isset($_GET['ffc'])) ? '#'.$_GET['ffc'] : '#000000';
$footer_link_color = (isset($_GET['flc'])) ? '#'.$_GET['flc'] : '#0000FF';
$footer_hover_color = (isset($_GET['fhc'])) ? '#'.$_GET['fhc'] : '#0000FF';

/**
 * Set the final language
 *
 * @todo We need to fix international upgotd_custom.php before using lang
 * @author Johnathan Pulos
 */
$lang = (isset($_GET['lang'])) ? $_GET['lang'] : '';
// Choose specific demographic fields to display
$Population = (isset($_GET["pop"])) ? $_GET["pop"] : 1;
$Language = (isset($_GET["lan"])) ? $_GET["lan"] : 1;
$Religion = (isset($_GET["relg"])) ? $_GET["relg"] : 1;
$Evangelical = (isset($_GET["eva"])) ? $_GET["eva"] : 1;
$Status = (isset($_GET["stat"])) ? $_GET["stat"] : 1;
/*$custom_js = 'upgotd_custom.php?pop='.$Population
		.'&lan='.$Language.'&relg='.$Religion.'&eva='.$Evangelical.'&stat='
		.$Status;*/
//$custom_js = ($lang == '') ? 'http://legacy.joshuaproject.net/upgotd_custom.php' : 'http://www.joshuaproject.net/international/'.$lang.'/upgotd_custom.php';

// THIS IS THE PATH TO upgotd_custom.php
$custom_js = 'upgotd_custom.php?pop='.$Population.'&lan='.$Language.'&relg='.
		$Religion.'&eva='.$Evangelical.'&stat='.$Status;
/**
 * Handle narrow widget
 *
 * @author Johnathan Pulos
 */

$center_font_size = ($is_narrow == 'true') ? '11px' : '12px';
$banner_font_size = ($is_narrow == 'true') ? '11px' : '14px';
$footer_font_size = ($is_narrow == 'true') ? '10px' : '11px';
$more_font_size = ($is_narrow == 'true') ? '9px' : '10px';
$table_font_size = ($is_narrow == 'true') ? '10px' : '11px';

$overall_font_type = (isset($_GET['oft'])) ? $_GET['oft'] : 'Arial';
$title_font_size = (isset($_GET['tfsz'])) ? $_GET['tfsz'] : '14px'; 
$people_font_size = (isset($_GET['pfsz'])) ? $_GET['pfsz'] : '14px';
$info_font_size = (isset($_GET['ifsz'])) ? $_GET['ifsz'] : '11.5px'; 
$footer_font_size = (isset($_GET['ffsz'])) ? $_GET['ffsz'] : '14px'; 

$image_display = "";
$image_float = "";
$image_text_align = "text-align: center;";
$people_display = "";
$footer_display = "";

$landscape = (isset($_GET['ori'])) ? $_GET['ori'] : 'vert';
$width = '215px';

if($landscape == 'vert') {
	$temp = (isset($_GET['wpw'])) ? $_GET['wpw'] : '215px';
	if ($temp <= 250 && $temp >= 175)
	{
		$width = $temp;
	}
	else if ($temp < 175) { $width = 175; }
	else { $width = 250; }
}

$title_margin = '5px';
$pray_top_margin = '0px';
$people_top_margin = '0px';
$people_bottom_margin = '0px';

if($landscape == 'horz') {
	$width = '350px';
	$title_margin = '0px';
	$pray_top_margin = '3px';
	$people_top_margin = '5px';
	$people_bottom_margin = '7px';
	$image_display = "display: inline-block;";
	$image_float = "float: left;";
	$image_text_align = "text-align: left;";
	$people_display = "display: inline;";
	$footer_display = "display:inline-block;";
}

// border radius (bdr) options: top-left(tl), top-right(tr), bottom-left(bl), bottom-right(br)
$border_color = (isset($_GET['bdc'])) ? '#'.$_GET['bdc'] : '#CCCCCC';

$border_width = (isset($_GET['bdw'])) ? $_GET['bdw'] : '0px';

$border_radius_tl = (isset($_GET['bdrtl'])) ? $_GET['bdrtl'] : '0px';
$border_radius_tr = (isset($_GET['bdrtr'])) ? $_GET['bdrtr'] : '0px';
$border_radius_bl = (isset($_GET['bdrbl'])) ? $_GET['bdrbl'] : '0px';
$border_radius_br = (isset($_GET['bdrbr'])) ? $_GET['bdrbr'] : '0px';

$border_rad = 'border-top-left-radius: ' . $border_radius_tl . ';\n border-top-right-radius: ' . $border_radius_tr . 
			  ';\n border-bottom-left-radius: ' . $border_radius_bl . ';\n border-bottom-right-radius: ' . $border_radius_br . ';';
$border_rad_banner = 'border-top-left-radius: ' . ($border_radius_tl-$border_width) . ';\n border-top-right-radius: ' . ($border_radius_tr-$border_width) . ';';
$border_rad_footer = 'border-bottom-left-radius: ' . ($border_radius_bl-$border_width) . ';\n border-bottom-right-radius: ' . ($border_radius_br-$border_width) . ';';
$border = 'border: ' . $border_width . ' solid ' . $border_color . ';';

header("Content-type: application/x-javascript");
?>

document.write('<style type="text/css">\n');
document.write('.upgotd { color: <?php echo $center_font_color ?>; font-family: <?php echo $overall_font_type; ?>; }\n');
document.write('.upgotd-box { background-color: <?php echo $center_bg_color; ?>; text-align: center; width:<?php echo $width; ?>; ?>; font-size:<?php echo $info_font_size ?>; padding: 0; }\n');
document.write('.upgotd-box a { color: <?php echo $center_link_color; ?>; text-decoration: none; }\n');
document.write('.upgotd-box a:hover { color: <?php echo $center_hover_color; ?>; text-decoration: none; }\n');
document.write('.upgotd-title { background-color: <?php echo $banner_bg_color; ?>; <?php echo $border_rad_banner; ?> margin-bottom: <?php echo $title_margin; ?>; padding: 5px;}\n');
document.write('.upgotd-title a { text-transform:uppercase; background-color: <?php echo $banner_bg_color; ?>; font-weight: bold; color: <?php echo $banner_link_color; ?> !important;  font-size:<?php echo $title_font_size; ?> !important; margin-bottom: <?php echo $title_margin; ?>; }\n');
document.write('.upgotd-title a:hover {text-transform:uppercase; background-color: <?php echo $banner_bg_color; ?>; font-weight: bold; color: <?php echo $banner_hover_color; ?> !important; font-size:<?php echo $title_font_size; ?> !important; margin-bottom: 7px; }\n');
document.write('.upgotd-image { <?php echo $image_display; ?>  <?php echo $image_text_align; ?> <?php echo $image_float; ?>;}\n');
document.write('.upgotd-pray { font-weight: normal; padding: 0px; font-size: 10px; margin-bottom: <?php echo $people_top_margin; ?>; margin-top: <?php echo $pray_top_margin; ?>; }\n'); 
document.write('.upgotd-people { <?php echo $people_display; ?> font-weight: normal; font-size:<?php echo $people_font_size; ?> !important; padding-bottom:2px; }\n');
document.write('.upgotd-people a { color: <?php echo $center_link_color; ?> !important; font-size: <?php echo $people_font_size; ?>; font-weight: 800; }\n');
document.write('.upgotd-people a:hover { color: <?php echo $center_hover_color; ?> !important; }\n');
document.write('.upgotd-table { margin-bottom: 5px; margin-top: <?php echo $people_bottom_margin; ?>; text-align: left; }\n');
document.write('.upgotd-table tr { border:none; text-align: left;}\n');
document.write('.upgotd-table td { background-color:<?php echo $center_bg_color; ?>; font-size:<?php echo $info_font_size ?>; font-family: <?php echo $overall_font_type; ?>; font-weight: normal; color: <?php echo $center_font_color ?>; line-height: 12px; text-align: left; border: 0px;  margin: 0px; padding: 0px 0px 0px 5px; line-height: 18px; }\n');
document.write('.upgotd-footer { <?php echo $border_rad_footer; ?> width: 100%; <?php echo $footer_display; ?> padding-top: 7px; background-color:<?php echo $footer_bg_color; ?>; color: <?php echo $footer_font_color; ?> !important; font-weight: normal ;font-size: <?php echo $footer_font_size ?>; padding-bottom: 5px;}\n');
document.write('.upgotd-footer a { color: <?php echo $footer_link_color; ?> !important; font-weight: normal ;font-size: <?php echo $footer_font_size ?>; }\n');
document.write('.upgotd-footer a:hover { color: <?php echo $footer_hover_color; ?> !important; font-weight: normal ;font-size: <?php echo $footer_font_size ?>; }\n');
document.write('.upgotd-cite, .upgotd-cite a { font-weight: normal ; font-size: 10px;  }\n');
document.write('.upgotd-logo {padding: 0px 2px 4px 2px; width: 22px; height: 20px; }\n');
document.write('</style>\n');

document.write('<script language="javascript" src="<?php echo $custom_js; ?>" type="text/javascript" charset="UTF-8"></script>\n');

/*
document.write('.upgotd { color: <?php echo $center_font_color ?>; font-family: <?php echo $overall_font_type; ?>; }\n');
document.write('.upgotd-box { background-color: <?php echo $center_bg_color; ?>; <?php echo $border; ?> text-align: center; width:<?php echo $width; ?>; font-size:12px;}\n');
document.write('.upgotd-box a { color: <?php echo $center_link_color; ?>; text-decoration: none; }\n');
document.write('.upgotd-box a:hover { color: <?php echo $center_hover_color; ?>; text-decoration: none; }\n');
document.write('.upgotd-title { font-weight: bold; font-size:<?php echo $font_size; ?> !important; margin-bottom: 5px; padding: 3px; background-color: <?php echo $banner_bg_color; ?>;}\n');
document.write('.upgotd-box .upgotd-title a { font-weight: bold; font-size:<?php echo $banner_font_size; ?>; margin-bottom: 5px; color: <?php echo $banner_link_color; ?>;}\n');
document.write('.upgotd-box .upgotd-title a:hover { color: <?php echo $banner_hover_color; ?>;}\n');
document.write('.upgotd-footer { font-weight: normal ;font-size: <?php echo $font_size; ?>;  margin-top: 3px; padding: 3px; background-color: <?php echo $footer_bg_color; ?>; color: <?php echo $footer_font_color; ?>;}\n');
document.write('.upgotd-box .upgotd-footer a {font-weight: normal ;font-size: <?php echo $footer_font_size; ?>;  margin-top: 3px; color: <?php echo $footer_link_color; ?>;}\n');
document.write('.upgotd-box .upgotd-footer a:hover { color: <?php echo $footer_hover_color; ?>;}\n');
document.write('.upgotd-image { text-align: center; }\n');
document.write('.upgotd-pray { font-style: italic; font-weight: normal; padding: 3px 0px; font-size: <?php echo $center_font_size; ?>;}\n');
document.write('.upgotd-people { font-weight: normal; font-size:<?php echo $center_font_size; ?> !important; padding-bottom:4px; }\n');
document.write('.upgotd-people a { font-weight: bold; }\n');
document.write('.upgotd-table td { font-family: <?php echo $overall_font_type; ?>; font-size:<?php echo $table_font_size; ?>; font-weight: normal; color: <?php echo $center_font_color ?>; line-height: 14px; text-align: left; border: 0px; background-color: <?php echo $center_bg_color; ?>; margin: 0px; padding: 0px 0px 0px 3px; }\n');
document.write('.upgotd-more, .upgotd-more a { font-size: <?php echo $more_font_size; ?>; }\n');

document.write('<style type="text/css">\n');
document.write('.upgotd { color: <?php echo $center_font_color ?>; font-family: <?php echo $overall_font_type; ?>; }\n');
document.write('.upgotd-box { background-color: <?php echo $center_bg_color; ?>; text-align: center; width:<?php echo $width; ?>; font-size:<?php echo $info_font_size ?>;}\n');
document.write('.upgotd-box a { color: <?php echo $center_link_color; ?>; text-decoration: none; }\n');
document.write('.upgotd-box a:hover { color: <?php echo $center_hover_color; ?>; text-decoration: none; }\n');
document.write('.upgotd-title a { text-transform:uppercase; background-color: <?php echo $banner_bg_color; ?>; font-family:<?php echo $overall_font_type; ?>; font-weight: bold; color: <?php echo $banner_link_color; ?> !important;  font-size:<?php echo $title_font_size; ?> !important; margin-bottom: 7px; }\n');
document.write('.upgotd-title a:hover {text-transform:uppercase; background-color: <?php echo $banner_bg_color; ?>; font-family:<?php echo $overall_font_type; ?>; font-weight: bold; color: <?php echo $banner_hover_color; ?> !important; font-size:<?php echo $title_font_size; ?> !important; margin-bottom: 7px; }\n');
document.write('.upgotd-image { text-align: center; }\n');
document.write('.upgotd-pray { font-weight: normal; padding: 0px; font-size: 9px;}\n'); // **ADD CHANGE ABILITY
document.write('.upgotd-people { font-weight: normal; font-size:<?php echo $people_font_size; ?> !important; padding-bottom:2px; }\n');
document.write('.upgotd-people a { color: <?php echo $footer_link_color; ?> !important; font-size: <?php echo $people_font_size; ?>; font-family:<?php echo $overall_font_type; ?>; font-weight: 800; }\n');
document.write('.upgotd-people a:hover { color: <?php echo $center_hover_color; ?> !important; }\n');
document.write('.upgotd-table { margin-bottom: 5px; text-align: left; }\n');
document.write('.upgotd-table tr { border:none; text-align: left;}\n');
document.write('.upgotd-table td { background-color:<?php echo $center_bg_color; ?>; font-family: <?php echo $center_font_color ?>; font-size:<?php echo $info_font_size ?>; font-weight: normal; color: <?php echo $center_font_color ?>; line-height: 12px; text-align: left; border: 0px;  margin: 0px; padding: 0px 0px 0px 5px; line-height: 18px; }\n');
document.write('.upgotd-footer { background-color:<?php echo $footer_bg_color; ?>; color: <?php echo $footer_font_color; ?> !important; font-weight: normal ;font-size: <?php echo $footer_font_size ?>; }\n');
document.write('.upgotd-footer a { color: <?php echo $footer_link_color; ?> !important; font-weight: normal ;font-size: <?php echo $footer_font_size ?>; }\n');
document.write('.upgotd-footer a:hover { color: <?php echo $footer_hover_color; ?> !important; font-weight: normal ;font-size: <?php echo $footer_font_size ?>; }\n');
document.write('.upgotd-cite, .upgotd-cite a { color: #7b7670 !important; font-weight: normal ;font-size: 10px;  }\n');
document.write('.upgotd-logo {padding: 0px 2px 4px 2px; width: 22px; height: 20px; }\n');
document.write('</style>\n');

*/