/**
 * The arrow function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

    var image = document.getElementById('originalImage');
    var mapContainer = document.getElementById('map');
    var displayContainer = document.getElementById('displaycontainer');
    var mapexist = false;
  
    function openPopup() {
      var popup = document.getElementById('popup');
      popup.style.display = 'block';
    }
    
    function closePopup() {
      var popup = document.getElementById('popup');
      popup.style.display = 'none';
    }

    // Create the map
    function createMap() {
      mapexist=true;

      var map = L.map('map', {
        center: [51.49755, -0.17923],
        zoom: 17
      });
    
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
  
      L.marker([51.49755, -0.17923]).addTo(map)
    
    }

    function toggleView() {

      // Toggle the display property based on the current state

      if (image.style.display === 'none') {
        mapContainer.style.display = 'none';
        map.style.display = 'none';
      } else {
        mapContainer.style.display = 'block';
        map.style.display = 'none';
      }
    }

    function MapHandleClick() {
      if (mapexist) {
        mapContainer.style.display = 'block';
      } else {
        createMap();
      }
    }

    function GalleryHandleClick() {
      toggleView();
    }

    function ContactHandleClick() {
      openPopup();
    }

    // Add event listener to the Map container
    document.addEventListener('DOMContentLoaded', function() {
      var container = document.getElementById('buttonmap');
      container.addEventListener('click', MapHandleClick);
    });

    // Add event listener to the Gallery container
    document.addEventListener('DOMContentLoaded', function() {
      var container = document.getElementById('buttongallery');
      container.addEventListener('click', GalleryHandleClick);
    });

    // Add event listener to the Contact container
    document.addEventListener('DOMContentLoaded', function() {
      var container = document.getElementById('buttoncontact');
      container.addEventListener('click', ContactHandleClick);
    });
    