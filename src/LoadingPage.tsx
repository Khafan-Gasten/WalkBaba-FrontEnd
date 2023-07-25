import "./App.css";
import "./LoadPage.css"
import Baba from "./assets/ezgif.com-gif-maker.gif"

type LoadingPageProps = {
    displayMap: boolean
}

function LoadingPage(props: LoadingPageProps) {
    return (
        <>
            <main>
                <p>Hello, hello I rendered the loading page</p>
                <div className="gif-container">
                    <img src={Baba} className="frame"/>
                    {/*<iframe src="assets/ezgif.com-gif-maker.gif" width="100%" height="100%"*/}
                    {/*        frameBorder="0" className="giphy-embed frame-end" allowFullScreen></iframe>*/}
                </div>

            </main>
        </>
    );
}

export default LoadingPage