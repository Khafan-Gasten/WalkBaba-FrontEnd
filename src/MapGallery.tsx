import MapBoard from "./MapBoard.tsx";
import {routeResponseDTO} from "./routeResponseDTO.tsx";
import "./App.css";
import SearchBar from "./SearchBar.tsx";
import {Dispatch, SetStateAction} from "react";
import {useLocation} from "react-router-dom";
import LoadingPage from "./LoadingPage.tsx";


type MapGalleryProps = {
    routeData: routeResponseDTO[] | null
    savedRoutesId: number[]
    setRouteData: Dispatch<SetStateAction<routeResponseDTO[] | null>>
    displayMap: boolean
    setDisplayMap: Dispatch<SetStateAction<boolean>>
    fetchSavedRoute: () => void
}

function MapGallery(props: MapGalleryProps) {
    const location = useLocation();
    return (
        <>
              {!props.displayMap && <LoadingPage displayMap={props.displayMap}/>}
            {props.displayMap &&
                <>
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

            <main className="mapgallery">
                <div className="col-lg-5 col-md-6 mx-auto result-title">
                    <h5>Top Walking Routes in {location.state.city}</h5>
                </div>
                <div className="album py-3">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {
                                Array.from(Array(props.routeData?.length).keys()).map((index: number) => (
                                    <div className="col " id={index.toString()}>
                                        <MapBoard key={index} routeData={props.routeData![index]}
                                                  fetchSavedRoute={props.fetchSavedRoute}
                                                  isSaved={props.savedRoutesId.includes(props.routeData![index].route_id)}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>
            </>}
        </>
    )
}

export default MapGallery