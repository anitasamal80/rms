/* CONFIGURATION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ START */

// RATE OF ZOOM
// 0 to zoom right out, 20 to zoom right in
var gmap_zoom = 4;


// CENTRE POSITION OF THE MAP
// Change these values to the LatLng that you want the map to centre on
// NOTE:  54.5, -2.5 is the centre of the UK (including N. Ireland)
var gmap_centre = new google.maps.LatLng(22.59372606392931, 79.716796875);


// MAPTYPE
var gmap_map_type = 'ROADMAP';
// 1. SATELLITE:
// Displays photographic tiles.
// 2. ROADMAP:
// Displays the normal, default 2D tiles of Google Maps.
// 3. HYBRID:
// Displays a mix of photographic tiles for prominent features (roads, city names).
// 4. TERRAIN:
// Displays physical tiles for elevation and water features (mountains, rivers, etc.).


// gmap_div_id IS THE ID OF THE DIV IN THE HTML THAT WILL CONTAIN THE MAP
// NOTE: The map will fail to appear if there is no CSS width and height set for this div.
var gmap_div_id = "gmap";


// CLICK EVENT TO SHOW THE LAT/LNG WHERE THE MAP IS CLICKED
// USEFUL DURING DEVELOPMENT
// PREVENTS DOUBLE CLICKING TO ZOOM IN, SO ONLY USE TO GET LAT/LNG DURING DEVELOPMENT
// AND SET IT TO false FOR LIVE SYSTEMS
var click_map_shows_lat_lng = false;
var click_map_shows_lat_lng_display = "span_lat_lng_display";


// POINTER LOCATIONS
// SET THE LatLng OF EACH OF YOUR MAP POINTS
var arr_pointer_location = new Array();
arr_pointer_location[0] = new google.maps.LatLng(28.38173504322308, 77.080078125);
arr_pointer_location[1] = new google.maps.LatLng(18.979025953255267, 72.59765625);
arr_pointer_location[2] = new google.maps.LatLng(17.392579271057766, 78.92578125);


// SET WHETHER OR NOT TO DISPLAY THE POP-UP WINDOWS WHEN THE MAP LOADS
var arr_show_info_window_onload = new Array();
arr_show_info_window_onload[0] = false;
arr_show_info_window_onload[1] = false;
arr_show_info_window_onload[2] = false;


// TEXT FOR THE TOOLTIP THAT DISPLAYS WHEN HOVERING OVER THE MARKER
// THIS DOES NOT ALWAYS APPEAR, BUT IS NOT IMPORTANT
var arr_pointer_marker_title = new Array();
arr_pointer_marker_title[0] = "Delhi";
arr_pointer_marker_title[1] = "Mumbai";
arr_pointer_marker_title[2] = "Hyderabad";


// HTML FOR THE INFO WINDOW CONTENT
var arr_content_string = new Array();
var info_window_index;

// 0. Delhi
info_window_index = 0;
arr_content_string[info_window_index]  = '<p class="gmap_info_window gmap_info_window_delhi">';
arr_content_string[info_window_index] += '<img src="img/geography/delhi.jpg" alt="Delhi" />';
arr_content_string[info_window_index] += 'Delhi,<br />'; 
arr_content_string[info_window_index] += 'India';
arr_content_string[info_window_index] += '</p>';

// 1. Mumbai
info_window_index = 1;
arr_content_string[info_window_index]  = '<p class="gmap_info_window gmap_info_window_mumbai">';
arr_content_string[info_window_index] += '<img src="img/geography/mumbai.jpg" alt="Mumbai" />';
arr_content_string[info_window_index] += 'Mumbai,<br />'; 
arr_content_string[info_window_index] += 'India';
arr_content_string[info_window_index] += '</p>';

// 2. Hyderabad
info_window_index = 2;
arr_content_string[info_window_index]  = '<p class="gmap_info_window gmap_info_window_hyderabad">';
arr_content_string[info_window_index] += '<img src="img/geography/hyderabad.jpg" alt="Hyderabad" />';
arr_content_string[info_window_index] += 'Hyderabad,<br />'; 
arr_content_string[info_window_index] += 'India';
arr_content_string[info_window_index] += '</p>';

/* CONFIGURATION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ END */

