import MapBoard from "./MapBoard.tsx";
import {routeResponseDTO} from "./routeResponseDTO.tsx";


type MapGalleryProps = {
    routeData: routeResponseDTO[] | null
}

function MapGallery(props: MapGalleryProps) {

    return (
        <>
            <div className="container">
                <h1>Map Gallery</h1>
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