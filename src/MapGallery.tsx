import MapBoard from "./MapBoard.tsx";
import {routeResponseDTO} from "./routeResponseDTO.tsx";
import "./App.css";
import SearchBar from "./SearchBar.tsx";
import {Dispatch, SetStateAction} from "react";
import {useLocation} from "react-router-dom";


type MapGalleryProps = {
    routeData: routeResponseDTO[] | null
    setRouteData: Dispatch<SetStateAction<routeResponseDTO[] | null>>
    setDisplayMap: Dispatch<SetStateAction<boolean>>
}

function MapGallery(props: MapGalleryProps) {
    const location  = useLocation();
    return (
        <>
            {/*<header data-bs-theme="dark">*/}
            {/*    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">*/}
            {/*        <div className="container-fluid">*/}
            {/*            <div className="row flex-nowrap justify-content-between align-items-center">*/}
            {/*                <div className="col-3 pt-1">*/}
            {/*                    <h2 className="fw-light">WalkBaba</h2>*/}
            {/*                </div>*/}
            {/*                <div className="col-6">*/}
            {/*                    <SearchBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>*/}
            {/*                </div>*/}
            {/*                <div className="col-3 d-flex justify-content-end align-items-center">*/}
            {/*                    <a className="link-secondary" href="#">Weather</a>*/}

            {/*                </div>*/}
            {/*            </div>*/}
            {/*            */}
            {/*        </div>*/}
            {/*    </nav>*/}
            {/*</header>*/}



                <nav className="border-bottom lh-1 py-1 mapgallery-bar">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-3 pt-1">
                            <h2 className="fw-light">WalkBaba</h2>
                        </div>
                        <div className="col-6">
                            <SearchBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>
                        </div>
                        <div className="col-3 d-flex justify-content-end align-items-center">
                            <a className="link-secondary" href="#">Weather</a>

                        </div>
                    </div>
                </nav>



            <main className="mapgallery">
                {/*<div className="col-lg-6 col-md-8 mx-auto">*/}

                {/*    <SearchBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>*/}
                {/*</div>*/}


                <div className="album py-5 bg-body-tertiary">
                    <h3>Top Walking Routes in {location.state.city}, {location.state.country}</h3>
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