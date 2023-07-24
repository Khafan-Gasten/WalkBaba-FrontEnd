import MapBoard from "./MapBoard.tsx";
import {routeResponseDTO} from "./routeResponseDTO.tsx";
import "./App.css";
import SearchBar from "./SearchBar.tsx";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";


type MapGalleryProps = {
    routeData: routeResponseDTO[] | null
    setRouteData: Dispatch<SetStateAction<routeResponseDTO[] | null>>
    setDisplayMap: Dispatch<SetStateAction<boolean>>
}

type Weather = {
 minTemperature : string
 maxTemperature : string
 currentTemperature : string
 currentTemperature : string
}

function MapGallery(props: MapGalleryProps) {
    const location  = useLocation();

    const fetchWeather = async ()=> {
        const response =
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location.state.city}&appid=162db46d9a910a856797cdb947cd7888&units=celsius`)
        console.log(response.data)
        console.log("hello")
    }
        fetchWeather();

    return (
        <>
            <main>

                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">WalkBaba</h1>

                            <SearchBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>
                        </div>
                    </div>
                </section>

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