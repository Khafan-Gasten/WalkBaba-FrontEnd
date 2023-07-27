
import "./css/App.css";
import "./css/SingleMap.css"
import Map from "./Map.tsx";
import {useLocation} from "react-router-dom";
import DisplayImages from "./DisplayImages.tsx";
import {WaypointDTO} from "./DTOs/waypointDTO.tsx";
import NavBar from "./NavBar.tsx";
import { useEffect, useState} from "react";
import {routeResponseDTO} from "./DTOs/routeResponseDTO.tsx";
import SaveIcon from "./SaveIcon.tsx";
import axios, {AxiosResponse} from "axios";


type MapSingle = {
    fetchSavedRoute : (arg: number,  saveRoute: boolean) => void
}

const containerStyle = {
    width: '45vw',
    height: '35vw'
};

function MapSingle( props: MapSingle) {
    const deployUrl = "http://walkbaba.azurewebsites.net/api/routes/map?routeId="
    const[singleMapRouteData, setSingleMapRouteData] = useState<routeResponseDTO | null>(null)
    const[isSaved, setIsSaved] = useState<boolean>(false)

    const scrollToGallery = (event: any) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const getPageInfo = async(routeId: string | null) => {
        const queryUrl = `${deployUrl}${routeId!}`
        console.log(queryUrl+routeId!)
        const response: AxiosResponse<routeResponseDTO> = await axios.get(queryUrl);
        setSingleMapRouteData(response.data)
        setIsSaved(false)
    }

    const locations = useLocation();

    const onPageLoad = () => {
        if (!locations.state) {
            console.log("Calling the new endpoint")
            const routeId = new URLSearchParams(location.search).get('routeId');
            void getPageInfo(routeId);
        } else {
            console.log("Used front end stuff")
            setSingleMapRouteData(locations.state.routeData)
            setIsSaved(locations.state.isSaved)
        }
    }

    useEffect(()=>{
        onPageLoad()
    },[])


return (
    <>
    {singleMapRouteData && <>
    <main>
        <NavBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>

        <div className="singleMapTitle">
            <h3>{singleMapRouteData.walk_name} in {singleMapRouteData.city}</h3>
        </div>
        <div className="container-lg">
            <div className="row">
                <div className="col-sm-4">
                    <Map containerStyle={containerStyle} routeWaypoints={singleMapRouteData.waypoints}/>
                </div>
                <div className="col-sm-8 singleMapInfo">
                    <p>{singleMapRouteData.description}.</p>
                    <p>This tour will take you along some of the following highlights in {singleMapRouteData.city}:</p>
                    <ul>
                        {singleMapRouteData.waypoints.map((waypoint: WaypointDTO, index: number) =>
                            (<li>{waypoint.waypoint_name} <a href={`#gallery-${index}`}
                                                             onClick={scrollToGallery}>(photos)</a><br/>
                                    <h6>{waypoint.description}</h6>
                                </li>
                            ))}</ul>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="save-button">
                            <SaveIcon fetchSavedRoute={props.fetchSavedRoute} routeId={singleMapRouteData!.route_id}
                                      isSaved={isSaved}/>
                        </div>
                        <div className="duration">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                 fill="currentColor" className="bi bi-stopwatch-fill"
                                 viewBox="0 0 16 16">
                                <path
                                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"/>
                            </svg>
                            {
                                (singleMapRouteData.durationInMin < 61) ?
                                    <span> {singleMapRouteData.durationInMin} min</span>
                                    :
                                    <span>{Math.floor(singleMapRouteData.durationInMin / 60)}h {singleMapRouteData.durationInMin % 60} min</span>
                            }
                        </div>
                        <div className="distance">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                 fill="currentColor" className="bi bi-arrow-right-circle-fill"
                                 viewBox="0 0 16 16">
                                <path
                                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                            </svg>
                            {singleMapRouteData.distance} km

                        </div>

                    </div>
                </div>

            </div>

        </div>

        <a target="_blank" href={singleMapRouteData.exportLinks.exportMapLink} className="btn btn-primary btn-lg active" role="button"
           aria-pressed="true">Export Route</a>
        <a target="_blank" href={singleMapRouteData.exportLinks.exportStartMapLink} className="btn btn-primary btn-lg active"
           role="button" aria-pressed="true">Route with nav to start</a>
        <a target="_blank" href={singleMapRouteData.exportLinks.exportEndMapLink} className="btn btn-primary btn-lg active"
           role="button" aria-pressed="true">Route with nav to end</a>

        {/*<a href="#" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>*/}
        <div className="image-galleries-container">
            {singleMapRouteData.waypoints.map((waypoint: WaypointDTO, index: number) => (
                <div className="col " id={`gallery-${index}`}>
                    <DisplayImages key={index} imageList={waypoint.imageLink}/>
                </div>))}
        </div>

    </main>

    </>}
    </>

)
}
export default MapSingle
