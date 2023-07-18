import axios from "axios";
import React, {Dispatch, SetStateAction, useRef} from "react";
import {routeResponseDTO} from "./routeResponseDTO.tsx";

type SearchBarProps = {
    setRouteData: Dispatch<SetStateAction<routeResponseDTO[]|null>>
    setDisplayMap: Dispatch<SetStateAction<boolean>>
}

type userRequest = {
    city: string | undefined,
    country: string | undefined,
    duration: string | undefined
}

function SearchBar(props: SearchBarProps) {

    const cityNameEl = useRef<HTMLInputElement>(null);
    const countryNameEl = useRef<HTMLInputElement>(null);
    const durationEl = useRef<HTMLSelectElement>(null);


    const onSubmitSearchRoutes = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const request: userRequest = {
            city: cityNameEl.current?.value,
            country: countryNameEl.current?.value,
            duration: durationEl.current?.value,
        }

        const response: routeResponseDTO[] = (await axios.post("http://localhost:8080/api/openai",
                request
            )).data;
        console.log(response);
        props.setRouteData(response);
        props.setDisplayMap(true)
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
    </>
}



export default SearchBar