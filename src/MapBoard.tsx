import Map from "./Map.tsx";
import {routeResponseDTO} from "./routeResponseDTO.tsx";
import "./App.css";

type MapBoardProps = {
    routeData: routeResponseDTO | null
}

function MapBoard(props: MapBoardProps) {

    return (
        <>
            <Map routeWaypoints={props.routeData!.waypoints}/>
            <div className="col-lg-4 col-md-12">
                <div className="card h-100 text-bg-light mb-3">
                    <div className="card-body panel-body">
                        {props.routeData &&
                            <>
                                <h4 className="card-title">{props.routeData.walk_name}</h4>
                                    <p className="list-group-item">{props.routeData.description}</p>
                            </>}
                    </div>
                </div>
            </div>

        </>
    );
}

export default MapBoard