import './App.css'
import {useEffect, useState} from "react";
import {routeResponseDTO} from "./routeResponseDTO.tsx";
import MapGallery from "./MapGallery.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.tsx";
import MapSingle from "./MapSingle.tsx";
import SignUp from "./SignUp.tsx";
import SavedRoute from "./SavedRoute.tsx";
import axios from "axios";



function App() {

    const [routeData, setRouteData] = useState<routeResponseDTO[]  | null>(null);
    const [displayMap, setDisplayMap] = useState<boolean>(false)
    const [savedRouteId , setSavedRouteId] = useState<number[]>( [])
    const [savedRoutes,setSavedRoutes ] = useState<routeResponseDTO[]>([])
    const getSavedRoute =  async () => {
        const response = await axios.get("http://walkbaba.azurewebsites.net/api/saveroute?userId=1")
        return response.data
    }

    const fetchSavedRoute = () =>{
        getSavedRoute().then(( response:routeResponseDTO[] )=> {
            const ids = new Array<number>(response.length);
            Array.from(response).forEach( ( route: routeResponseDTO)=> ids.push( route.route_id))
            setSavedRouteId(ids)
            setSavedRoutes( response)


        })

    }
    useEffect(()=>{
        fetchSavedRoute()
        console.log("use effect")
    },[])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage setRouteData={setRouteData} setDisplayMap={setDisplayMap}/>}></Route>
                <Route path="/routes" element={<MapGallery routeData={routeData} setRouteData={setRouteData} displayMap={displayMap} setDisplayMap={setDisplayMap}
                                fetchSavedRoute={fetchSavedRoute} savedRoutesId={savedRouteId}/>}></Route>
                <Route path="/routes/map" element={<MapSingle fetchSavedRoute={fetchSavedRoute}/>}></Route>
                <Route path="/savedroutes" element={<SavedRoute
                    savedRoutes={ savedRoutes} fetchSavedRoute={fetchSavedRoute}/>}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
