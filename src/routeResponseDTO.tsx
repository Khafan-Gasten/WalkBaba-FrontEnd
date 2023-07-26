import {WaypointDTO} from "./waypointDTO.tsx";
import {ExportLinkDTO} from "./exportLinkDTO.tsx";

export type routeResponseDTO = {
    walk_name: string,
    route_id : number,
    city: string,
    country: string
    description: string,
    theme: string,
    distance: number,
    durationInMin: number,
    like: number,
    dislike: number ,
    waypoints: WaypointDTO[]
    exportLinks : ExportLinkDTO
}