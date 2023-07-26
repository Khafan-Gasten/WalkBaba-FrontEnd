import "./css/App.css";
import "./css/LoadPage.css"
import Baba from "./assets/com-gif-maker-unscreen.gif"

type LoadingPageProps = {
    displayMap: boolean
}

function LoadingPage(props: LoadingPageProps) {

    console.log(props.displayMap)
    const loadingMessage1 = "We are scouring the internet to find the very best land marks just for you! The internet's pretty big, this may take a minute!"
    const loadingMessage2 = "Did you know WalkBaba gives 80% of all profits to charity?! What a day you're having! Planning a fantastic walk and saving lives - sight seeing has never been so productive!"
    const loadingMessage3 = "Now using our cutting edge AI to optimize the routes until they are perfect! Only the best for a WalkBaba babe."
    const loadingMessage4 = "Did you know WalkBaba was founded in 2023 by Mahboubeh Sheidaei, Saghi Paknemat, Cornelis Verkade and Max Burrows, emphatically illustrating that Iran and Western Europe can get along."
    const loadingMessage5 = "Just like Baba below we are almost there! Give us a couple more seconds I promise you won't be dissapointed!"
    const loadingMessages: string[] = [loadingMessage1, loadingMessage2, loadingMessage3, loadingMessage4, loadingMessage5]
    console.log(loadingMessages)
    return (
        <><div className="loading-background">
            <main>
                {/*<p>{loadingMessage}</p>*/}
                <div className="gif-container">
                    <img src={Baba} className="frame"/>
                    {/*<iframe src="assets/ezgif.com-gif-maker.gif" width="100%" height="100%"*/}
                    {/*        frameBorder="0" className="giphy-embed frame-end" allowFullScreen></iframe>*/}
                </div>

            </main>
        </div>
        </>
    );
}

export default LoadingPage