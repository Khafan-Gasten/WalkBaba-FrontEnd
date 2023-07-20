import {WaypointDTO} from "./waypointDTO.tsx";

export type routeResponseDTO = {
    walk_name: string;
    duration: string;
    waypoints: WaypointDTO[];
    description: string;
    distance: string
}