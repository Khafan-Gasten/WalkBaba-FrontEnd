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
            <div className="landingPage-Content">
            <h1 className="title-landingPage">WalkBaba</h1>
            <h5 className="subtitle-landingPage">AI-generated walking routes to discover your city</h5>
            <SearchBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>
            </div>
        </div>
    </>
}

export default LandingPage;