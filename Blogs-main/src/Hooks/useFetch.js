import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Can't fetch data from server!")
                }
                return res.json()
            })
            .then(data => {
                setTimeout(()=>{

                    setIsPending(false)
                    setData(data)
                    setError(null)
                },250)
            })
            .catch(error => {
                setIsPending(false)
                setError(error.message)
            })
    }, [url])

    return { data, isPending, error }
}

export default useFetch;