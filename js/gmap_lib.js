

// IMPORTANT NOTE: DO NOT CHANGE ANYTHING BELOW THIS LINE.
// IMPORTANT NOTE: DO NOT CHANGE ANYTHING BELOW THIS LINE.


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* STYLES NOT YET IN USE                                                                      */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* NEEDS styles: gmap_styles, IN var myOptions = {                                     */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// STYLES
/*
var gmap_styles = [
	{
		stylers:
		[
			{ color:		"#7f1c3d" },
			{ hue:			"#7f1c3d" },
			{ saturation:	 10 }
		]
	},
	{
			featureType:	"road",
			elementType:	"geometry",
			stylers: 
			[
				{ lightness:	 0           },
				{ color:		"#c35500"    },
				{ visibility:	"simplified" }
			]
	},
	{          
		featureType:		"road",
		elementType:		"labels",
		stylers: 
		[
			{
				visibility: "on"
			}
		]
	}
];
*/



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */	
// DETERMINE HOW MANY MARKERS ARE ON THE MAP
// USED IN gmap_lib.js
var points_count = arr_pointer_location.length;


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */	
// USED TO REFERENCE THE MAP OBJECT
var gmap;
// INFO WINDOWS
var arr_info_window = new Array();
// MARKERS
var arr_pointer_marker = new Array();
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// SET DEFAULT VALUE IF A CONFIG ARRAY DOES NOT HAVE THE RIGHT NUM OF ELEMENTS ~~ START
// arr_pointer_location
// arr_show_info_window_onload
// arr_pointer_marker_title
// arr_show_marker_list_in_dropdown
// arr_content_string
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// arr_pointer_location
// No defaults to set
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// arr_show_info_window_onload
/*
for (var m = 0; m < points_count; m++)
{
	if (typeof arr_show_info_window_onload[m] === "undefined")
	{
		// DEFAULT TO SAME true/false VALUE AS show_info_window_onload
		arr_show_info_window_onload[m] = show_info_window_onload; // true/false
	}
}
*/
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// arr_pointer_marker_title
for (var m = 0; m < points_count; m++)
{
	if (typeof arr_pointer_marker_title[m] === "undefined")
	{
		// DEFAULT TO SAME VALUE AS show_marker_list_in_dropdown
		arr_pointer_marker_title[m] = "Marker " + m;
	}
}
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// arr_show_marker_list_in_dropdown
if (!(typeof arr_show_marker_list_in_dropdown === "undefined"))
{
	for (var m = 0; m < points_count; m++)
	{
		if (typeof arr_show_marker_list_in_dropdown[m] === "undefined")
		{
			// DEFAULT TO SAME VALUE AS show_marker_list_in_dropdown
			arr_show_marker_list_in_dropdown[m] = show_marker_list_in_dropdown; // true/false
		}
	}
}
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// arr_content_string
var test_default = "";  // "SETTING DEFAULT ... "
for (var m = 0; m < points_count; m++)
{
	if (typeof arr_content_string[m] === "undefined")
	{
		// DEFAULT TO SAME VALUE AS arr_pointer_marker_title[m]
		arr_content_string[m] = '<p>' + test_default + arr_pointer_marker_title[m] + '</p>';
	}
}
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// SET DEFAULT VALUE IF A CONFIG ARRAY DOES NOT HAVE THE RIGHT NUM OF ELEMENTS ~~~~ END
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function initialize_gmap()
{
	// alert('In js/gmasp_lib.js function initialize_gmap()');  // TEST

	// CHECK THAT THERE ARE THE CORRECT NUMBER OF ELEMENTS IN ALL THE CONFIGURATION ARRAYS
	if (!f_check_config_arrays_length()) { return false; }


	// OPTIONS
	var myOptions = {
			zoom:      gmap_zoom,		// 0 to zoom right out, 20 to zoom right in.
			// styles: gmap_styles,
			center:    gmap_centre,
			mapTypeId: eval('google.maps.MapTypeId.' + gmap_map_type)   // HYBRID, SATELLITE, TERRAIN, ROADMAP
	};
	gmap = new google.maps.Map(document.getElementById(gmap_div_id), myOptions);


	// CREATE MARKERS
	for (var i = 0; i < points_count; i++)
	{
		// if (arr_show_marker_list_in_dropdown[i])
		// if (!(typeof arr_show_marker_list_in_dropdown === "undefined") || arr_show_marker_list_in_dropdown[i])
		{
			arr_pointer_marker[i] = new google.maps.Marker({
				position:  arr_pointer_location[i],
				map:       gmap,
				title:     arr_pointer_marker_title[i],
				draggable: false
			});
		}
	}


	// HTML FOR THE INFO WINDOW CONTENT
	// Set in: arr_content_string


	// CREATE AN INFO WINDOW
	for (var i = 0; i < points_count; i++)
	{
		arr_info_window[i] = new google.maps.InfoWindow({
			content:	 arr_content_string[i],
			position:	 arr_pointer_location[i]
		});
	}


	// CLICK EVENT - TO SHOW THE INFO WINDOW WHEN THE MARKER IS CLICKED
	for (var i = 0; i < points_count; i++)
	{
		google.maps.event.addListener(arr_pointer_marker[i], 'click', function(i) {
		  return function() {
				// arr_info_window[i].open(gmap);
				f_open_info_window(i);
			  }
		}(i));
	}


	// CLICK EVENT - TO SHOW THE LAT/LNG WHERE THE MAP IS CLICKED
	// USEFUL DURING DEVELOPMENT
	// PREVENTS DOUBLE CLICKING TO ZOOM IN
	if (click_map_shows_lat_lng)
	{
		// google.maps.event.addListener(gmap, "click", function (event) { f_show_lat_lng(55, 33); });
		google.maps.event.addListener(gmap, "click", function (event) { f_show_lat_lng(event.latLng.lat(), event.latLng.lng()); });
	}


	// SHOW THE INFO WINDOW ON MAP INITIALIZATION
	// if (show_info_window_onload)
	{
		for (var i = 0; i < points_count; i++)
		{
			if (arr_show_info_window_onload[i]) { arr_info_window[i].open(gmap); }
		}
	}

}	// END OF [function initialize_gmap()]



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function f_close_info_windows()
{
	for (var i = 0; i < points_count; i++)
	{
		arr_info_window[i].close(gmap);
		// $('#' + arr_fieldset_id[i]).css({ border: "1px solid #b1b1b1"});
	}
}



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function f_open_info_window(p)
{
	// alert('p=' + p);
	f_close_info_windows();
	arr_info_window[p].open(gmap);
	var pan_to_lat = arr_pointer_location[p].lat();
	pan_to_lat = parseFloat(pan_to_lat) - 0.05; // Move location up to the top of the map
	var pan_to_lng = arr_pointer_location[p].lng();
	// gmap.setCenter(arr_pointer_location[p]);
	// gmap.setCenter(new google.maps.LatLng(pan_to_lat, pan_to_lng));
	gmap.panTo(new google.maps.LatLng(pan_to_lat, pan_to_lng));
	// var arr_centre = gmap.getCenter();  // Returns a string (not an array): 51.81544, -2.268654
	// gmap.setMapTypeId(google.maps.MapTypeId.ROADMAP);
	/*
	if (use_gmap_zoom_close)
	{
		gmap.setZoom(gmap_zoom_close);
	}
	*/
}



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function f_reset_the_map(p)
{
	f_close_info_windows();
	gmap.setCenter(gmap_centre);
	gmap.setZoom(gmap_zoom);
}



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function f_show_lat_lng(p_lat, p_lng)
{
	if (document.getElementById(click_map_shows_lat_lng_display))
	{
		// $("#" + click_map_shows_lat_lng_display).html("&nbsp;<br />Latitude: " + p_lat + "<br />Longitude: " + p_lng);
		$("#" + click_map_shows_lat_lng_display).html("&nbsp;<br />Latitude, Longitude:<br />" + p_lat + ", " + p_lng);
	}
	else
	{
		alert("Lat: " + p_lat + "\nLng: " + p_lng);
	}
}



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function f_check_config_arrays_length()
{
	// alert(points_count);  // TEST
	// arr_pointer_location
	// arr_show_info_window_onload
	// arr_pointer_marker_title
	// arr_show_marker_list_in_dropdown
	// arr_content_string
	var points_count_error_msg = "";
	var text_1 = "<br />Wrong number of values in ";
	var text_2 = " and there needs to be " + points_count + ".";
	// arr_pointer_location
	if (points_count != arr_pointer_location.length)
	{
		points_count_error_msg += text_1 + "arr_pointer_location. There are " + arr_pointer_location.length + text_2;
	}
	// arr_show_info_window_onload
	if (points_count != arr_show_info_window_onload.length)
	{
		points_count_error_msg += text_1 + "arr_show_info_window_onload. There are " + arr_show_info_window_onload.length + text_2;
	}
	// arr_pointer_marker_title
	if (points_count != arr_pointer_marker_title.length)
	{
		points_count_error_msg += text_1 + "arr_pointer_marker_title. There are " + arr_pointer_marker_title.length + text_2;
	}
	// arr_show_marker_list_in_dropdown
	if (!(typeof arr_show_marker_list_in_dropdown === "undefined") && points_count != arr_show_marker_list_in_dropdown.length)
	{
		points_count_error_msg += text_1 + "arr_show_marker_list_in_dropdown. There are " + arr_show_marker_list_in_dropdown.length + text_2;
	}
	// arr_content_string
	if (points_count != arr_content_string.length)
	{
		points_count_error_msg += text_1 + "arr_content_string. There are " + arr_content_string.length + text_2;
	}
	if (points_count_error_msg != "")
	{
		if (document.getElementById(gmap_div_id))
		{
			$("#" + gmap_div_id).html('<p class="L" style="margin: 15px;">ERRORS IN THE	GOOGLE MAP CONFIGURATION:' + points_count_error_msg + '</p>');
		}
		return false;
	}
	else
	{
		return true;
	}
}



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
