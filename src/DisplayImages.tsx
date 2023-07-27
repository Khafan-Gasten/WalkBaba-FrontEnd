import "./css/App.css";
import "./css/DisplayImages.css"
import ImageGallery, {ReactImageGalleryItem} from 'react-image-gallery';
import {useEffect, useState} from "react";



type DisplayImagesProps = {
    imageList: string[]
    waypointName : string
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
                "description": `${props.waypointName.split(",")[0]}`
            }
            imageArray.push(imageItem);
        }
        console.log(imageArray)
        setRenderImages(imageArray)
    }



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
                    items={renderImages}
                    lazyLoad={true}
                    thumbnailPosition={"bottom"}
                    useBrowserFullscreen={true}
                    showBullets={true}
                    autoPlay={false}
                ></ImageGallery>
            </div>
        </>
        )
}
export default DisplayImages