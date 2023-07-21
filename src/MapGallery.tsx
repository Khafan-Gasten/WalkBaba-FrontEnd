import MapBoard from "./MapBoard.tsx";
import {routeResponseDTO} from "./routeResponseDTO.tsx";
import "./App.css";
import SearchBar from "./SearchBar.tsx";
import {Dispatch, SetStateAction} from "react";


type MapGalleryProps = {
    routeData: routeResponseDTO[] | null
    setRouteData: Dispatch<SetStateAction<routeResponseDTO[] | null>>
    setDisplayMap: Dispatch<SetStateAction<boolean>>
}

function MapGallery(props: MapGalleryProps) {

    return (
        <>
            <div className="map">
                <SearchBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>
                {/*<p>Walking suggestions for Rotterdam, Netherlands</p>*/}

                            <MapBoard routeData={props.routeData![0]}/>
                            <MapBoard routeData={props.routeData![1]}/>
                            <MapBoard routeData={props.routeData![2]}/>
                            <MapBoard routeData={props.routeData![3]}/>
                            <MapBoard routeData={props.routeData![4]}/>


            </div>
        </>
    );
}

export default MapGallery