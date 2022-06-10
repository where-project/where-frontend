import React, { useEffect, useRef, useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent, useMapEvents } from 'react-leaflet';
import "../../../css/location.css"
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
});

const Location = ({ position, setPosition, ...props }) => {
    const animateRef = useRef(true);
    const SetViewOnClick = ({ animateRef }) => {
        const map = useMapEvent('click', (e) => {
            map.setView(e.latlng, map.getZoom(), {
                animate: animateRef.current || false,
            })
        })
    }

    const Markers = () => {

        const map = useMapEvents({
            click(e) {
                setPosition([
                    e.latlng.lat,
                    e.latlng.lng
                ]);
            },
        })

        return (
            position ?
                <Marker
                    key={position[0]}
                    position={position}
                    interactive={false}
                />
                : null
        )
    }

    return (
        <section>
            <fieldset className='listing'>
                <div className="boxtitle">
                    <h3>Location</h3>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div id="listingmap" className="listingmap" >
                            <MapContainer center={position} zoom={14} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }} >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Markers />
                                <SetViewOnClick animateRef={animateRef} />
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </fieldset>
        </section>
    )
}

export default Location

