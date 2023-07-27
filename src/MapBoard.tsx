import Map from "./Map.tsx";
import {routeResponseDTO} from "./DTOs/routeResponseDTO.tsx";
import "./css/App.css";
import {useNavigate} from "react-router-dom";
import SaveIcon from "./SaveIcon.tsx";

type MapBoardProps = {
    fetchSavedRoute : () => void
    routeData: routeResponseDTO | null
    isSaved : boolean
    index : number
}

const containerStyle = {
    width: '55vh',
    height: '45vh'
};

function MapBoard(props: MapBoardProps) {
    const navigate = useNavigate()
    const clickHandler = (e: any) => {
        e.preventDefault();
        if (props.routeData) {
            navigate(`/routes/map?routeId=${props.routeData.route_id}` , {
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
                    <Map containerStyle={containerStyle} routeWaypoints={props.routeData!.waypoints}/>
                </div>
                <div className="card-body">

                        {props.routeData &&
                            <div>
                                <h4 className="card-title">{props.routeData.walk_name}</h4>
                                <p className="list-group-item">{props.routeData.description}</p>
                                <p> <a href='' onClick={clickHandler}>More details</a></p>
                                <p><a href={`#popup${props.index}`}>Export route</a></p>
                                <div id={`popup${props.index}`} className="overlay">
                                    <div className="popup">
                                        <h2>Route Export Links</h2>
                                        <a className="close" href="#">&times;</a>
                                        <div className="content">
                                            <a target="_blank" href={props.routeData.exportLinks.exportMapLink}>Route map</a><br/>
                                            <a target="_blank" href={props.routeData.exportLinks.exportStartMapLink}>Route including directions to startpoint</a><br/>
                                            <a target="_blank" href={props.routeData.exportLinks.exportEndMapLink}>Route including directions to endpoint</a><br/>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="save-button">
                                        <SaveIcon fetchSavedRoute={props.fetchSavedRoute} routeId={props.routeData!.route_id} isSaved={props.isSaved}/>
                                    </div>



                                        <div className="duration">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-stopwatch-fill"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"/>
                                            </svg>
                                            {
                                                (props.routeData.durationInMin < 61) ?
                                                    <span> {props.routeData.durationInMin} min</span>
                                                :
                                                <span >{Math.floor(props.routeData.durationInMin/60)}h {props.routeData.durationInMin%60} min</span>
                                    }
                                        </div>
                                        <div className="distance">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-arrow-right-circle-fill"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                            </svg>
                                            {props.routeData.distance} km

                                        </div>

                                </div>

                            </div>}

                </div>
            </div>


            </>
            );
            }

            export default MapBoard