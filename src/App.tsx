import './App.css'
import {useState} from "react";
import {routeResponseDTO} from "./routeResponseDTO.tsx";
import MapGallery from "./MapGallery.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.tsx";
import MapSingle from "./MapSingle.tsx";
import Profile from "./Profile.tsx";
import SignUp from "./SignUp.tsx";



function App() {
    const [routeData, setRouteData] = useState<routeResponseDTO[]  | null>(null);
    const [displayMap, setDisplayMap] = useState<boolean>(false)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage setRouteData={setRouteData} setDisplayMap={setDisplayMap}/>}></Route>
                <Route path="/routes" element={<MapGallery routeData={routeData} setRouteData={setRouteData} displayMap={displayMap} setDisplayMap={setDisplayMap}/>}></Route>
                <Route path="/routes/map" element={<MapSingle/>}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
