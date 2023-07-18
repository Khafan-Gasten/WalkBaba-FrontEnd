import React, {useRef, useState} from 'react'

import {
    GoogleMap,
    useJsApiLoader,
    DirectionsRenderer,
} from '@react-google-maps/api';


const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 52.2,
    lng: 4.4
};
const origin = "Cube Houses, Rotterdam, Netherlands"

const dest = "City Hall, Rotterdam, Netherlands"

function Map() {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBmOpstO2144GQzwOWrWL9NQLvQ5oyE_kw"
    });
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);

    const onLoad = React.useCallback(function callback(map) {
        calculateRoute()
        console.log("loading")
        setMap(map)
    }, [])

    async function calculateRoute() {
        const directionsService = new window.google.maps.DirectionsService();
        const results: google.maps.DirectionsResult = await directionsService.route({
            origin: origin,
            destination: dest,
            optimizeWaypoints: true,
            waypoints: [
                {
                    location: 'Erasmus Bridge, Rotterdam, Netherlands',
                    stopover: true
                }, {
                    location: 'Witte de Withstraat, Rotterdam, Netherlands',
                    stopover: true
                }, {
                    location: 'Markthal, Rottterdam, Netherlands',
                    stopover: true
                },],
            travelMode: google.maps.TravelMode.WALKING
        })
        setDirectionsResponse(results)
        // setDistance(results.routes[0].legs[0].distance.text)
        // setDuration(results.routes[0].legs[0].duration.text)
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
            onLoad={onLoad}
        >
            {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse}/>
            )}
        </GoogleMap>
    ) : <></>
}

export default Map