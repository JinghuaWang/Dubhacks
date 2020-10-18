import React from 'react'

class StreetView extends React.Component {

  componentDidMount() {
    const google = window.google;
    const fenway = { lat: 42.345573, lng: -71.098326 };
    const map = new google.maps.Map(document.getElementById("map"), {
      center: fenway,
      zoom: 16,
      mapTypeControl: false
    });

    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano"),
      {
        position: fenway,
        pov: {
          heading: 350,
          pitch: 10,
        },
      }
    );
    map.setStreetView(panorama);
    // Recenter the mini map everytime user moves
    panorama.addListener("position_changed", () => {
      map.setCenter(panorama.getPosition());
    });
  }
 
  render() {

    return (
      <div id="flex-box" style={{           
        width: '100vw',                   
        display: 'flex',                     
        justifyContent: 'center'              
    }} >
        <div id="street-view-container" style={{
          width: '95vw',
          height: '700px',
          backgroundColor: '#eeeeee',
          position: 'relative',
          margin: "atuo"
      }}>
          <div id="pano" style={{
              width: '95vw',
              height: '700px',
              backgroundColor: '#eeeeee'}}>
          </div>
          <div id="map" style={{ 
            position: 'absolute', right: '0px', bottom: '0px', width: '25%', height: '250px', zIndex:'1',
            border: '6px solid white', boxShadow: '1px 3px 5px #888888', borderRadius: "1em" }}>
          </div>
        </div>
      </div>
    );
  }
}
 
export default StreetView;