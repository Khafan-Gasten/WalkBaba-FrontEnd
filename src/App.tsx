import React, {useState} from 'react'
import './App.css'
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 52.2,
    lng: 4.4
};

function App() {

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBcasNoSHMwScn254MXT0yqLk-oQopCxq0"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        console.log("loading")


        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
        </GoogleMap>
    ) : <>

        <p>jhsdafdkakh</p></>
}


export default App
