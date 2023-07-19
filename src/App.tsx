import './App.css'
import SearchBar from "./SearchBar.tsx";
import {useState} from "react";
import {routeResponseDTO} from "./routeResponseDTO.tsx";
import MapGallery from "./MapGallery.tsx";


function App() {
    const [routeData, setRouteData] = useState<routeResponseDTO[] | null>(null);
    const [displayMap, setDisplayMap] = useState<boolean>(false)

    return (
        <>
            <SearchBar setRouteData={setRouteData} setDisplayMap={setDisplayMap}/>
            {displayMap && <MapGallery routeData={routeData}/>}

        </>
    );
}

export default App
