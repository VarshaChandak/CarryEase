import React, { useEffect } from 'react';

const RealTimeTracking = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const initMap = () => {
    new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  };

  return <div id="map" style={{ height: '500px' }}></div>;
};

export default RealTimeTracking;
