import axios from "axios";
import {SetStateAction} from "react";
import {routeResponseDTO} from "./routeResponseDTO.tsx";

type SearchBarProps = {
    setRouteData: React.Dispatch<SetStateAction<routeResponseDTO[]>>
}

type userRequest = {
    city: string,
    country: string,
    duration: string
}

function SearchBar(props: SearchBarProps) {

    const onSubmitSearchRoutes = async (e: any) => {
        e.preventDefault();
        const request: userRequest = {
            city: e.target.elements.cityName.value.toString(),
            country: e.target.elements.countryName.value.toString(),
            duration: e.target.elements.duration.value.toString()
        }

        const response: routeResponseDTO[] = await axios.post("http://localhost:8080/api/openai",
                request
            )
        props.setRouteData(response);
    }

    return <>
        <form onSubmit={onSubmitSearchRoutes}>
            <label htmlFor="cityName">City: </label>
            <input type="text" id="cityName" name="cityName"/><br/>
            <label htmlFor="countryName">Country: </label>
            <input type="text" id="countryName" name="countryName"/><br/>
            <label htmlFor="duration">Duration: </label>
            <select id="duration" name="duration">
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