import axios, {AxiosResponse} from "axios";
import React, {Dispatch, SetStateAction, useRef, useState} from "react";
import {routeResponseDTO} from "./routeResponseDTO.tsx";
import "./App.css";
import {useNavigate} from "react-router-dom"


type SearchBarProps = {
    setRouteData: Dispatch<SetStateAction<routeResponseDTO[] | null>>
    setDisplayMap: Dispatch<SetStateAction<boolean>>
}

function SearchBar(props: SearchBarProps) {
    const cityNameEl = useRef<HTMLInputElement>(null);
    const countryNameEl = useRef<HTMLInputElement>(null);
    // const durationEl = useRef<HTMLSelectElement>(null);

    const [showError, setShowError] = useState<boolean>(false);
    const errorMessage = "We couldn't find this city. Please check your input and try again."
    const navigate = useNavigate()

    const fetchData = async () => {
        console.log("About to call backend")
        try {
            const response: AxiosResponse<routeResponseDTO[]> = await axios.post("https://walkbaba.azurewebsites.net/api/openai", {
                city: cityNameEl.current?.value,
                country: countryNameEl.current?.value,
                duration: "1",
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
        navigate(`/routes?=${cityNameEl.current?.value}`);
    }

    const onSubmitSearchRoutes = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("User made a search")
        setShowError(false)
        props.setDisplayMap(false)
        void fetchData();
    }

    return <>
        <div className="container">
            <form onSubmit={onSubmitSearchRoutes} className="row g-3 searchbar">
                <div className="input-group col-sm">
                    <input type="text" className="form-control" placeholder="City" aria-label="City"
                           aria-describedby="basic-addon1" id="cityName" name="cityName" ref={cityNameEl}/>
                </div>
                <div className="input-group col-sm">
                    <input type="text" className="form-control" placeholder="Country" aria-label="Country"
                           aria-describedby="basic-addon1" id="countryName" name="countryName" ref={countryNameEl}/>
                </div>
                {/*<div className="input-group col-sm">*/}
                {/*    <select className="form-select" id="inputGroupSelect04"*/}
                {/*            aria-label="Example select with button addon" ref={durationEl}>*/}
                {/*        <option selected>Duration</option>*/}
                {/*        <option value="1">1</option>*/}
                {/*        <option value="2">2</option>*/}
                {/*        <option value="3">3</option>*/}
                {/*        <option value="4">4</option>*/}
                {/*        <option value="5">5</option>*/}
                {/*    </select>*/}
                {/*</div>*/}
                <button className="btn btn-primary search-button col-auto" type="submit" value="Search">Search</button>
            </form>
            <p>{showError && errorMessage}</p>
        </div>

    </>
}

export default SearchBar