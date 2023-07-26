import Map from "./Map.tsx";
import {routeResponseDTO} from "./DTOs/routeResponseDTO.tsx";
import "./css/App.css";
import {useNavigate} from "react-router-dom";
import SaveIcon from "./SaveIcon.tsx";

type MapBoardProps = {
    fetchSavedRoute : () => void
    routeData: routeResponseDTO | null
    isSaved : boolean
}

function MapBoard(props: MapBoardProps) {
    const navigate = useNavigate()
    const clickHandler = (e: any) => {
        e.preventDefault();
        if (props.routeData) {
            navigate('/routes/map' , {
                state:{
                    routeData : props.routeData ,
                    isSaved : props.isSaved ,
                }})
        }
    }

    return (
        <>
            <div className="card h-100 shadow-sm">
                <div className="bd-placeholder-img card-img-top map_pic">
                    <Map routeWaypoints={props.routeData!.waypoints}/>
                </div>
                <div><SaveIcon fetchSavedRoute={props.fetchSavedRoute} routeId={props.routeData!.route_id} isSaved={props.isSaved}/></div>
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        {props.routeData &&
                            <div onClick={clickHandler}>
                                <h4 className="card-title">{props.routeData.walk_name}</h4>
                                <p className="list-group-item">{props.routeData.description}</p>
                                <p className="list-group-item">{props.routeData.description}</p>
                            </div>}
                    </div>
                </div>
            </div>


            </>
            );
            }

            export default MapBoard