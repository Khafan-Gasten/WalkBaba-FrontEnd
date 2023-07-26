import React, {Dispatch, SetStateAction} from "react";
import {routeResponseDTO} from "./DTOs/routeResponseDTO.tsx";
import SearchBar from "./SearchBar.tsx";



type SearchBarProps = {
    setRouteData: Dispatch<SetStateAction<routeResponseDTO[] | null>>
    setDisplayMap: Dispatch<SetStateAction<boolean>>
}

function LandingPage(props: SearchBarProps) {

    return <>
        <div className="landingPage">
            <div className="landingPage-Content">
                <img src="../src/assets/walkbaba2.png" width="281" height="170"/>
            <h5 className="subtitle-landingPage">AI-generated walking routes to discover your city</h5>
            <SearchBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>
            </div>
        </div>
    </>
}

export default LandingPage;