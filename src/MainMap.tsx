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
const origin = "Amsterdam, Netherlands"

const dest = "Rotterdam, Netherlands"

function MainMap() {
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
            waypoints: [
                {
                    location: 'Haarlem, Netherlands',
                    stopover: true
                },{
                    location: 'The Hague, Netherlands',
                    stopover: true
                }],
            travelMode: google.maps.TravelMode.DRIVING
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
export default MainMap