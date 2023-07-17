import React, {useRef, useState, useEffect} from 'react'
import './App.css'
import {
    GoogleMap,
    useJsApiLoader,
    DirectionsRenderer,
    Marker,
    Autocomplete,
    DirectionsService
} from '@react-google-maps/api';
import SearchBar from "./SearchBar.tsx";


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


function App() {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBmOpstO2144GQzwOWrWL9NQLvQ5oyE_kw"
    })
    const [map, setMap] = useState<google.maps.Map|null>(null);
    const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult|null>(null);
    const originRef = useRef();
    const destinationRef = useRef();



    const onLoad = React.useCallback(function callback(map) {
        calculateRoute()
        console.log("loading")
        setMap(map)
    }, [])
    // useEffect( () => {
    //     // setMap(null)
    //     console.log("use effect called")
    //     calculateRoute()
    // }, [])
    // const onUnmount = React.useCallback(function callback() {
    //     // setMap(null)
    //       calculateRoute()
    // }, [])

    async function calculateRoute() {
console.log(window)
        // eslint-disable-next-line no-undefined

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        console.log("In calculate route")
        const directionsService = new window.google.maps.DirectionsService();
        const results: google.maps.DirectionsResult = await directionsService.route({
            origin: origin,
            destination: dest,
            travelMode: google.maps.TravelMode.DRIVING
        })
        console.log(results)
        setDirectionsResponse(results)
        // setDistance(results.routes[0].legs[0].distance.text)
        // setDuration(results.routes[0].legs[0].duration.text)
    }


console.log(isLoaded)
    return <>
        <SearchBar/>
        {isLoaded ? (
            <>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={8}
                onLoad={onLoad}
                // onUnmount={onUnmount}
                >
                {directionsResponse && (
                    <DirectionsRenderer directions={directionsResponse}/>
                )}
            </GoogleMap>
            </>
        ) : <></>}

    </>
}

export default App
