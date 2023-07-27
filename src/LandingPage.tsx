import  {Dispatch, SetStateAction} from "react";
import {routeResponseDTO} from "./DTOs/routeResponseDTO.tsx";
import SearchBar from "./SearchBar.tsx";
import {Link} from "react-router-dom";



type SearchBarProps = {
    setRouteData: Dispatch<SetStateAction<routeResponseDTO[] | null>>
    setDisplayMap: Dispatch<SetStateAction<boolean>>
}

function LandingPage(props: SearchBarProps) {

    return <>
        <div className="landingPage">
            <div className="landingPage-Content">
                <img src="./assets/walkbaba-first2.png" width="300" height="100" box-shadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"/>
            <h5 className="subtitle-landingPage">AI-generated walking routes to discover your city</h5>
            <SearchBar setRouteData={props.setRouteData} setDisplayMap={props.setDisplayMap}/>
                <Link to={"/savedroutes"}> Saved Routes</Link>

            </div>
        </div>
    </>
}

export default LandingPage;