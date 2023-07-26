import {useRef, useEffect, Dispatch, SetStateAction} from "react";
import {Country} from "./Country.tsx";

type countryProps = {
    selectedCountry : Country | undefined
    setSelectedCountry :Dispatch<SetStateAction<Country | undefined>>
    selectedCity : string
    setSelectedCity :Dispatch<SetStateAction<string>>
}
const CitySelectAutoComplete = (props: countryProps) => {
    const autoCompleteRef = useRef();
    const inputRef = useRef<HTMLInputElement | undefined>();
    const options = {
        componentRestrictions: { country : props.selectedCountry?.value },
        fields: ["name"],
        types: ['(cities)']
    };

    useEffect(() => {
        console.log(options.componentRestrictions.country)
        if(props.selectedCountry) {
            if (!autoCompleteRef.current) {
                autoCompleteRef.current = new window.google.maps.places.Autocomplete(
                    inputRef.current,
                    options)
                //
                // props.setSelectedCity(inputRef.current?.value)
                // console.log(props.selectedCity)

                autoCompleteRef.current.addListener("place_changed", async function () {
                    const place = await autoCompleteRef.current.getPlace();
                    props.setSelectedCity(inputRef.current?.value)

                    console.log("Selected city = " + props.selectedCity)

                    console.log({ place });
                })
        } else {
                const countryRestriction = { country: props.selectedCountry.value };
                autoCompleteRef.current.setComponentRestrictions(countryRestriction);
            }
        }
    }, [props.selectedCountry, options]);
    return (
        <div>
            <label className="searchLabel">Enter a city: </label> <br/>
            <input className="css-13cymwt-control" ref={inputRef} placeholder={"Select from dropdown"} />
        </div>
    );
};
export default CitySelectAutoComplete;