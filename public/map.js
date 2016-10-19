function initMap() {
  
  proj4.defs('EPSG:2965', '+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=99999.99989839978 +y_0=249999.9998983998 +ellps=GRS80 +datum=NAD83 +to_meter=0.3048006096012192 +no_defs');

  var coords = { coords : [
      { "x" : 179686.79, "y" : 1645749.74 },
      { "x" : 223356.56, "y" : 1664956.87 },
      { "x" : 244903.99, "y" : 1656724.40 },
      { "x" : 192222.18, "y" : 1629641.83 },
      { "x" : 190405.20, "y" : 1660581.03 }
    ]
  };
  
  var coordinate = { "x" : 179686.79, "y" : 1645749.74 };

  var myLatLng = new google.maps.LatLng( 39.74383, -86.14706);

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: myLatLng
  });

  for (var coordinate in coords) {
    for (var set in coords[coordinate]) {
      var toBeConverted = [coords[coordinate][set]["x"], coords[coordinate][set]["y"]];
      //console.log(toBeConverted);
      var ltlng = proj4('EPSG:2965', 'EPSG:4326', toBeConverted);
      //console.log(new google.maps.LatLng(ltlng));
      console.log(ltlng[0] + " , " + ltlng[1]);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(ltlng[1], ltlng[0]),
        map: map,
        title: 'Converted'
      });
      //console.log(coords[coordinate][set]["x"]);
    }
  }

}