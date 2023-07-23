import {WaypointDTO} from "./waypointDTO.tsx";

export type routeResponseDTO = {
    walk_name: string;
    waypoints: WaypointDTO[];
    city: string,
    country: string
    description: string,
    theme: string,
    distance: number,
    durationInMin: number,
    "like": number,
    "dislike": number
}