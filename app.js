if (navigator.geolocation) {
	var location_timeout = setTimeout("geolocFail()", 10000);

	navigator.geolocation.getCurrentPosition(function(position) {
			clearTimeout(location_timeout);

			var lat = position.coords.latitude;
			var lng = position.coords.longitude;

			alert(lat + " , " + lng);

		}, function(error) {
			clearTimeout(location_timeout);
			geolocFail();
		},
		{
			maximumAge:Infinity,
			timeout:Infinity,
			enableHighAccuracy:false
		});
} else {
	geolocFail();
}