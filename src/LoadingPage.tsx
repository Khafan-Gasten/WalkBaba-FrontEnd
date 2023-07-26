import "./css/App.css";
import "./css/LoadPage.css"
import Baba from "./assets/com-gif-maker-unscreen.gif"
import Bababack from "./assets/ezgif.com-gif-maker-backwards-Baba.gif"
import Babapink from "./assets/ezgif.com-gif-maker-pink.gif"
import {useEffect, useState} from "react";

type LoadingPageProps = {
    displayMap: boolean
}

function LoadingPage(props: LoadingPageProps) {
    const [index, setIndex] = useState<number>(0);

    useEffect(()=> {
        setIndex(0)
        incrementIndex()
    },[props.displayMap])

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms*1000));

    const incrementIndex = async () => {
        for (let i = 1; i < 5; i++) {
            await sleep(12)
            setIndex(i)
        }
    }

    const loadingMessage1 = "We are scouring the internet to find the very best land marks just for you! The internet's pretty big, this may take a minute!"
    const loadingMessage2 = "Did you know WalkBaba gives 80% of all profits to charity?! What a day you're having! Planning a fantastic walk and saving lives - sight seeing has never been so productive!"
    const loadingMessage3 = "Now using our cutting edge AI to optimize the routes until they are perfect! Only the best for a WalkBaba babe."
    const loadingMessage4 = "Did you know WalkBaba was founded in 2023 by Mahboubeh Sheidaei, Saghi Paknemat, Cornelis Verkade and Max Burrows, emphatically illustrating that Iran and Western Europe can get along."
    const loadingMessage5 = "Just like Baba below we are almost there! Give us a couple more seconds I promise you won't be dissapointed!"
    const loadingMessages: string[] = [loadingMessage1, loadingMessage2, loadingMessage3, loadingMessage4, loadingMessage5]

    return (
        <><div className="loading-background">
            <main className="lp-container">
                <h3 className="loadingMessages">{loadingMessages[index]}</h3>
                <div className="gif-container">
                    <img src={Baba} className="frame"/>
                    <img src={Bababack} className="frame2"/>
                    <img src={Babapink} className="frame3"/>
                    {/*<iframe src="assets/ezgif.com-gif-maker-bg.gif" width="100%" height="100%"*/}
                    {/*        frameBorder="0" className="giphy-embed frame-end" allowFullScreen></iframe>*/}
                </div>

            </main>
        </div>
        </>
    );
}

export default LoadingPage