import {Dispatch, SetStateAction, useEffect, useState} from "react";
import Select, {SingleValue} from "react-select";
import {Country} from "./DTOs/Country.tsx";

type countryProps = {
    selectedCountry : SingleValue<Country> | undefined
    setSelectedCountry :Dispatch<SetStateAction<SingleValue<Country> | undefined>>
}
const CountrySelect = (props: countryProps) => {
    const [countries, setCountries] = useState([]);


    useEffect(() => {
        fetch(
            "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
        )
            .then((response) => response.json())
            .then((data) => {
                setCountries(data.countries);
                props.setSelectedCountry(data.userSelectValue);
            });
    }, []);
    return (
        <div className= "countrySelection">
        <label>Enter a country:</label>
        <Select
            options={countries}
            value={props.selectedCountry}
            onChange={(selectedOption) => props.setSelectedCountry(selectedOption)}
        />
        </div>
    );
};

export default CountrySelect;