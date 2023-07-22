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
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">WalkBaba</h1>
                            <SearchBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>
                            {/*<p>Walking suggestions for Rotterdam, Netherlands</p>*/}
                        </div>
                    </div>
                </section>

                <div className="album py-5 bg-body-tertiary">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {
                                Array.from(Array(props.routeData?.length).keys()).map((index: number) => (
                                    <div className="col " id={index.toString()}>
                                        <MapBoard routeData={props.routeData![index]}/>
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

export default MapGallery