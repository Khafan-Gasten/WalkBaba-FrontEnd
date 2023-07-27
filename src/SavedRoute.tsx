

import "./css/App.css";


import MapBoard from "./MapBoard.tsx";
import {routeResponseDTO} from "./DTOs/routeResponseDTO.tsx";

type SaveRouteProp = {
    savedRoutes : routeResponseDTO[]
    fetchSavedRoute :  (arg: number,  saveRoute: boolean) => void
}

const SavedRoute = ( props: SaveRouteProp) => {



    return (
        <>
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <img className="user_profile"/>
                            <h1 className="fw-light">Your saved tour in WalkBaba</h1>
                        </div>
                    </div>
                </section>

                <div className="album py-5 bg-body-tertiary">
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