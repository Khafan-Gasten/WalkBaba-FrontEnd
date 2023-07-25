import {useState} from "react";
import axios, {AxiosResponse} from "axios";
import {routeResponseDTO} from "./routeResponseDTO.tsx";

type  SaveIconProps ={
    routeId : number
}

const  SaveIcon = (props : SaveIconProps)=>{

    const [saved  , setSaved] =  useState<boolean>(false)

    const saveRouteForUser = () =>{
        try {
            const response: AxiosResponse<routeResponseDTO> = await axios.post(localUrl, {
                id: 1,
                : countryNameEl.current?.value,
                duration: "1",
            });
            console.log(response.data);
            console.log("Received data from backend")
            props.setRouteData(response.data);
            props.setDisplayMap(true)
        }
        setSaved( !saved)

        console.log()
    }


    return <>
     <button className={"save_Botton"} onClick={saveRouteForUser}></button>
    </>
}

export default  SaveIcon