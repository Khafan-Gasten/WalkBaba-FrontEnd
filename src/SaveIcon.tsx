import {useState} from "react";
import axios from "axios";

type  SaveIconProps = {
    fetchSavedRoute :(arg: number,saveRoute: boolean) => void
    routeId: number
    isSaved : boolean
}
type  savingInfo = {
    id: number
    route_id: number

}

const SaveIcon = ({fetchSavedRoute, routeId, isSaved}: SaveIconProps) => {

    const localUrl = "http://walkbaba.azurewebsites.net/api/saveroute";
    const [saved, setSaved] = useState<boolean>(isSaved)

    const data: savingInfo = {
        id: 1,
        route_id: routeId
    }
    const changeRouteSavingState = async (saved: boolean) => {
        if (saved) {
            await axios.post(localUrl, data);
        } else {
            await axios.delete(localUrl, {data})
        }
    }
    const saveButtonHandler = (): void => {
        setSaved(!saved)
        changeRouteSavingState(!saved)
        fetchSavedRoute(routeId, !saved )
    }

    return<>
        {
            saved?
                <button className={"save_Botton"} onClick={saveButtonHandler}>UnSave</button> :
                <button className={"save_Botton"} onClick={saveButtonHandler}>Save</button>
        }
    </>
}

export default SaveIcon