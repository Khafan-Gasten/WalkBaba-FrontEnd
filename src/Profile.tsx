
import "./App.css";
//
// type ProfileProps = {
//
// }

function Profile() {




    return (
        <>
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <img className="user_profile"/>
                            <h1 className="fw-light">ypur saved tour in WalkBaba</h1>
                        </div>
                    </div>
                </section>

                <div className="album py-5 bg-body-tertiary">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {/*{*/}
                            {/*    Array.from(Array(props.routeData?.length).keys()).map((index: number) => (*/}
                            {/*        <div className="col">*/}
                            {/*            <MapBoard routeData={props.routeData![index]}/>*/}
                            {/*        </div>*/}
                            {/*    ))*/}
                            {/*}*/}
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}
export default Profile