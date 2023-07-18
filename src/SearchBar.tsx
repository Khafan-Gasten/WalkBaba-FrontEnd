import axios, {AxiosResponse} from "axios";
import React, {Dispatch, SetStateAction, useRef, useState} from "react";
import {routeResponseDTO} from "./routeResponseDTO.tsx";

type SearchBarProps = {
    setRouteData: Dispatch<SetStateAction<routeResponseDTO[] | null>>
    setDisplayMap: Dispatch<SetStateAction<boolean>>
}

function SearchBar(props: SearchBarProps) {
    const cityNameEl = useRef<HTMLInputElement>(null);
    const countryNameEl = useRef<HTMLInputElement>(null);
    const durationEl = useRef<HTMLSelectElement>(null);

    const [showError, setShowError] = useState<boolean>(false);
    const errorMessage = "We couldn't find this city. Please check your input and try again."

    const fetchData = async () => {
        try {
            const response: AxiosResponse<routeResponseDTO[]> = await axios.post("https://walkbaba.azurewebsites.net/api/openai", {
                city: cityNameEl.current?.value,
                country: countryNameEl.current?.value,
                duration: durationEl.current?.value,
            });
            console.log(response.data);
            props.setRouteData(response.data);
            props.setDisplayMap(true)
        } catch (err) {
            if (err instanceof Error) {
                setShowError(true)
                console.error(err)
            }
        }
    }

    const onSubmitSearchRoutes = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowError(false)
        props.setDisplayMap(false)
        void fetchData();
    }

    return <>
        <form onSubmit={onSubmitSearchRoutes}>
            <label htmlFor="cityName">City: </label>
            <input type="text" id="cityName" name="cityName" ref={cityNameEl}/><br/>
            <label htmlFor="countryName">Country: </label>
            <input type="text" id="countryName" name="countryName" ref={countryNameEl}/><br/>
            <label htmlFor="duration">Duration: </label>
            <select id="duration" name="duration" ref={durationEl}>
                <option value="1">1 hour</option>
                <option value="2">2 hours</option>
                <option value="3">3 hours</option>
                <option value="4">4 hours</option>
                <option value="5">5 hours</option>
            </select>
            <input type="submit" value="Search"/>
        </form>
        <p>{showError && errorMessage}</p>
    </>
}

export default SearchBar