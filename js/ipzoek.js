
  $.getJSON('https://ipapi.co/json/', function(data) {
    if (data.error) {
      console.error("Error fetching IP data:", data.reason);
      return;
    }

    $("#ip").text(data.ip);
    $('#isp').text(data.org);
    $('#country').text(data.country_name);
    $('#city').text(data.region);

    // Initialize Leaflet map
    var map = L.map('map').setView([data.latitude, data.longitude], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([data.latitude, data.longitude]).addTo(map)
      .bindPopup('Uw Locatie')
      .openPopup();
  }).fail(function(jqXHR, textStatus, errorThrown) {
    console.error("Error loading the IP API:", textStatus, errorThrown);
  });
