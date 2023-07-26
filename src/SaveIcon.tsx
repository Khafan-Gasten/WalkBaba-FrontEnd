import {useState} from "react";
import axios from "axios";

type  SaveIconProps = {
    fetchSavedRoute :() => void
    routeId: number
    isSaved : boolean
}
type  savingInfo = {
    id: number
    route_id: number

}

const SaveIcon = (props: SaveIconProps) => {

    const localUrl = "http://localhost:8081/api/saveroute";
    const [saved, setSaved] = useState<boolean>(props.isSaved)

    const data: savingInfo = {
        id: 1,
        route_id: props.routeId
    }
    const changeRouteSavingState = async () => {
        console.log(" in call axios")
        console.log(data)
        if (saved) {
            await axios.delete(localUrl, {data})
        } else {
            await axios.post(localUrl, data);
        }
    }
    const saveButtonHandler = (): void => {
        console.log("set click")
        changeRouteSavingState().then(() => setSaved(!saved))
        props.fetchSavedRoute()
    }

    return<>
        {
            saved ?

                <div onClick={saveButtonHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-bookmark" viewBox="0 0 16 16">
                        <path
                            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                    </svg>
                </div> :
                <div onClick={saveButtonHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                        <path
                            d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
                    </svg>
                </div>

        }
    </>
}

export default SaveIcon