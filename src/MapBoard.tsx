import Map from "./Map.tsx";
import {routeResponseDTO} from "./routeResponseDTO.tsx";
import "./App.css";
import {useNavigate} from "react-router-dom";

type MapBoardProps = {
    routeData: routeResponseDTO | null
}

function MapBoard(props: MapBoardProps) {
    const navigate = useNavigate()

    const clickHandler = (e : any) => {
        e.preventDefault();
        if (props.routeData) {
            navigate(`/search?query=${props.routeData.walk_name}`)
            }
    }

    return (
        <>
            <Map routeWaypoints={props.routeData!.waypoints}/>
            <div className="col-lg-4 col-md-12">
                <div className="card h-100 text-bg-light mb-3">
                    <div className="card-body panel-body">
                        {props.routeData &&
                            <div onClick={clickHandler}>
                                <h4 className="card-title">{props.routeData.walk_name}</h4>
                                    <p className="list-group-item">{props.routeData.description}</p>
                            </div>}
                    </div>
                </div>
            </div>

        </>
    );
}

export default MapBoard