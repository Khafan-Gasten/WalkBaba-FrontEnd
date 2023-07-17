import axios from "axios";

function SearchBar() {

    const onSubmitSearchRoutes = async (e : any) => {
        e.preventDefault();

        await axios.post("http://localhost:8080/api/openai",
            [
                {
                    "city": e.target.elements.cityName.value,
                    "duration" : e.target.elements.duration.value,
                },]
            )
    }

    return <>
        <form onSubmit={onSubmitSearchRoutes}>
            <label htmlFor="cityName">City: </label>
            <input type="text" id="cityName" name="cityName"/><br/>
            <label htmlFor="duration">Duration: </label>
            <select id="duration" name="duration">
                <option value="1">1 hour</option>
                <option value="2">2 hours</option>
                <option value="3">3 hours</option>
                <option value="4">4 hours</option>
                <option value="5">5 hours</option>
            </select>
            <input type="submit" value="Search"/>
        </form>
    </>
}



export default SearchBar