import MapBoard from "./MapBoard.tsx";
import {routeResponseDTO} from "./DTOs/routeResponseDTO.tsx";
import "./css/App.css";
import React, {Dispatch, SetStateAction, useEffect} from "react";
import LoadingPage from "./LoadingPage.tsx";
import NavBar from "./NavBar.tsx"
import axios, {AxiosResponse} from "axios";


type MapGalleryProps = {
    routeData: routeResponseDTO[] | null
    savedRoutesId: number[]
    setRouteData: Dispatch<SetStateAction<routeResponseDTO[] | null>>
    displayMap: boolean
    setDisplayMap: Dispatch<SetStateAction<boolean>>
    fetchSavedRoute: () => void
}


function MapGallery(props: MapGalleryProps) {
    const country = new URLSearchParams(location.search).get('country');
    const city = new URLSearchParams(location.search).get('city');

    const deployUrl = "http://walkbaba.azurewebsites.net/api/openai"

    useEffect(()=>{
        onPageLoad()
    },[])

    const onPageLoad = () => {
        console.log("I'm in here")
        console.log(new URLSearchParams(location.search).get('country'))
        props.setDisplayMap(false)
        void fetchData();
    }

    const fetchData = async () => {
        console.log("About to call backend")
        try {
            const response: AxiosResponse<routeResponseDTO[]> = await axios.post(deployUrl, {
                city: city,
                country: country
            });
            console.log(response.data);
            console.log("Received data from backend")
            props.setRouteData(response.data);
            props.setDisplayMap(true)
        } catch (err) {
            if (err instanceof Error) {
                // setShowError(true)
                console.error(err)
            }
        }
    }

    return (
        <>

            {!props.displayMap && <LoadingPage displayMap={props.displayMap}/>}
            {props.displayMap &&
                <>
                    <NavBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>

                    <main className="mapgallery">
                        <div className="col-lg-5 col-md-6 mx-auto result-title">
                            <h5>Top Walking Routes in {city}, {country}</h5>
                        </div>
                        <div className="album py-3">
                            <div className="container">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                    {
                                        Array.from(Array(props.routeData?.length).keys()).map((index: number) => (
                                            <div className="col " id={index.toString()}>
                                                <MapBoard routeData={props.routeData![index]}
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