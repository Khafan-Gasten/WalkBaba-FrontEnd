import "./App.css";
import ImageGallery, {ReactImageGalleryItem} from 'react-image-gallery';
import {useEffect, useState} from "react";



type DisplayImagesProps = {
    imageList: string[]
}

function DisplayImages(props: DisplayImagesProps) {
    const [renderImages, setRenderImages] = useState<ReactImageGalleryItem[]>([])

    useEffect(() => {
        buildReactImageGalley()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.imageList]);
    const buildReactImageGalley = () => {
        console.log("Made it in here. Ye boi")
        const imageArray: ReactImageGalleryItem[] = []
        for (const image of props.imageList) {
            const imageItem: ReactImageGalleryItem = {
                "original": image,
                "thumbnail": image.replace("maxwidth=500", "maxwidth=100"),
                "description": `Awesome Image`
            }
            imageArray.push(imageItem);
        }
        console.log(imageArray)
        setRenderImages(imageArray)
    }

    // const images = [
    //     {
    //         original:
    //             "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photo_reference=Aaw_FcLBbIN82L3Ud61YCxBw0aUaHhr6jef7Ayg2SP_OUvQOsNCMkBh-7DrdaK7isHlSmX-G76jGgae-Y-pZeRf2Kv__hmRoEmMJxDi8nH9t3wrM6VMqOM9VjyqQ_Ypz3RzuO6UzuTL0TJr3HrSNA3SnP7DnWqTsp6_oqJgZhKp47os6480h&key=AIzaSyBmOpstO2144GQzwOWrWL9NQLvQ5oyE_kw",
    //         thumbnail:
    //             "https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photo_reference=Aaw_FcLBbIN82L3Ud61YCxBw0aUaHhr6jef7Ayg2SP_OUvQOsNCMkBh-7DrdaK7isHlSmX-G76jGgae-Y-pZeRf2Kv__hmRoEmMJxDi8nH9t3wrM6VMqOM9VjyqQ_Ypz3RzuO6UzuTL0TJr3HrSNA3SnP7DnWqTsp6_oqJgZhKp47os6480h&key=AIzaSyBmOpstO2144GQzwOWrWL9NQLvQ5oyE_kw",
    //         description: "Description 1",
    //     },
    //     {
    //         original:
    //             "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photo_reference=Aaw_FcID2G4nVaTTNLMdjXf8FCJUJvkNG-leX_qJWjkD-wrZlvqiEA7Cw3tE0WIIL2i82wRqzGtKaFSkkImB61N0w2cDQlXFgeZXfadplRCmk4Z9zV0Ew82vyC19HPkhKx3rl6q4k4bfC43MtLjhXYWMjz41Jk6vAuZCpTZvoLJ8_TRpi7xN&key=AIzaSyBmOpstO2144GQzwOWrWL9NQLvQ5oyE_kw",
    //         thumbnail:
    //             "https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photo_reference=Aaw_FcID2G4nVaTTNLMdjXf8FCJUJvkNG-leX_qJWjkD-wrZlvqiEA7Cw3tE0WIIL2i82wRqzGtKaFSkkImB61N0w2cDQlXFgeZXfadplRCmk4Z9zV0Ew82vyC19HPkhKx3rl6q4k4bfC43MtLjhXYWMjz41Jk6vAuZCpTZvoLJ8_TRpi7xN&key=AIzaSyBmOpstO2144GQzwOWrWL9NQLvQ5oyE_kw",
    //         description: "Description 2",
    //     },
    //     {
    //         original:
    //             "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photo_reference=Aaw_FcJ2kaVUs3p_ZXO6k89DAAiOuS5rqIH_037w-Pj-xcHnJqokAi_6STzACqQv74iy-66_wgGLkV9--b5td5CmEJgfufFgQ2N7d9EeNG5ZGAYNuRZa5u1yytmFO3gBWHzcWxfoU64rYNRR3Z3bwQhZ_ChO-5MZ2ZYx_6OYE5-8qCOqgM1J&key=AIzaSyBmOpstO2144GQzwOWrWL9NQLvQ5oyE_kw",
    //         thumbnail:
    //             "https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photo_reference=Aaw_FcJ2kaVUs3p_ZXO6k89DAAiOuS5rqIH_037w-Pj-xcHnJqokAi_6STzACqQv74iy-66_wgGLkV9--b5td5CmEJgfufFgQ2N7d9EeNG5ZGAYNuRZa5u1yytmFO3gBWHzcWxfoU64rYNRR3Z3bwQhZ_ChO-5MZ2ZYx_6OYE5-8qCOqgM1J&key=AIzaSyBmOpstO2144GQzwOWrWL9NQLvQ5oyE_kw",
    //         description: "Description 3",
    //     },
    //     {
    //         original:
    //             "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photo_reference=Aaw_FcLFn5mwNobLrgm8EFHvZIaBTr0WZZ1TCbs5wRIgGubxnU5SvfYNc59SWdeI4yQJAzKjOAuxm3-CoODbY2yCL_T2lRUXn8FuL6DITQZheTNKW5jt-vQVI8bJyCk2zh1DxHtvfcgTRdX2vNYEuiR8doL68V9ezau_0no_eQeh7wuhIIUg&key=AIzaSyBmOpstO2144GQzwOWrWL9NQLvQ5oyE_kw",
    //         thumbnail:
    //             "https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photo_reference=Aaw_FcLFn5mwNobLrgm8EFHvZIaBTr0WZZ1TCbs5wRIgGubxnU5SvfYNc59SWdeI4yQJAzKjOAuxm3-CoODbY2yCL_T2lRUXn8FuL6DITQZheTNKW5jt-vQVI8bJyCk2zh1DxHtvfcgTRdX2vNYEuiR8doL68V9ezau_0no_eQeh7wuhIIUg&key=AIzaSyBmOpstO2144GQzwOWrWL9NQLvQ5oyE_kw",
    //         description: "Description 4",
    //     },
    //     {
    //         original:
    //             "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photo_reference=Aaw_FcKPK6Wf2xRchRGzM7EJJl6zVLjx_H5mcnNcFEFjT49HQuX_JUnnVDePTXnmImKWWDjnPnWTSqf18qY8umsDZY7g8nNA197Knp75okSm-GqfTrdgOTfjAiZkwdR_-9DQz8UPCfW7hCmFyYiM7brgCZFOE5gmeAJxnlUwxshxNR8UQ1E&key=AIzaSyBmOpstO2144GQzwOWrWL9NQLvQ5oyE_kw",
    //         thumbnail:
    //             "https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photo_reference=Aaw_FcKPK6Wf2xRchRGzM7EJJl6zVLjx_H5mcnNcFEFjT49HQuX_JUnnVDePTXnmImKWWDjnPnWTSqf18qY8umsDZY7g8nNA197Knp75okSm-GqfTrdgOTfjAiZkwdR_-9DQz8UPCfW7hCmFyYiM7brgCZFOE5gmeAJxnlUwxshxNR8UQ1E&key=AIzaSyBmOpstO2144GQzwOWrWL9NQLvQ5oyE_kw",
    //         description: "Description 5",
    //     }
    // ]
    // const images = [
    //     {
    //         original:
    //             "https://images.pexels.com/photos/831889/pexels-photo-831889.jpeg?auto=compress&cs=tinysrgb&w=800",
    //         thumbnail:
    //             "https://images.pexels.com/photos/831889/pexels-photo-831889.jpeg?auto=compress&cs=tinysrgb&w=200",
    //         description: "Description 1",
    //     },
    //     {
    //         original:
    //             "https://images.pexels.com/photos/1683492/pexels-photo-1683492.jpeg?auto=compress&cs=tinysrgb&w=800",
    //         thumbnail:
    //             "https://images.pexels.com/photos/1683492/pexels-photo-1683492.jpeg?auto=compress&cs=tinysrgb&w=200",
    //         description: "Description 2",
    //     },
    //     {
    //         original:
    //             "https://images.pexels.com/photos/1630128/pexels-photo-1630128.jpeg?auto=compress&cs=tinysrgb&w=800",
    //         thumbnail:
    //             "https://images.pexels.com/photos/1630128/pexels-photo-1630128.jpeg?auto=compress&cs=tinysrgb&w=200",
    //         description: "Description 3",
    //     },
    //     {
    //         original:
    //             "https://images.pexels.com/photos/2273664/pexels-photo-2273664.jpeg?auto=compress&cs=tinysrgb&w=800",
    //         thumbnail:
    //             "https://images.pexels.com/photos/2273664/pexels-photo-2273664.jpeg?auto=compress&cs=tinysrgb&w=200",
    //         description: "Description 4",
    //     },
    //     {
    //         original:
    //             "https://images.pexels.com/photos/572740/pexels-photo-572740.jpeg?auto=compress&cs=tinysrgb&w=800",
    //         thumbnail:
    //             "https://images.pexels.com/photos/572740/pexels-photo-572740.jpeg?auto=compress&cs=tinysrgb&w=200",
    //         description: "Description 5",
    //     },
    // ];

    return (
        <>
         {/*<ImageGallery items={images} />*/}
         {/*   <ImageGallery*/}
         {/*       items={images}*/}
         {/*       showThumbnails={true}*/}
         {/*       showFullscreenButton={true}*/}
         {/*       autoPlay={false}*/}
         {/*       thumbnailPosition="left"*/}
         {/*   />*/}
            <div className="images">
                <ImageGallery
                    lazyLoad={true}
                    thumbnailPosition={"left"}
                    items={renderImages}
                    useBrowserFullscreen={false}
                    showBullets={false}
                    autoPlay={false}
                ></ImageGallery>
            </div>
        </>
        )
}
export default DisplayImages