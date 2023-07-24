import {useRef, useEffect, Dispatch, SetStateAction} from "react";
import {Country} from "./Country.tsx";
import {components} from "react-select";

type countryProps = {
    selectedCountry : Country | undefined
    setSelectedCountry :Dispatch<SetStateAction<Country | undefined>>
}
const AutoComplete = (props: countryProps) => {
    const autoCompleteRef = useRef();
    const inputRef = useRef<HTMLInputElement | undefined>();
    const options = {
        componentRestrictions: { country : props.selectedCountry?.value },
        fields: ["name"],
        types: ['(cities)']
    };
    useEffect(() => {
        console.log(options.componentRestrictions.country)
        console.log(autoCompleteRef.current)
        if(props.selectedCountry) {
            if (!autoCompleteRef.current) {
                autoCompleteRef.current = new window.google.maps.places.Autocomplete(
                    inputRef.current,
                    options)

                autoCompleteRef.current.addListener("place_changed", async function () {
                    const place = await autoCompleteRef.current.getPlace();
                    console.log({ place });
            })
        } else {
                const countryRestriction = { country: props.selectedCountry.value };
                autoCompleteRef.current.setComponentRestrictions(countryRestriction);
            }
        }
    }, [props.selectedCountry]);
    return (
        <div>
            <label>Enter a city: </label>
            <input ref={inputRef} />
        </div>
    );
};
export default AutoComplete;