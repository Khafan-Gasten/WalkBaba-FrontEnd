import {useRef, useState, useEffect} from 'react'
import './App.css'
import {
    GoogleMap,
    useJsApiLoader,
    DirectionsRenderer,
    Marker,
    Autocomplete, DirectionsService
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

type results = {
    origin: object
    destination: object
    // eslint-disable-next-line no-undef
    travelMode: object
}

function App() {

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBcasNoSHMwScn254MXT0yqLk-oQopCxq0"
    })

    const [map, setMap] = useState<google.maps.Map|null>(null);
    const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult|null>(null);
    const originRef = useRef();
    const destinationRef = useRef();


    // const onLoad = React.useCallback(function callback(map) {
    //     const bounds = new window.google.maps.LatLngBounds(center);
    //     map.fitBounds(bounds);
    //     console.log("loading")
    //     setMap(map)
    // }, [])


    useEffect( () => {
        // setMap(null)
        calculateRoute()
    }, [])
    // const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null)
    //       calculateRoute()
    // }, [])



    async function calculateRoute() {

        // eslint-disable-next-line no-undef
        const directionsService = new window.google.maps.DirectionsService()
        const results: google.maps.DirectionsResult = await directionsService.route({
            origin: origin,
            destination: dest,
            travelMode: window.google.maps.TravelMode.DRIVING
        })
        console.log("In calculate route")
        setDirectionsResponse(results)
        // setDistance(results.routes[0].legs[0].distance.text)
        // setDuration(results.routes[0].legs[0].duration.text)
    }


    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
            onLoad={(map) => setMap(map)}
            // onUnmount={onUnmount}
            {...directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
            )}
        >

        </GoogleMap>
    ) : <>

        <p>jhsdafdkakh</p></>
}


export default App
