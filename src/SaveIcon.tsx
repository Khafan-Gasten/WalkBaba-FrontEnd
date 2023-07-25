import {useState} from "react";
import axios, {AxiosResponse} from "axios";
import {routeResponseDTO} from "./routeResponseDTO.tsx";

type  SaveIconProps ={
    routeId : number
}

const  SaveIcon = (props : SaveIconProps)=>{

    const [saved  , setSaved] =  useState<boolean>(false)

    const saveRouteForUser = () =>{

    }


    return <>
     <button className={"save_Botton"} onClick={saveRouteForUser}></button>
    </>
}

export default  SaveIcon