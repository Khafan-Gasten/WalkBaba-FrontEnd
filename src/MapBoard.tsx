
import Map from "./Map.tsx";
import {routeResponseDTO} from "./routeResponseDTO.tsx";

type MapBoardProps = {
    routeData: routeResponseDTO
}

function  MapBoard(props: MapBoardProps) {

    return (
        <>
            <div className="col-lg-4 col-md-12">
                <div className="card h-100 text-bg-light mb-3">
                    {/*<img src="" className="card-img-top" alt="..."/>*/}
                    <div className="card-body panel-body">
                        <h5 className="card-title">{props.routeData.walk_name}</h5>
                        <ul className="list-group">
                              
                        </ul>
                    </div>
                </div>
            </div>

            <Map />
        </>
    );
}
export default MapBoard