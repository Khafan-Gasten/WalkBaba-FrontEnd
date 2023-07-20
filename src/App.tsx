import './App.css'
import SearchBar from "./SearchBar.tsx";
import {useState} from "react";
import {routeResponseDTO} from "./routeResponseDTO.tsx";
import MapGallery from "./MapGallery.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
    const [routeData, setRouteData] = useState<routeResponseDTO[] | null>(null);
    const [displayMap, setDisplayMap] = useState<boolean>(false)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SearchBar setRouteData={setRouteData} setDisplayMap={setDisplayMap}/>}></Route>
                <Route path="/routes" element={displayMap && <MapGallery routeData={routeData} setRouteData={setRouteData} setDisplayMap={setDisplayMap}/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
