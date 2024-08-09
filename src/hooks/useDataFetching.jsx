/* Jewoo */
import { useState, useEffect } from "react";

export default function useDataFetching(dataSource) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    /*Check if the Data is fetched or not. Otherwise it shows the HTTP error*/
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(dataSource);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                console.log('Fetched data:', result);
                setData(result);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [dataSource]);
    /*Return the fetched result*/
    return [loading, error, data];
}
