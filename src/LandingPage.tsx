import {Dispatch, SetStateAction} from "react";
import {routeResponseDTO} from "./routeResponseDTO.tsx";
import SearchBar from "./SearchBar.tsx";


type SearchBarProps = {
    setRouteData: Dispatch<SetStateAction<routeResponseDTO[] | null>>
    setDisplayMap: Dispatch<SetStateAction<boolean>>
}

function LandingPage(props: SearchBarProps) {

    return <>
        <div className="landingPage">
        <SearchBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>
        </div>
    </>
}

export default LandingPage;