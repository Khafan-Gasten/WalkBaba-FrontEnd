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
    const [savedRoutes,setSavedRoutes ] = useState<routeResponseDTO[]>([])
    const getSavedRoute =  async () => {
        const response = await axios.get("http://walkbaba.azurewebsites.net/api/saveroute?userId=1")
        return response.data
    }

    const fetchSavedRoute = (id: number, isSaved: boolean) =>{
        console.log("in new fetch")
        console.log( "change state id " , id)
        if(isSaved) {
            if (routeData) {
                for (let val:routeResponseDTO  of routeData) {
                    if( val.route_id == id){
                        console.log( "id is equal I add it")
                        savedRoutes.push(val)
                        setSavedRoutes(savedRoutes)
                        break
                    }
                }
            }
            console.log( savedRoutes)
        }else {
            console.log( "remove" , id)
            const filterRoute = savedRoutes.filter( (route: routeResponseDTO ) =>  route.route_id != id)
            setSavedRoutes(filterRoute)
            console.log( filterRoute)
        }

    }
    const fetchSavedRouteInitial = () =>{
        getSavedRoute().then(( response:routeResponseDTO[] )=> {
            setSavedRoutes( response)
        })
    }
    useEffect(()=>{
        fetchSavedRouteInitial()
        console.log("use effect")
    },[])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage setRouteData={setRouteData} setDisplayMap={setDisplayMap}/>}></Route>
                <Route path="/routes" element={<MapGallery routeData={routeData} setRouteData={setRouteData} displayMap={displayMap} setDisplayMap={setDisplayMap}
                                fetchSavedRoute={fetchSavedRoute} savedRoutes={savedRoutes}/>}></Route>
                <Route path="/routes/map" element={<MapSingle fetchSavedRoute={fetchSavedRoute}/>}></Route>
                <Route path="/savedroutes" element={<SavedRoute
                    savedRoutes={ savedRoutes} fetchSavedRoute={fetchSavedRoute}/>}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
