import React, {useState} from 'react'

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

type MapBoardProps = {
    routeWaypoints: string[]
}

function Map(props: MapBoardProps) {

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBmOpstO2144GQzwOWrWL9NQLvQ5oyE_kw"
    });
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);

    const onLoad = React.useCallback(function callback(map: google.maps.Map | null) {
        void calculateRoute()
        setMap(map)
    }, [])

    async function calculateRoute() {
        const routeWaypoints = props.routeWaypoints;

        if (!routeWaypoints) {
            return
        }
        //Maybe change the behaviour of this section
        const origin = routeWaypoints[0]
        const dest = routeWaypoints[routeWaypoints.length - 1]
        const waypoints: object[] = []
        for (let i = 1; i < routeWaypoints.length - 1; i++) {
            waypoints.push({
                location: routeWaypoints[i],
                stopover: true
            })
        }
        // console.log(origin)
        // console.log(dest)
        // console.log(waypoints)

        console.log("About to query google maps")

        const directionsService = new window.google.maps.DirectionsService();
        const results: google.maps.DirectionsResult = await directionsService.route({
            origin: origin,
            destination: dest,
            optimizeWaypoints: true,
            waypoints: waypoints,
            travelMode: google.maps.TravelMode.WALKING
        })
        // console.log(results);
        console.log("received response from maps")
        setDirectionsResponse(results)
        // setDistance(results.routes[0].legs[0].distance.text)
        // setDuration(results.routes[0].legs[0].duration.text)
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
            onLoad={() => onLoad(map)}
        >
            {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse}/>
            )}
        </GoogleMap>
    ) : <></>
}

export default Map