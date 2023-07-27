import MapBoard from "./MapBoard.tsx";
import {routeResponseDTO} from "./DTOs/routeResponseDTO.tsx";
import "./css/App.css";
import React, {Dispatch, SetStateAction} from "react";
import {useLocation} from "react-router-dom";
import LoadingPage from "./LoadingPage.tsx";
import NavBar from "./NavBar.tsx"
import SearchBar from "./SearchBar.tsx";

type MapGalleryProps = {
    routeData: routeResponseDTO[] | null
    savedRoutes: routeResponseDTO[]
    setRouteData: Dispatch<SetStateAction<routeResponseDTO[] | null>>
    displayMap: boolean
    setDisplayMap: Dispatch<SetStateAction<boolean>>
    fetchSavedRoute: (arg: number, saveRoute: boolean) => void
}

function MapGallery(props: MapGalleryProps) {
    const location = useLocation();
    const isRouteSaved = (route: routeResponseDTO): boolean => {
        for (const val of props.savedRoutes)
            if (val.route_id == route.route_id) {
                return true
            }
        return false
    }
    return (
        <>

            {!props.displayMap && <LoadingPage displayMap={props.displayMap}/>}
            {props.displayMap &&
                <>
                    <div className="mapgallery-root">
                        <NavBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>
                        <main className="mapgallery">
                            <div className="col-lg-5 col-md-5 mx-auto searchbar-gallery">
                                <SearchBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>
                            </div>

                            <div className="album py-3">
                                <div className="container">
                                    <div className="result-title">
                                        <h5>Top Walking Routes in {location.state.city}</h5>
                                    </div>
                                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                        {
                                            Array.from(Array(props.routeData?.length).keys()).map((index: number) => (
                                                <div className="col " id={index.toString()}>
                                                    <MapBoard key={index} routeData={props.routeData![index]}
                                                              fetchSavedRoute={props.fetchSavedRoute}
                                                              isSaved={isRouteSaved(props.routeData![index])}/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>

                </>}
        </>
    )
}

export default MapGallery