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
        setSaved(!saved)
        props.fetchSavedRoute(props.routeId, saved )
        changeRouteSavingState()
    }

    return<>
        {
            saved ?
                <button className={"save_Botton"} onClick={saveButtonHandler}>UnSave</button> :
                <button className={"save_Botton"} onClick={saveButtonHandler}>Save</button>
        }
    </>
}

export default SaveIcon