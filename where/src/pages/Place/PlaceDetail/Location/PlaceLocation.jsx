import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const PlaceLocation = ({ place, ...props }) => {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div id="listingmap" className="listingmap">
          <MapContainer center={[place.locationLat, place.locationLng]} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[place.locationLat, place.locationLng]}>
              <Popup>
                <Popup>
                  <div className="popup-content">
                    <h3>{place.placeName}</h3>
                    <p>{place.description}</p>
                  </div>
                </Popup>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default PlaceLocation