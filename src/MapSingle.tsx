
import "./css/App.css";
import "./css/SingleMap.css"
import Map from "./Map.tsx";
import {useLocation} from "react-router-dom";
import DisplayImages from "./DisplayImages.tsx";
import {WaypointDTO} from "./DTOs/waypointDTO.tsx";
import NavBar from "./NavBar.tsx";
import React, {Dispatch, SetStateAction, useState} from "react";
import {routeResponseDTO} from "./DTOs/routeResponseDTO.tsx";
import SaveIcon from "./SaveIcon.tsx";


type MapSingle = {
    fetchSavedRoute : () => void
    setRouteData: Dispatch<SetStateAction<routeResponseDTO[] | null>>
    setDisplayMap: Dispatch<SetStateAction<boolean>>
}

const containerStyle = {
    width: '45vw',
    height: '35vw'
};

const standardExportLink = "https://www.google.com/maps/dir/Vondelpark,+Amsterdam/Hortus+Botanicus+Amsterdam,+Plantage+Middenlaan+2a,+1018+DD+Amsterdam/Het+Amsterdamse+Bos,+1182+DB+Amstelveen/@52.3410917,4.8352439,13z/data=!3m1!4b1!4m20!4m19!1m5!1m1!1s0x47c609e2c5b47ccf:0x6cd478550520ca35!2m2!1d4.8686484!2d52.3579946!1m5!1m1!1s0x47c5e1e2667314ab:0x50a7c8595fea0ba6!2m2!1d4.9081845!2d52.3666659!1m5!1m1!1s0x47c5e1b1f2eb0961:0x8fb6f82a2bc45ab6!2m2!1d4.832342!2d52.3149817!3e2?entry=ttu"


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
    console.log("Link" + location.state.routeData.exportLinks.export_map_link);
    console.log("Link" + location.state.routeData.waypoints);
return (

        <main>
            <NavBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>

            <div className="singleMapTitle">
                <h3>{location.state.routeData.walk_name} in {location.state.routeData.city}</h3>
            </div>
            <div className="container-lg">
                <div className="row">
                    <div className="col-sm-4">
                        <Map containerStyle={containerStyle} routeWaypoints={location.state.routeData.waypoints}/>
                    </div>
                    <div className="col-sm-8 singleMapInfo">
                        <p>{location.state.routeData.description}.</p>
                        <p>This tour will take you along some of the following highlights in {location.state.routeData.city}:</p>
                        <ul>
                        {location.state.routeData.waypoints.map((waypoint: WaypointDTO, index: number) =>
                            (<li>{waypoint.waypoint_name} <a href= {`#gallery-${index}`} onClick={scrollToGallery}>(photos)</a><br/>
                                    <h6>{waypoint.description}</h6>
                            </li>
                        ))}</ul>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="save-button">
                                <SaveIcon fetchSavedRoute={props.fetchSavedRoute} routeId={location.state.routeData!.route_id} isSaved={location.state.isSaved}/>
                            </div>
                            <div className="duration">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                     fill="currentColor" className="bi bi-stopwatch-fill"
                                     viewBox="0 0 16 16">
                                    <path
                                        d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"/>
                                </svg>
                                {
                                    (location.state.routeData.durationInMin < 61) ?
                                        <span> {location.state.routeData.durationInMin} min</span>
                                        :
                                        <span >{Math.floor(location.state.routeData.durationInMin/60)}h {location.state.routeData.durationInMin%60} min</span>
                                }
                            </div>
                            <div className="distance">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                     fill="currentColor" className="bi bi-arrow-right-circle-fill"
                                     viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                </svg>
                                {location.state.routeData.distance} km

                            </div>

                        </div>
                    </div>

                </div>

            </div>
            {/*<div className="col-auto search-button-container">*/}
            {/*    <button className="btn btn-primary mb-3 search-button btn-link" ref="https://www.google.com/maps/dir/Vondelpark,+Amsterdam/Hortus+Botanicus+Amsterdam,+Plantage+Middenlaan+2a,+1018+DD+Amsterdam/Het+Amsterdamse+Bos,+1182+DB+Amstelveen/@52.3410917,4.8352439,13z/data=!3m1!4b1!4m20!4m19!1m5!1m1!1s0x47c609e2c5b47ccf:0x6cd478550520ca35!2m2!1d4.8686484!2d52.3579946!1m5!1m1!1s0x47c5e1e2667314ab:0x50a7c8595fea0ba6!2m2!1d4.9081845!2d52.3666659!1m5!1m1!1s0x47c5e1b1f2eb0961:0x8fb6f82a2bc45ab6!2m2!1d4.832342!2d52.3149817!3e2?entry=ttu" type="button" value="Search">Export Route</button>*/}
            {/*</div>*/}
            <a href={location.state.routeData.exportLinks.export_map_link} className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Export Route</a>
            {/*<a href="#" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>*/}
            <div className="image-galleries-container">
            {location.state.routeData.waypoints.map((waypoint: WaypointDTO, index: number) => (
                <div className="col " id={`gallery-${index}`}>
                    <DisplayImages key={index} imageList={waypoint.imageLink}/>
                </div>))}
            </div>
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
