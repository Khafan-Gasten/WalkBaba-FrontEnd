
import "./css/App.css";
import "./css/SingleMap.css"
import Map from "./Map.tsx";
import {useLocation} from "react-router-dom";
import DisplayImages from "./DisplayImages.tsx";
import {WaypointDTO} from "./DTOs/waypointDTO.tsx";
import NavBar from "./NavBar.tsx";
import {Dispatch, SetStateAction, useState} from "react";
import {routeResponseDTO} from "./DTOs/routeResponseDTO.tsx";


type MapSignle = {
    fetchSavedRoute : (arg: number,  saveRoute: boolean) => void
}
function MapSingle( props: MapSingle) {

    const scrollToGallery = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };


    const location  = useLocation();
return (

        <main>
            <NavBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>

            <div className="singleMapTitle">
                <h3>{location.state.routeData.walk_name} in {location.state.routeData.city}</h3>
            </div>
            <div className="container-lg">
                <div className="row">
                    <div className="col-sm-4">
                        <Map routeWaypoints={location.state.routeData.waypoints}/>
                    </div>
                    <div className="col-sm-8 singleMapInfo">
                        <p>{location.state.routeData.description}</p>
                        <p></p>
                        <ul>
                        {location.state.routeData.waypoints.map((waypoint: WaypointDTO, index: number) =>
                            (<li> <a href= {`#gallery-${index}`} onClick={scrollToGallery}>{waypoint.waypoint_name}</a></li>
                        ))}</ul>
                        <p>{location.state.routeData.distance}</p>
                        <p>{location.state.routeData.durationInMin}</p>
                    </div>
                </div>
            </div>
            {location.state.routeData.waypoints.map((waypoint: WaypointDTO, index: number) => (
                <div className="col " id={`gallery-${index}`}>
                    <DisplayImages key={index} imageList={waypoint.imageLink}/>
                </div>))}
            {/*<div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">*/}
            {/*    <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">*/}
            {/*        <div className="my-3 p-3">*/}
            {/*            <h2 className="display-5">Another headline</h2>*/}
            {/*            <p className="lead">And an even wittier subheading.</p>*/}
            {/*        </div>*/}

            {/*        <div>*/}
            {/*            <div id="carouselExample" className="carousel slide">*/}
            {/*                <div className="carousel-inner">*/}
            {/*                    <div className="carousel-item active">*/}

            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <button className="carousel-control-prev" type="button"*/}
            {/*                        data-bs-target="#carouselExample" data-bs-slide="prev">*/}
            {/*                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
            {/*                    <span className="visually-hidden">Previous</span>*/}
            {/*                </button>*/}
            {/*                <button className="carousel-control-next" type="button"*/}
            {/*                        data-bs-target="#carouselExample" data-bs-slide="next">*/}
            {/*                    <span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
            {/*                    <span className="visually-hidden">Next</span>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </main>



);
}
export default MapSingle
