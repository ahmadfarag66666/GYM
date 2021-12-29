function initMap() {

  var cairo = { lat: 30.044420, lng: 31.235712};
    var map = new google.maps.Map(
    document.getElementById('map'),{zoom: 4,center: cairo});

    var marker = new google.maps.Marker({
    position: cairo,
    map: map});
    
}
