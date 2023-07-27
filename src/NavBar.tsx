import SearchBar from "./SearchBar.tsx";
import {Link, useNavigate} from "react-router-dom";
import React, {Dispatch, SetStateAction} from "react";
import {routeResponseDTO} from "./DTOs/routeResponseDTO.tsx";

type NavBarProps = {
    setRouteData: Dispatch<SetStateAction<routeResponseDTO[] | null>>
    setDisplayMap: Dispatch<SetStateAction<boolean>>
}

function NavBar(props: NavBarProps) {
    const navigate = useNavigate()

    const clickHandler = (e) => {
        e.preventDefault()
        navigate("/")
    }

    return (
        <nav>
            <header
                className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom mapgallery-bar">
                <div className="col-md-3 mb-2 mb-md-0">
                    <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <a className="navbar-brand" href="#">
                            <img src="../src/assets/walkbaba.png" width="200"  onClick={clickHandler}/>
                        </a>
                    </a>
                </div>
                <div className="col-md-2 text-end">
                    <Link to={"/savedroutes"}> Saved</Link>
                </div>
            </header>
        </nav>
    )
}

export default NavBar