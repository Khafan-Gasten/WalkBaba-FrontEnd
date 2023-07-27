
import "./css/App.css";
import MapBoard from "./MapBoard.tsx";
import {routeResponseDTO} from "./DTOs/routeResponseDTO.tsx";

import { useNavigate} from "react-router-dom";
import NavBar from "./NavBar.tsx";

type SaveRouteProp = {
    savedRoutes : routeResponseDTO[]
    fetchSavedRoute :  (arg: number,  saveRoute: boolean) => void
}

function SavedRoute( props: SaveRouteProp) {

    const navigate = useNavigate()
    const clickHandler = (e: any) => {
        console.log("here in save click")
        e.preventDefault()
        navigate("/")
    }

    return (
        <>
            <div className={"background-image"}></div>

            <div className="saved-route-page-nav-bar">
            <NavBar/>
            </div>
            <main className="saved-route-page">

                <h1 className={"saved-title"}>Your Saved Routes</h1>
                <div className="album py-5">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {
                                Array.from(props.savedRoutes).map((s:routeResponseDTO, index: number) => (
                                    <div className="col">
                                        <MapBoard index={index} key={s.route_id} isSaved={true} fetchSavedRoute={props.fetchSavedRoute}
                                                   routeData={s}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}
export default SavedRoute