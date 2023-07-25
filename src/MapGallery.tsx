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
    const location = useLocation();
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


            <nav>
                <header
                    className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom mapgallery-bar">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                            <a className="navbar-brand" href="#">
                                <img src="src/assets/walkbaba2.png" width="150" height="70"/>
                            </a>
                        </a>
                    </div>
                    <div className="col-6 mx-auto d-flex">
                        <SearchBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>
                    </div>

                    <div className="col-md-3 text-end">
                        <a className="link-secondary" href="#">Weather</a>
                    </div>
                </header>
        </nav>

            {/*<div className="container">*/}
            {/*    <nav className="navbar navbar-expand-md  mapgallery-bar">*/}
            {/*        <div className="row flex-nowrap justify-content-between align-items-center">*/}
            {/*            <div className="col-3 pt-1">*/}
            {/*                <h2 className="fw-light">WalkBaba</h2>*/}
            {/*            </div>*/}
            {/*            <div className="col-6 mx-auto d-flex">*/}
            {/*                <SearchBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>*/}
            {/*            </div>*/}
            {/*            <div className="col-3 d-flex justify-content-end align-items-center">*/}
            {/*                <a className="link-secondary" href="#">Weather</a>*/}

            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </nav>*/}
            {/*</div>*/}


            <main className="mapgallery">
                {/*<div className="col-lg-6 col-md-8 mx-auto">*/}

                {/*    <SearchBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>*/}
                {/*</div>*/}

                <div className="col-lg-5 col-md-6 mx-auto result-title">
                    <h5>Top Walking Routes in {location.state.city}, {location.state.country}</h5>
                </div>
                <div className="album py-3">
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