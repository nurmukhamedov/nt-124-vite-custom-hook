import useFetch from "./useFetch"
const RestCountries = () => {
    const { data, loading, error } = useFetch('https://restcountries.com/v3.1/all');

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }

    console.log(data);
    return (
        <div>RestCountries</div>
    )
}

export default RestCountries