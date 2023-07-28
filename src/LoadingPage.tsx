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
        void incrementIndex()
    },[props.displayMap])

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms*1000));

    const incrementIndex = async () => {
        for (let i = 1; i < 5; i++) {
            await sleep(12)
            setIndex(i)
        }
    }

    console.log(props.displayMap)
    const loadingMessage1 = "We are scouring the internet to find the very best land marks just for you! The internet's pretty big, this may take a minute!"
    const loadingMessage2 = "Did you know WalkBaba gives 98% of all profits to charity?! What a day you're having! Planning a fantastic walk and saving lives - sight seeing has never been so productive!"
    const loadingMessage3 = "Now using our cutting edge AI to optimize the routes until they are perfect! Only the best for a WalkBaba globetrotter."
    const loadingMessage4 = "Did you know WalkBaba was founded in 2023 by Mahboubeh Sheidaei, Saghi Paknemat, Cornelis Verkade and Max Burrows, emphatically illustrating that Iran and Western Europe can get along."
    const loadingMessage5 = "Just like Baba below we are almost there! We hope you love our routes as much as we do, and remember: WALK BABA!!!"
    const loadingMessages: string[] = [loadingMessage1, loadingMessage2, loadingMessage3, loadingMessage4, loadingMessage5]
    console.log(loadingMessages)
    return (
        <><div className="loading-background">
            <main className="lp-container">
                <p className="loadingMessages">{loadingMessages[index]}</p>
                <img src={Babapink} className="frame3"/>
                <img src={Bababack} className="frame2"/>
                <img src={Baba} className="frame"/>
                <img src={Baba} className="frame4"/>
            </main>
        </div>
        </>
    );
}

export default LoadingPage
