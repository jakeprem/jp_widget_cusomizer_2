<?php

//Include PHP functions
//include("includes/functions.php"); 

// Include Database Stuff
//include("includes/database.inc.php");

// Set date
// $timestamp = mktime(); $y = date("Y", $timestamp); $m = date("n", $timestamp); $d = date("d", $timestamp); 
$y = date("Y");
$m = date("n");
$d = date("d"); 

// SQL Query to Get People Group for Today
//$sql1 = "SELECT * FROM jpupgotd WHERE (LRofTheDayMonth = '$m' AND LRofTheDayDay = '$d' and ROL3Profile = 'eng') LIMIT 1";

// MySQL Result Sets
//$rs1 = mysql_fetch_array(mysql_query($sql1));

// Get the JSON data
$jsonUrl = "http://joshuaproject.net/api/v2/upgotd?api_key=NV0nT8r1Szjt&fields=ROL3Profile|Population|Ctry|PeopNameInCountry|PrimaryReligion|PrimaryLanguageName|JPScale|PeopleID3|ROG3|PhotoAddress|PercentEvangelical";
$jsonData = file_get_contents($jsonUrl);
$objData = json_decode($jsonData, true);
//$arrayData->['a']->['b'];
$dataIndex = 2;
$dataPopulation          = $objData['data'][$dataIndex]['Population'];
$dataCtry                = $objData['data'][$dataIndex]['Ctry'];
$dataPeopNameInCountry   = $objData['data'][$dataIndex]['PeopNameInCountry'];
$dataPrimaryReligion     = $objData['data'][$dataIndex]['PrimaryReligion'];
$dataPrimaryLanguageName = $objData['data'][$dataIndex]['PrimaryLanguageName'];
$dataJPScale             = $objData['data'][$dataIndex]['JPScale'];
$dataPeopleID3           = $objData['data'][$dataIndex]['PeopleID3'];
$dataROG3                = $objData['data'][$dataIndex]['ROG3'];
$dataPhotoAddress        = $objData['data'][$dataIndex]['PhotoAddress'];
$dataPercentEvangelical  = $objData['data'][$dataIndex]['PercentEvangelical'];

// Define variables Item 1
$thisCreated 					= date('D, j M Y G:i:s T');
$itemPopulation					= number_format(round($dataPopulation));
$itemCountry					= str_replace("'", "\'", $dataCtry);
$itemPeople						= str_replace("'", "\'", $dataPeopNameInCountry);
$itemReligion					= str_replace("'", "\'", $dataPrimaryReligion);
$itemLanguage					= str_replace("'", "\'", $dataPrimaryLanguageName);
$itemJPScale					= $dataJPScale;
$itemTitleVariable              = $itemPeople." of ".$itemCountry; // PeopleName of CountryName
$itemProfileLink               	= "http://joshuaproject.net/people_groups/".$dataPeopleID3."/".$dataROG3; // URL to Profile
$itemPeopleLink               	= "http://joshuaproject.net/people_groups/".$dataPeopleID3; // URL to People Group
$itemCountryLink               	= "http://joshuaproject.net/countries/".$dataROG3; // URL to Country
$itemUnreachedLink				= "http://joshuaproject.net/listing";
$itemScaleBlockLink				= "http://joshuaproject.net/assets/img/scale/scale" . ROUND($dataJPScale) . ".jpg";  // Scale color block
$itemScaleDescriptionLink		= "http://joshuaproject.net/global_list?listtype=progress";
$itemFeedLink					= "http://joshuaproject.net/pray/unreachedoftheday#Widget";
$itemBaseLink					= "http://joshuaproject.net/";
$itemAttachmentURLvariable      = $dataPhotoAddress; // People Photo
$itemEmailLink					= "http://joshuaproject.net/pray/unreachedoftheday#subscribe"; // Unreached People of the Day email

if (isset($dataPercentEvangelical)) { $itemEvangelical = number_format($dataPercentEvangelical,1) . "%"; } else { $itemEvangelical = "Unknown"; }

// Image resizing
$width	 						= 140;
$peopleimage 					= getimagesize("profiles/photos/".$dataPhotoAddress); 
$height 						= round($peopleimage[1] *($width / $peopleimage[0]));

// Choose specific demographic fields to display
$showPop = (isset($_GET["pop"])) ? $showPop = $_GET["pop"] : $showPop = 1;
$showLang = (isset($_GET["lan"])) ? $showPop = $_GET["lan"] : $showLang = 1;
$showRel = (isset($_GET["relg"])) ? $showPop = $_GET["relg"] : $showRel = 1;
$showEva = (isset($_GET["eva"])) ? $showPop = $_GET["eva"] : $showEva = 1;
$showStat = (isset($_GET["stat"])) ? $showPop = $_GET["stat"] : $showStat = 1;

// Build Javascript 
header("Content-type: application/x-javascript");
?>
document.write('<div class="upgotd-box">\n');
document.write('<div class="upgotd upgotd-title">\n<a href="<?php echo $itemFeedLink; ?>" class="upgotd-link" target="_blank" title="Display the Unreached People of the Day on your website\">Unreached of the Day</a>\n</div>\n\n'); 
document.write('<div class="upgotd-image">\n<a href="<?php echo  $itemProfileLink; ?>" class="upgotd-link" title="Click for a full profile of the <?php echo $itemTitleVariable; ?>" target="_blank"><img src="<?php echo $itemAttachmentURLvariable; ?>" border="0" width="<?php echo $width; ?>" height="<?php echo $height; ?>"></a>\n</div>\n\n');
document.write('<div class="upgotd upgotd-pray">Please pray for the ...</div>\n\n');
document.write('<div class="upgotd upgotd-people">\n<a href="<?php echo  $itemPeopleLink; ?>" class="upgotd-link" title="Click for listing of the <?php echo str_replace("'", "\'", $dataPeopNameInCountry); ?> in all countries." target="_blank"><?php echo str_replace("'", "\'", $dataPeopNameInCountry); ?></a> of <a href="<?php echo $itemCountryLink; ?>" class="upgotd-link" title="Click for listing of all People Groups in <?php echo str_replace("'", "\'", $dataCtry); ?>" target="_blank"><?php echo str_replace("'", "\'", $dataCtry); ?></a>\n</div>\n\n'); 
document.write('<table class="upgotd-table" align="center" cellpadding="0" cellspacing="0">'); 
// Specify the fields to be displayed
if(<?php echo $showPop; ?> == 1) {
	document.write('<tr class="upgotd-odd">\n<td class="upgotd-headings">Population:</td>\n<td class="upgotd-stats"><?php echo $itemPopulation; ?></td>\n</tr>\n'); 
} if(<?php echo $showLang; ?> == 1) {
	document.write('<tr class="upgotd-even">\n<td class="upgotd-headings">Language:</td>\n<td class="upgotd-stats"><?php echo str_replace("'", "\'", $dataPrimaryLanguageName); ?></td>\n</tr>\n'); 
} if(<?php echo $showRel; ?> == 1) {
	document.write('<tr class="upgotd-odd">\n<td class="upgotd-headings">Religion:</td>\n<td class="upgotd-stats"><?php echo $dataPrimaryReligion; ?></td>\n</tr>\n'); 
} if(<?php echo $showEva; ?> == 1) {
	document.write('<tr class="upgotd-even">\n<td class="upgotd-headings">Evangelical:</td>\n<td class="upgotd-stats"><?php echo number_format($dataPercentEvangelical,2); ?>%</td>\n</tr>\n'); 
} if(<?php echo $showStat; ?> == 1) {
	document.write('<tr class="upgotd-odd">\n<td class="upgotd-headings">Status:</td>\n<td class="upgotd-stats"><a href="<?php echo $itemUnreachedLink; ?>" class="upgotd-link" title="Click for listing of the largest unreached groups." target="_blank">Unreached</a> (<a href="<?php echo $itemScaleDescriptionLink; ?>" class="upgotd-link" title="Click for a description of the Joshua Project Progress Scale." target="_blank"><?php echo $dataJPScale; ?></a> <a href="<?php echo $itemScaleDescriptionLink; ?>" class="upgotd-link" title="Click for a description of the Joshua Project Progress Scale" target="_blank"><img src="<?php echo $itemScaleBlockLink; ?>" border="0"></a>)</td>\n</tr>'); 
}
document.write('</table>\n\n');
document.write('<div class="upgotd upgotd-footer">\n<div style="padding: 0px 0px 1px 0px;"><a href="<?php echo $itemEmailLink; ?>" title="Get the complete Unreached People of the Day profile by daily email" target="_blank">Get <b>Unreached of the Day</b> by Email</a>\n</div>\nProvided by <a href="<?php echo $itemBaseLink; ?>" title="Visit the Joshua Project Website"  target="_blank"><b>Joshua Project</b></a>\n</div>\n'); 
document.write('</div>\n'); 
