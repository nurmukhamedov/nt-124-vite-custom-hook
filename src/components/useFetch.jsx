import { useState, useEffect } from "react"
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const myData = await response.json();
            if (response.status !== 200) {
                setError(myData.status_message + response.status)
            }
            setData(myData);
            setLoading(false);
        } catch (error) {
            setError(error.message)
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url])


    return { data, loading, error }
}

export default useFetch