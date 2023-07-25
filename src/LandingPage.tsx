import {Dispatch, SetStateAction} from "react";
import {routeResponseDTO} from "./routeResponseDTO.tsx";
import SearchBar from "./SearchBar.tsx";
import Autocomplete from "./CitySelectAutoComplete.tsx";
import ReactWeather, { useOpenWeather } from "react-open-weather";



type SearchBarProps = {
    setRouteData: Dispatch<SetStateAction<routeResponseDTO[] | null>>
    setDisplayMap: Dispatch<SetStateAction<boolean>>
}

function LandingPage(props: SearchBarProps) {

    const {data, isLoading, errorMessage } = useOpenWeather({
        key: '7b5f855dea5801df1df9469b143c0742',
        lat: '48.137154',
        lon: '11.576124',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
    });

    return <>
        <div className="landingPage">
            <div className="landingPage-Content">
            <h1 className="title-landingPage">WalkBaba</h1>
            <h5 className="subtitle-landingPage">AI-generated walking routes to discover your city</h5>
            <SearchBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>
                <ReactWeather
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    data={data}
                    lang="en"
                    locationLabel="Munich"
                    unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                    showForecast
                />
            </div>
        </div>
    </>
}

export default LandingPage;