import axios, {AxiosResponse} from "axios";
import React, {Dispatch, SetStateAction, useState} from "react";
import {routeResponseDTO} from "./DTOs/routeResponseDTO.tsx";
import "./css/App.css";
import CountrySelect from "./CountrySelect.tsx";
import {Country} from "./DTOs/Country.tsx";
import CitySelectAutoComplete from "./CitySelectAutoComplete.tsx"
import { useNavigate} from "react-router-dom"
import {SingleValue} from "react-select";


type SearchBarProps = {
    setRouteData: Dispatch<SetStateAction<routeResponseDTO[] | null>>
    setDisplayMap: Dispatch<SetStateAction<boolean>>
}

function SearchBar(props: SearchBarProps) {

    const [selectedCountry, setSelectedCountry] = useState<SingleValue<Country>>();
    const [selectedCity, setSelectedCity] = useState<string>('');
    // const localUrl = "http://localhost:8081/api/openai";
    const deployUrl = "http://walkbaba.azurewebsites.net/api/openai"

    const [showError, setShowError] = useState<boolean>(false);
    const errorMessage = "We couldn't find this city. Please select an option from the city dropdown list."
    const navigate = useNavigate()

    const fetchData = async () => {
        console.log("About to call backend")
        try {
            console.log("city name sent to backend: " + selectedCity.split(",")[0])
            console.log("country name sent to backend: " + selectedCountry!.label.substring(selectedCountry!.label.indexOf(" ") + 1))
            const response: AxiosResponse<routeResponseDTO[]> = await axios.post(deployUrl, {
                city: selectedCity.split(",")[0],
                country: selectedCountry?.label.substring(selectedCountry?.label.indexOf(" ") + 1)
            });
            console.log(response.data);
            console.log("Received data from backend")
            props.setRouteData(response.data);
            props.setDisplayMap(true)
        } catch (err) {
            if (err instanceof Error) {
                setShowError(true)
                console.error(err)
            }
        }
        setShowError(false)
    }

    const onSubmitSearchRoutes = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("User made a search for city " + selectedCity)
        if (!selectedCity) {
            setShowError(true)
            console.log("bad search")
        } else {
            setShowError(false)
            // setTimeout(() => {
            //     props.setDisplayMap(false)
            // }, 1000);
            props.setDisplayMap(false)

            void fetchData();
            navigate(`/routes?country=${selectedCountry!.value}?city=${selectedCity.split(",")[0]}`,
                {
                    state: {
                        city: selectedCity,
                        country: selectedCountry?.value
                    }
                });
        }
    }

    return <>


        <div className="container">
            <form onSubmit={onSubmitSearchRoutes} className="row g-3 searchbar">
                <div className="col-auto">
                    <CountrySelect selectedCountry = {selectedCountry} setSelectedCountry = {setSelectedCountry}/>
                </div>
                <div className="col-auto">
                    <CitySelectAutoComplete selectedCountry = {selectedCountry} setSelectedCountry = {setSelectedCountry}
                                            selectedCity = {selectedCity} setSelectedCity = {setSelectedCity}/>
                </div>
                <div className="col-auto search-button-container">
                    <button className="btn btn-primary mb-3 search-button" type="submit" value="Search">Search</button>
                </div>
            </form>
            <p>{showError && errorMessage}</p>
        </div>

    </>
}

export default SearchBar