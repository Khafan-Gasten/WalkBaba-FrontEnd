import React, {useState} from 'react'
import { useCallback } from "react";
import "./App.css";


import {
    GoogleMap,
    useJsApiLoader,
    DirectionsRenderer,
} from '@react-google-maps/api';


const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 52.2,
    lng: 4.4
};

type MapBoardProps = {
    routeWaypoints: string[]
}

function Map(props: MapBoardProps) {

        const onContentCardSimpleArticleCoContainer1Click = useCallback(() => {
            // Please sync "⟶ [Maps] View #2" to the project
        }, []);

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBmOpstO2144GQzwOWrWL9NQLvQ5oyE_kw"
    });
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);

    const onLoad = React.useCallback(function callback(map: google.maps.Map | null) {
        void calculateRoute()
        setMap(map)
    }, [])

    async function calculateRoute() {
        const routeWaypoints = props.routeWaypoints;

        if (!routeWaypoints) {
            return
        }
        //Maybe change the behaviour of this section
        const origin = routeWaypoints[0]
        const dest = routeWaypoints[routeWaypoints.length - 1]
        const waypoints: object[] = []
        for (let i = 1; i < routeWaypoints.length - 1; i++) {
            waypoints.push({
                location: routeWaypoints[i],
                stopover: true
            })
        }
        // console.log(origin)
        // console.log(dest)
        // console.log(waypoints)

        console.log("About to query google maps")

        const directionsService = new window.google.maps.DirectionsService();
        const results: google.maps.DirectionsResult = await directionsService.route({
            origin: origin,
            destination: dest,
            optimizeWaypoints: true,
            waypoints: waypoints,
            travelMode: google.maps.TravelMode.WALKING
        })
        // console.log(results);
        console.log("received response from maps")
        setDirectionsResponse(results)
        // setDistance(results.routes[0].legs[0].distance.text)
        // setDuration(results.routes[0].legs[0].duration.text)
    }

    return isLoaded ? (
        <>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
            onLoad={() => onLoad(map)}
        >
            {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse}/>
            )}
        </GoogleMap>
        <div className="maps-view-1">
            <div className="filter-bar">
                <div className="bg" />
                <div className="componentdropdownround-squar">
                    <div className="background9" />
                    <div className="content9">
                        <div className="label9">City, country</div>
                        <img
                            className="filledchevron-down-xs-quite-icon1"
                            alt=""
                            src="/filledchevrondownxsquite1.svg"
                        />
                    </div>
                </div>
                <div className="componentdropdownround-squar1">
                    <div className="background9" />
                    <div className="content10">
                        <div className="label9">Theme</div>
                        <img
                            className="filledchevron-down-xs-quite-icon1"
                            alt=""
                            src="/filledchevrondownxsquite1.svg"
                        />
                    </div>
                </div>
                <img className="search-s-dark-icon2" alt="" src="/searchsdark2.svg" />
            </div>
            <div className="barnavigationlightleft1">
                <div className="background11" />
                <div className="miscdividerdark">
                    <div className="divider1" />
                </div>
                <div className="content11">
                    <img className="bell-s-dark-icon" alt="" src="/bellsdark.svg" />
                    <div className="grid-s-dark">
                        <img className="bounds-icon6" alt="" src="/bounds1.svg" />
                        <div className="grid">
                            <div className="rectangle-path" />
                            <div className="rectangle-path1" />
                            <div className="rectangle-path2" />
                            <div className="rectangle-path3" />
                        </div>
                    </div>
                    <img
                        className="arrow-left-s-dark-icon"
                        alt=""
                        src="/arrowleftsdark.svg"
                    />
                    <div className="right-action1">{`  `}</div>
                    <div className="title3">
                        <div className="title4">Headphones</div>
                        <div className="subtitle-small9">subtitle</div>
                    </div>
                </div>
            </div>
            <img
                className="icon-day-sleet-storm"
                alt=""
                src="/-icon-day-sleet-storm.svg"
            />
            <div className="barstatuslightiphonex1">
                <img className="top-notch-icon1" alt="" src="/topnotch.svg" />
                <div className="carrier1">14:30</div>
                <div className="battery1">
                    <div className="border1" />
                    <img className="cap-icon1" alt="" src="/cap1.svg" />
                    <div className="capacity1" />
                </div>
                <img className="wifi-icon1" alt="" src="/wifi.svg" />
                <img
                    className="cellular-connection-icon1"
                    alt=""
                    src="/cellular-connection.svg"
                />
            </div>
            <div className="contentcard-simple-article-co">
                <img className="background-icon2" alt="" src="/background1.svg" />
                <img className="image-icon1" alt="" src="/image1@2x.png" />
                <div className="location1">Haifa</div>
                <div className="name1">Historic Rotterdam</div>
                <div className="title5">
                    It’s hard to say when in our lives each of us become aware of this
                    thing called “astronomy”. It’s hard to say when in our lives each
                    of...
                </div>
                <img className="profile-icon1" alt="" src="/profile1.svg" />
            </div>
            <div className="barbottomlightw-labels">
                <img className="background-icon3" alt="" src="/-background1.svg" />
                <div className="navigationitems1">
                    <div className="barbottomnavtab-11">
                        <div className="barbottomnavtab-item8">
                            <div className="barbottomnavtab-item8" />
                            <div className="content12">
                                <div className="navigation-subtitle7">
                                    <div className="subtitle-small10">item label</div>
                                </div>
                                <img
                                    className="home-s-dark-icon2"
                                    alt=""
                                    src="/homesdark2.svg"
                                />
                            </div>
                            <div className="componentbadgecount-label-le7">
                                <div className="label11">10</div>
                            </div>
                        </div>
                    </div>
                    <div className="barbottomnavtab-11">
                        <div className="barbottomnavtab-item8">
                            <div className="barbottomnavtab-item8" />
                            <div className="content12">
                                <div className="navigation-subtitle7">
                                    <div className="subtitle-small10">item label</div>
                                </div>
                                <img
                                    className="home-s-dark-icon2"
                                    alt=""
                                    src="/searchsdark3.svg"
                                />
                            </div>
                            <div className="componentbadgecount-label-le7">
                                <div className="label11">10</div>
                            </div>
                        </div>
                    </div>
                    <div className="barbottomnavtab-31">
                        <div className="barbottomnavtab-item8">
                            <div className="barbottomnavtab-item8" />
                            <div className="content12">
                                <div className="navigation-subtitle7">
                                    <div className="subtitle-small10">item label</div>
                                </div>
                                <img
                                    className="home-s-dark-icon2"
                                    alt=""
                                    src="/shoppingcartsdark2.svg"
                                />
                            </div>
                            <div className="componentbadgecount-label-le9">
                                <div className="label11">10</div>
                            </div>
                        </div>
                    </div>
                    <div className="barbottomnavtab-11">
                        <div className="barbottomnavtab-item8">
                            <div className="barbottomnavtab-item8" />
                            <div className="content12">
                                <div className="navigation-subtitle7">
                                    <div className="subtitle-small10">item label</div>
                                </div>
                                <img
                                    className="home-s-dark-icon2"
                                    alt=""
                                    src="/heartsdark2.svg"
                                />
                            </div>
                            <div className="componentbadgecount-label-le7">
                                <div className="label11">10</div>
                            </div>
                        </div>
                    </div>
                    <div className="barbottomnavtab-11">
                        <div className="barbottomnavtab-item8">
                            <div className="barbottomnavtab-item8" />
                            <div className="content12">
                                <div className="navigation-subtitle7">
                                    <div className="subtitle-small10">item label</div>
                                </div>
                                <img
                                    className="contentimageprofilecircle-icon2"
                                    alt=""
                                    src="/contentimageprofilecircle2.svg"
                                />
                            </div>
                            <div className="componentbadgecount-label-le11">
                                <div className="label11">10</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                className="barbottomlightiphonex-icon"
                alt=""
                src="/barbottomlightiphonex.svg"
            />
            <img className="user-avatar-icon" alt="" src="/useravatar@2x.png" />
            <div
                className="contentcard-simple-article-co1"
                onClick={onContentCardSimpleArticleCoContainer1Click}
            >
                <img className="background-icon4" alt="" src="/background1.svg" />
                <img className="image-icon1" alt="" src="/image1@2x.png" />
                <div className="location1">Haifa</div>
                <div className="name1">Historic Rotterdam</div>
                <div className="title5">
                    It’s hard to say when in our lives each of us become aware of this
                    thing called “astronomy”. It’s hard to say when in our lives each
                    of...
                </div>
                <img className="profile-icon1" alt="" src="/profile2.svg" />
            </div>
            <img className="bookmark-s-dark-icon1" alt="" src="/bookmarksdark1.svg" />
            <div className="label16">(60 min)</div>
            <div className="name3">27 c</div>
        </div>

        </>
    ) : <></>
}

export default Map