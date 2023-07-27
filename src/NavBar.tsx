import {Link, useNavigate} from "react-router-dom";
import WalkBabaLogo from "/assets/walkbaba.png"
import KingWillem from "/assets/king-willy.jpg"

function NavBar() {
    const navigate = useNavigate()

    const clickHandler = (e: any) => {
        e.preventDefault()
        navigate("/")
    }

    return (
        <nav>
            <header
                className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4 border-bottom mapgallery-bar">
                <div className="col-md-3 mb-2 mb-md-0">
                    <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <a className="navbar-brand" href="#">
                            <img src={WalkBabaLogo} width="200"  onClick={clickHandler}/>
                        </a>
                    </a>
                </div>


                <div className="col-md-2 text-end saved-routes-link">
                    <Link to={"/savedroutes"} className={"saved-routes-button"}> Saved Routes</Link>
                    <a href={"/savedroutes"}><img className="profile-photo" src={KingWillem}/> </a>
                </div>

            </header>
        </nav>
    )
}

export default NavBar